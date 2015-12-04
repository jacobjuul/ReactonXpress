var React = require('react');
var GroceryItem = require('./GroceryItem.jsx');

var GroceryItemList = React.createClass({
  render: function(){
    return (
      <div>
        <h1>Grocery listifys</h1>
        <div>
          <ul>
            {this.props.items.map(function(item, index){
              return  (
                <GroceryItem key={"item" + index} item={item} />
                )
              })
            }
          </ul>
        </div>
      </div>
      )
  }
});

module.exports = GroceryItemList;