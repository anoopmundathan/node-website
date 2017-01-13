var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.send('Helo World');
});

app.listen(8000, function() {
	console.log('Server running at port 8000');
});