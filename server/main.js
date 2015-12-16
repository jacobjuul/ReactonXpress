var express = require('express');
var app = new express();
var parser = require('body-parser');

require('./database.js');
app.use(express.static(__dirname + '/../.tmp'));
app.use(parser.json());
app.use(parser.urlencoded({
    extended: false
}));

app.get('/', function (req, res) {
    res.render('./../app/index.ejs', {});
});

// api routes
require('./routes/items.js')(app);

app.listen(1337);

// api routes
require('./routes/items.js')(app);