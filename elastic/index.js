const ELS = require('elasticsearch');
const CLIENT = new ELS.Client({
    host: '0.0.0.0:9200',
    // apiVersion: '5.0'
})

CLIENT.search({
    index: 'nfl',
    type: '2013',
    size: 5,
    body: {
        // Begin query.
        query: {
            // Boolean query for matching and excluding items.
            bool: {
                must: { match: { "description": "TOUCHDOWN" }},
                must_not: { match: { "qtr": 5 }}
            }
        },
        // Aggregate on the results
        aggs: {
            touchdowns: {
                terms: {
                    field: "qtr",
                    // order by quarter, ascending
                    order: { "_term" : "asc" }
                }
            }
        }
        // End query.
    }
}).then(function (resp) {
    console.log(resp);
    // D3 code goes here.
}).catch(function (err) {
    console.log(err);
    // D3 code goes here.
});