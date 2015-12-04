var React = require('react');

var GroceryItem = React.createClass({
    render: function() {
        return (
             <li>
              {this.props.item.name}
            </li>
        )
    }
});

module.exports = GroceryItem;