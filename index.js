var express = require('express');
var app = express();

app.get('/healthz', function() {
  res.status(200);
  res.send('ok');
});

app.get('*', function(req, res) {
  res.status(404);
  res.send('<html><head><title>Not Found</title></head><body>That page doesn\'t exist.</body></html>');
});

app.listen(8080);
