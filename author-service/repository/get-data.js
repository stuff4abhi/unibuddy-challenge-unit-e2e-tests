const request = require('request');

function getData(book_id){
    console.log('----actual----', book_id)
    return new Promise((resolve, reject) => {
        request.post('https://ie4djxzt8j.execute-api.eu-west-1.amazonaws.com/coding', {body: JSON.stringify({book_id})}, (e,r,body) => {
            if(e){
                return reject(e);
            }
            const data = JSON.parse(body)
            resolve({...data, id: book_id});
        });
    });
}

module.exports = getData;
