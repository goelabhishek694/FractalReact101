import React, { Component } from 'react'

export default class Lifecycle extends Component {
    constructor(props){
      console.log("constructor is called");
        super(props);
        this.state = {
            count: 1,
            message: "Hello"
        }
    }

    componentDidMount(){
      console.log("run once after first render");
      //used for sideeffect -> calling an api , doing any async task . 
      // products data from api -> set our state 
      // set out state -> ui is re -rendered
    }

    componentDidUpdate(){
      console.log("i will run after every re-render");
      this.setState()
    }

    shouldComponentUpdate(){
      console.log("I am asked before re -rendering");
      //return true if want to update the comp else false
      return true;
    }

    componentWillUnmount(){
      console.log(" i am unmounting");
      //peform a cleanup. cancel any network request. 
      //prevent memory leak and optimize the code. 
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
    console.log("render is called");
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
