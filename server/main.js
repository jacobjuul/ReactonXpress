var express = require('express');
var app = new express();
var parser = require('body-parser');
var React = require('react');

require('node-jsx').install();

// set the view engine to ejs
app.set('view engine', 'ejs');

var GroceryItem = require('./models/GroceryItem.js');

require('./database.js');
app.use(express.static(__dirname + '/../.tmp'));
app.use(parser.json());
app.use(parser.urlencoded({
    extended: false
}));

app.get('/', function (req, res) {
    // res.render('./../app/index.ejs', {});
    var application = React.createFactory(require('./../app/components/GroceryItemList.jsx'));

    GroceryItem.find(function (error, doc) {
        var generated = React.renderToString(application({
            items: doc
        }));

        res.render('./../app/index.ejs', {
            reactOutput: generated
        });
    });
});

// api routes
require('./routes/items.js')(app);

app.listen(1337);