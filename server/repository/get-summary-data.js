const request = require('request');

function getSummaryData(query, results_length){
    console.log('----getting summary----', query, results_length)
    return new Promise((resolve, reject) => {
        request.post('http://localhost:3003/', {json: {query, results_length}}, (e,r,body) => {
            if(e){
                return reject(e);
            }
            resolve(body);
        });
    });
}

module.exports = getSummaryData;
