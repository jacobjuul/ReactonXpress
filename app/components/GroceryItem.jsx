var React = require('react');
var action = require('./../actions/GroceryItemActionCreator.jsx')

var GroceryItem = React.createClass({
    delete: function(e) {
        e.preventDefault();
        action.delete(this.props.item);
    },
    togglePurchased: function(e) {
        e.preventDefault();
        if (this.props.item.purchased) {
            action.unbuy(this.props.item);
        }  else {
            action.buy(this.props.item);
        }
    },

    render: function() {
        return (
            
             <li className={this.props.item.purchased ? 'strikethrough' : ''}>
              {this.props.item.name}
              <form className="three columns" onSubmit={this.togglePurchased}> 
                <button className={this.props.item.purchased ? "" : "button-primary"}>
                    {this.props.item.purchased ? "Unbuy" : "Buy"}
                </button>
              </form>
              <form className="three columns" onSubmit={this.delete}> <button>x</button></form>
            </li>

          

        )
    }
});

module.exports = GroceryItem;