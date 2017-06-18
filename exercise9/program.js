var http = require('http');
var bl   = require('bl');

var urls = process.argv.slice(2, 5);

function getRequest(url, callback) {
  http.get(url, function(response) {
    response.pipe(bl(function(err, data) {
      if (err) {
        console.error(err);
      }

      callback(null, data.toString());
    }));
  });
}

function printResults(results) {
  for (var i = 0; i < results.length; i++) {
    console.log(results[i]);
  }
}

var results = [];
var count = 0;
urls.forEach(function(url, index) {
  getRequest(url, function(err, data) {
    if (err) {
      console.err(err);
    }

    results[index] = data;
    count++;

    if (count == 3) {
      printResults(results);
    }
  });
});