<template>
  <div>
    <header-menu></header-menu>
    <section class="mv2 w-70 center">
      <section class="mv2 ph3 center">
        <div> https://insights.stackoverflow.com/survey/2017</div>
        <section class="tc center mv5 ph3 measure-wide">
          <h2>설문 조사 결과</h2>
          <hr class="mv3" />
          <small class="f6 lh-copy black-60 db mb2"> 
            안녕하세요! 
            강의에 참석해주신 분들께 감사의 인삿말 드립니다. <br />
            강의 이전에 설문조사를 하려고 합니다. 꼭 부탁드립니다.
          </small>
        </section>

        <h3> Quiz Result </h3>
        <div class="result"></div>

        <h3> Data Exploratory Data Analysis </h3>
        <h3> Correlation and Regression </h3>
        <h3> Multiple and Logistic Regression </h3>
        <h3> Foundations of Inference </h3>

      </section>
    </section>
  </div>
</template>
<script>
import { database, storage } from '~/plugins/fbConn'
import { mapState, mapActions } from "vuex"
import _ from 'lodash'
import * as d3 from "d3"

import HeaderMenu from "~/components/HeaderMenu.vue"
import Items from "~/components/Items.vue"

export default {
  components: {
    Items,
    HeaderMenu
  },
  data(){
    return{
      results: [
        {score: 12},
        {score: 12},
        {score: 12},
        {score: 12},
        {score: 6},
        {score: 24}
      ]
    }
  },
  mounted(){
    var vm = this
    console.log(vm.results)
    const scores = vm.results.map(result => result.score)
    console.log(scores)
    var counts = {};
    scores.forEach(function(d) {
      if (!counts[d]) {
        counts[d] = 0;
      }
      counts[d]++;
    });
    console.log(scores, counts)
    var width = 360;
    var height = 360;
    var margin = {top: 20, right: 0, bottom: 60, left: 140}
    width = width - margin.left - margin.right;
    height = height - margin.top - margin.bottom;

    var data = d3.entries(counts);

    console.log(data)

    var radius = Math.min(width, height) / 2;
    var color = d3.scaleOrdinal(d3.schemeCategory20b);
    var svg = d3.select('.result')
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', 'translate(' + (width / 2) +
        ',' + (height / 2) + ')');

    var arc = d3.arc()
      .innerRadius(0)
      .outerRadius(radius);

    var pie = d3.pie()
      .value(function(d) {
        return d.value;
      })
      .sort(null);

    var path = svg.selectAll('path')
      .data(pie(data))
      .enter()
      .append('path')
      .attr('d', arc)
      .attr('fill', function(d, i) {
        return color(d.data.key);
      });
    // var yScale = d3.scaleBand()
    //   .paddingInner(1.4)
    //   .domain(vm.results.map(d => d.score))
    //   .range([0, height]);

    // var xScale = d3.scaleLinear()
    //   .domain([0, 10])
    //   .range([0, width])
    // var yAxis = d3.axisLeft(yScale)
    // var xAxis = d3.axisBottom(xScale)

    // var container = d3.select("body").selectAll("svg")
    //   .attr("width", width + margin.left + margin.right)
    //   .attr("height", height + margin.top + margin.bottom)
    //   .append('g')
    //   .attr('transform', `translate(${margin.left}, ${margin.top})`)
    // // Create Bar Containers
    // var barContainer  = container.selectAll('g')
    //   .data(vm.results)
    //   .enter()
    //     .append('g')
    //       .attr('transform', (d, i) => 'translate(30, ' + i * 13 + ')')
    // // Draw Transcript GeneBar at Bar Container
    // var geneBar = barContainer
    //   .append('rect')
    //     .attr('width', function(d) {return 13} )
    //     .attr('height', 3)
    //     .attr('x', function(d) { return 32})  
    //     .attr('y', 3)
    //     .attr('fill', 'lightgreen')
    //     .attr('stroke-width', 1)
    //     .attr('stroke', 'black')
  }
}
</script>
