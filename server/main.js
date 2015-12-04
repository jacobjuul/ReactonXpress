var express = require('express');
var app = new express();

app.use(express.static(__dirname + '/../.tmp'));

app.get('/', function (req, res) {
    res.render('./../app/index.ejs', {});
});




app.listen(1337);