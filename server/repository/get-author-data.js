const request = require('request');

function getAuthorData(book_id){
    console.log('----getting author----')
    return new Promise((resolve, reject) => {
        request.post('http://localhost:3002/', {json: {book_id}}, (e,r,body) => {
            if(e){
                return reject(e);
            }
            resolve(body);
        });
    });
}

module.exports = getAuthorData;
