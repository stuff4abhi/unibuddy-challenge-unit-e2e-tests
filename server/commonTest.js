const request = require('supertest'); //require supertest
const app = require('./api/server') //supertest hits the HTTP server (your app)

/*
This piece of code is for getting the authorization token after login to your app.
const token;
test("Login to the application", function(){
    return request.post(``).then((response)=>{
        token = response.body.token  //to save the login token for further requests
    })
});
*/

module.exports =
    {
        request,
        app
        //, token     -- export if token is generated
    }