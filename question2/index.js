import React from 'react';
import ReactDOM from 'react-dom';
import Order from './order';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: []
        };
    }

    /* You are allowed to add methods here */


    /* END AREA OF ADDED METHODS */

    render() {
        let lastOrder = {};
        let item = "";
        let quantity = "";
        let numOrders = this.state.orders.length;
        if (numOrders > 0) {
            lastOrder = this.state.orders[numOrders-1];
            item = lastOrder.item;
            quantity = lastOrder.quantity;
        }
        return <div id="MainDiv"> 
            <h1> Fish Store Orders </h1> 
            <Order 
                /* CAN ADD CODE HERE */

                />
            <div>
                <h2>Order History</h2>
                <p>Number of Orders: {this.state.orders.length}</p>
                <h3>Most Recent Order</h3>
                <p>Item: {item}</p>
                <p>Quantity: {quantity}</p>
            </div>
            
            </div>;
    }
}


ReactDOM.render( < App / > , document.getElementById('root'));
