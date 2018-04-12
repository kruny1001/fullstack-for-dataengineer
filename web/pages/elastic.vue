<template>
  <section>
    <h3> 일라스틱서치 데모 </h3>
    <pre class="pa4">
      본 데모는 아래의 링크를 참조 하였습니다. 
      https://www.elastic.co/blog/data-visualization-elasticsearch-aggregations
      ElasticSearch 
      Vue.js
      D3js v4
    </pre>
    
    <div id="donut-chart"></div>

    <button @click="donut()"> Create Donut </button>
  </section>
</template>

<script>
const ELS = require('elasticsearch');
import * as d3 from "d3"

export default {
  mounted() {
    var vm = this
    vm.CLIENT = new ELS.Client({
      host: '0.0.0.0:9200',
      // apiVersion: '5.0'
    })
    vm.CLIENT.search({
      index: 'nfl',
      type: '2013',
      size: 10,
      body: {
        // Begin query.
        query: {
          // Boolean query for matching and excluding items.
          bool: {
            must: { match: { 
              "description": "TOUCHDOWN" 
              } 
            },
            must_not: { match: { "qtr": 5 } }
          }
        },
        // Aggregate on the results
        aggs: {
          touchdowns: {
            terms: {
              field: "qtr",
              // order by quarter, ascending
              order: { "_term": "asc" }
            }
          }
        }
      }
    }).then(function(resp) {
      // console.log(resp);
      // D3 code goes here.
      vm.touchdowns = resp.aggregations.touchdowns.buckets;
      vm.donut()
    }).catch(function(err) {
      console.log(err);
      // D3 code goes here.
    });
  },
  methods:{
    donut(){
      var vm = this
      var tooltip = d3.select('#donut-chart')            
        .append('div')                             
        .attr('class', 'tooltip');                 

      tooltip.append('div')                        
        .attr('class', 'label');                   

      tooltip.append('div')                        
        .attr('class', 'count');                   

      tooltip.append('div')                        
        .attr('class', 'percent');  

      var width = 360;
      var height = 360;
      var radius = Math.min(width, height) / 2;

      var color = d3.scaleOrdinal(d3.schemeCategory20c);
      var svg = d3.select('#donut-chart')
          .append('svg')
          .attr('width', width)
          .attr('height', height)
          .append('g')
          .attr('transform', 'translate(' + (width / 2) + 
            ',' + (height / 2) + ')');
        
        var donutWidth = 75;

        var arc = d3.arc()
          .innerRadius(radius - donutWidth)
          .outerRadius(radius);

        var pie = d3.pie()
          .value(function(d) { return d.doc_count; })
          .sort(null);

        var legendRectSize = 18;
				var legendSpacing = 4;
        
        var path = svg.selectAll('path')
          .data(pie(vm.touchdowns))
          .enter()
          .append('path')
          .attr('d', arc)
          .attr('fill', function(d, i) { 
            return color(d.data.key);
          
          });
        
        path.on('mouseover', function(d) {
          var total = d3.sum(vm.touchdowns.map(function(d) {
            return d.value;
          }));
          var percent = Math.round(1000 * d.data.doc_count / total) / 10;
          tooltip.select('.label').html(d.data.key);
          tooltip.select('.count').html(d.data.doc_count);
          tooltip.select('.percent').html(percent + '%');
          tooltip.style('display', 'block');
        });
                
        path.on('mouseout', function() {
          tooltip.style('display', 'none');
        });
                  
        var legend = svg.selectAll('.legend')
          .data(color.domain())
          .enter()
          .append('g')
          .attr('class', 'legend')
          .attr('transform', function(d, i) {
            var height = legendRectSize + legendSpacing;
            var offset =  height * color.domain().length / 2;
            var horz = -2 * legendRectSize;
            var vert = i * height - offset;
            return 'translate(' + horz + ',' + vert + ')';
          });
                
        legend.append('rect')
          .attr('width', legendRectSize)
          .attr('height', legendRectSize)
          .style('fill', color)
          .style('stroke', color);
                
                legend.append('text')
          .attr('x', legendRectSize + legendSpacing)
          .attr('y', legendRectSize - legendSpacing)
          .text(function(d) { return d; });

      
      // d3 donut chart
        // var width = 600,
        //     height = 300,
        //     radius = Math.min(width, height) / 2;
        // var color = ['#ff7f0e', '#d62728', '#2ca02c', '#1f77b4'];
        // var arc = d3.svg.arc()
        //     .outerRadius(radius - 60)
        //     .innerRadius(120);
        // var pie = d3.layout.pie()
        //     .sort(null)
        //     .value(function (d) { return d.doc_count; });
        // var svg = d3.select("#donut-chart").append("svg")
        //     .attr("width", width)
        //     .attr("height", height)
        //     .append("g")
        //     .attr("transform", "translate(" + width/1.4 + "," + height/2 + ")");
        // var g = svg.selectAll(".arc")
        //     .data(pie(touchdowns))
        //     .enter()
        //     .append("g")
        //     .attr("class", "arc");
        // g.append("path")
        //     .attr("d", arc)
        //     .style("fill", function (d, i) { return color[i]; });
        // g.append("text")
        //     .attr("transform", function (d) { return "translate(" + arc.centroid(d) + ")"; })
        //     .attr("dy", ".35em")
        //     .style("text-anchor", "middle")
        //     .style("fill", "white")
        //     .text(function (d) { return d.data.key; });
    }
  },
  data() {
    return {
      CLIENT: null,
      touchdowns:[]
    }
  },

}
</script>
<style>
.legend {
    font-size: 13px;
  }
  h1 {
  font-size: 15px;
  text-align: center;
	}
  rect {
    stroke-width: 2;
  }
  #chart {
  height: 360px;
  margin: 0 auto;                            
  position: relative;
  width: 360px;
	}
  .tooltip {
  box-shadow: 0 0 5px #999999;
  display: none;
  font-size: 12px;
  left: 130px;
  padding: 10px;
  position: absolute;
  text-align: center;
  top: 95px;
  width: 80px;
  z-index: 10;
  line-height: 140%; /*Interlineado*/
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  border-radius: 2px;
	}
  
  .label {
   font-weight: 600;
  }
  </style>