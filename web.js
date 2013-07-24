var express = require('express');
var app = express();
app.use(express.logger());

var fs = require('fs');

app.get('/', function(request, response) {
  content = fs.readFileSync('index.html', 'utf8');
  var buffer = new Buffer(content, "utf-8");
  response.send(buffer.toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
