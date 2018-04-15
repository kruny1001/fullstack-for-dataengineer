GET nfl/_mapping 

POST nfl 
{
  "settings" : {
        "number_of_shards" : 1
    }
}

PUT /nfl
{
  "settings": {
    "number_of_replicas": 1,
    "number_of_shards": 3,
    "analysis": {},
    "refresh_interval": "1s"
  },
  "mappings": {
    
    "2013" : {
        "properties" : {
            "gameid" : {
                "type" : "text",
                "index" : "not_analyzed",
                "store" : "yes"
            },
            "qtr" : {
                "type" : "number",
                "store" : "yes"
            },
            "min" : {
                "type" : "integer",
                "store" : "yes",
                "ignore_malformed" : "true"
            },
            "sec" : {
                "type" : "integer",
                "store" : "yes",
                "ignore_malformed" : "true"
            },
            "off" : {
                "type" : "string",
                "index" : "not_analyzed"
            },
            "def" : {
                "type" : "string",
                "index" : "not_analyzed"
            },
            "down" : {
                "type" : "integer",
                "store" : "yes",
                "ignore_malformed" : "true"
            },
            "togo" : {
                "type" : "integer",
                "store" : "yes",
                "ignore_malformed" : "true"
            },
            "ydline" : {
                "type" : "integer",
                "store" : "yes",
                "ignore_malformed" : "true"
            },
            "scorediff" : {
                "type" : "integer",
                "store" : "yes"
            },
            "series1stdn" : {
                "type" : "integer",
                "store" : "yes"
            },
            "description" : {
                "type" : "string",
                "store" : "yes"
            },
            "scorechange" : {
                "type" : "integer",
                "store" : "yes"
            },
            "nextscore" : {
                "type" : "integer",
                "store" : "yes"
            },
            "teamwin" : {
                "type" : "integer",
                "store" : "yes"
            },
            "offscore" : {
                "type" : "integer",
                "store" : "yes"
            },
            "defscore" : {
                "type" : "integer",
                "store" : "yes"
            },
            "season" : {
                "type" : "date",
                "format" : "YYYY",
                "ignore_malformed" : "true"
            }
        }
    }
  }
}

curl -XPOST localhost:9200/nfl/2013/_bulk?pretty --data-binary @nfl_2013.json