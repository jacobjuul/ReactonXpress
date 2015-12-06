var React = require('react');

var GroceryItem = React.createClass({
    render: function() {
        return (
             <li className={this.props.item.purchased ? 'strikethrough' : ''}>
              {this.props.item.name}
            </li>
        )
    }
});

module.exports = GroceryItem;