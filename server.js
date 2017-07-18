var express = require('express');

var bodyParser = require('body-parser');
var cors = require('cors');
var useragent = require ('express-useragent');

var app = express();

var app = module.exports = express();

app.use(bodyParser.json());
app.use(cors());
app.use(useragent.express());


var api = '/api/whoami';

app.get(api, function(req, res, next){
  console.log('100');
  var language =  req.acceptsLanguages();
  var software = "OS: " + req.useragent.os + ", Browser: " + req.useragent.browser;
  var ipaddress = req.ip;
  
  res.json({'ipaddress': ipaddress, 'language': language[0], 'software': software});
});


app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});


app.get("/dreams", function (request, response) {
  response.send(dreams);
});

// could also use the POST body instead of query string: http://expressjs.com/en/api.html#req.body
app.post("/dreams", function (request, response) {
  dreams.push(request.query.dream);
  response.sendStatus(200);
});

// Simple in-memory store for now
var dreams = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
];

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
  




