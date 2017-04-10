// server.js
  // SERVER-SIDE JAVASCRIPT
  // setting up server to use express
  var express = require('express');
  // set up application (app) object variable to store express functions
  var app = express();

  // Allow CORS: we'll use this today to reduce security so we can more easily test our code in the browser.
  // bind application-level (express) middleware to an instance of the app object
  // executing the functions that take in requests, sends out responses, and passes control to the next middleware function
  app.use(function(req, res, next) {
    // when the binding application function runs, respond with the header below
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    // callback next to pass controll to the next middleware
    next();
  });
  // method: get, address: /
  app.get('/', function (req, res) {
    // send out string 'Hello World!' when client requests to get info from address
    res.send('Hello World!');
    console.log(req);
    console.log(res);
  });
  // await and send out response from port 3000 and console log Hello World to port when function is run-- "in production use"
  app.listen(process.env.PORT || 3000, function () {
    console.log('Example app listening at http://localhost:3000/');
  });
