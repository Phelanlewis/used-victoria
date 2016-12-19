var request =   require('request');
var cheerio =   require('cheerio');
var URL     =   require('url-parse');
var apiai   =   require('apiai');

var app = apiai("798a3a0092d8471b9db20d3e102a331f");

//node webscarpe section
var pageToVisit = "http://www.usedvictoria.com/";

//testin that it works
console.log("Visiting page " + pageToVisit);

request(pageToVisit, function(error, response, body) {
   if(error) {
     console.log("Error: " + error);
   }
   // Check status code (200 is HTTP OK)
   console.log("Status code: " + response.statusCode);
   if(response.statusCode === 200) {
     // Parse the document body
     var $ = cheerio.load(body);
     console.log("Page title:  " + $('title').text());
   }
});

//apiai section to test that it works

var request = app.textRequest('<Your text query>', {
    sessionId: '<unique session id>'
});

request.on('response', function(response) {
    console.log(response);
});

request.on('error', function(error) {
    console.log(error);
});

request.end();
