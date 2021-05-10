import React from 'react';


class Order extends React.Component{
    constructor(props){
        super(props);
        this.state = {item: "", quantity: ""};
    }

    itemHandler(event){
        this.setState({ item: event.target.value });
    }

    quantityHandler(event){
        this.setState({ quantity: event.target.value });
    }

    clickHandler(event){
        event.preventDefault();
        console.log(this.state);
        this.props.order(this.state);
    }

    render() {
        return <div>
            <h2>Order Form</h2>
            <div id="OrderForm">
                <form>  
                    <label>Item: </label>  
                    <select onChange={this.itemHandler.bind(this)} defaultValue={"none"}>
                    <option value="none" disabled hidden>Select an Option</option>
                        <option value="Gold Fish">Gold Fish</option>
                        <option value="Grey Whale">Grey Whale</option>
                        <option value="Dolphin">Dolphin</option>
                        <option value="Sea Lion">Sea Lion</option>
                    </select>

                    <label>Quantity: </label>
                    <input type="text" name="qty" onChange={this.quantityHandler.bind(this)} required />
                    <button onClick={this.clickHandler.bind(this)}>Send Order</button>
                </form>
            </div>
        </div>
    }
}

export default Order;