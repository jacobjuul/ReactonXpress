var ReactDOM = require('react-dom');
var React = require('React');
var GroceryItemList = require('./components/GroceryItemList.jsx');

var initial = [{
    name: 'Ice Cream'
}, {
    name: 'Studenter Brod'
}, {
    name: 'Flodeboller',
    purchased: true
}];

ReactDOM.render(<GroceryItemList items={initial} />, app);