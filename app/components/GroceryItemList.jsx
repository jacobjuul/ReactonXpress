var React = require('react');

var GroceryItemList = React.createClass({
    render: function(){
        return (
            <div>
                <h1>Grocery listify</h1>
                    <div>
                    { 
                        this.props.items.map(function(item, index){
                            return  (
                                <div>
                                    {item.name}
                                </div>
                                )
                        })

                    }
                    </div>
               
            </div>
        )
    }
})

module.exports = GroceryItemList;