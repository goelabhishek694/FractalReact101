import React, { Component } from 'react'

export default class CounterClass extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: 1,
            message: "Hello"
        }
    }

    handleIncrement = () => {
        console.log("counter incremented");
        //check to see if cart quanity is exceeding the stock quantity
        this.setState(prevState => {
            return {
                count: prevState.count+1
            }
        })
    }

    handleDecrement = () => {
        console.log("counter decremented");
        if(this.state.count<=1) return 
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        })
    }
  render() {
    return (
        <>
        <div>Cart Class</div>
        <div style={{"display":"flex", "gap":"1rem"}}>
            <button onClick={this.handleIncrement}>+</button>
            <p>{this.state.count}</p>
            <button onClick={this.handleDecrement}>-</button>
        </div>

    </>
    )
  }
}
