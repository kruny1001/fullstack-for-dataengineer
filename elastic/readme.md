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
                "type" : "short",
                "store" : "yes"
            },
            "min" : {
                "type" : "short",
                "store" : "yes",
                "ignore_malformed" : "true"
            },
            "sec" : {
                "type" : "short",
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
                "type" : "short",
                "store" : "yes",
                "ignore_malformed" : "true"
            },
            "togo" : {
                "type" : "short",
                "store" : "yes",
                "ignore_malformed" : "true"
            },
            "ydline" : {
                "type" : "short",
                "store" : "yes",
                "ignore_malformed" : "true"
            },
            "scorediff" : {
                "type" : "short",
                "store" : "yes"
            },
            "series1stdn" : {
                "type" : "short",
                "store" : "yes"
            },
            "description" : {
                "type" : "string",
                "store" : "yes"
            },
            "scorechange" : {
                "type" : "short",
                "store" : "yes"
            },
            "nextscore" : {
                "type" : "short",
                "store" : "yes"
            },
            "teamwin" : {
                "type" : "short",
                "store" : "yes"
            },
            "offscore" : {
                "type" : "short",
                "store" : "yes"
            },
            "defscore" : {
                "type" : "short",
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