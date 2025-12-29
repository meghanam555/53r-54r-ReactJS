import React from "react";

export default class CounterApp extends React.Component{
    constructor(){
        super();
        this.state = {
            count : 0
        }
        this.reset = this.reset.bind(this);
    }
    increment = ()=>{
        this.setState({
            count: this.state.count + 1
        })
    }
    decrement(){
        this.setState({
            count: this.state.count - 1
        })
    }
    reset(){
        this.setState({
            count : 0
        })
    }
    render(){
        return(
            <>
            <div style={{textAlign:"center", backgroundColor:"blue", color:"white",width:"300px", height:"150px", padding:"10px", margin:"170px 10px", borderRadius:"10px",position:"relative", right:"-400px"}}>
                <h1>Counter : {this.state.count}</h1>
                <button onClick={this.increment} style={{border:"2px solid black", borderRadius:"5px", margin:"10px", padding:"10px", backgroundColor:"white"}}>Increment</button>
                <button onClick={()=>{this.decrement()}} style={{border:"2px solid black", borderRadius:"5px", margin:"10px", padding:"10px", backgroundColor:"white"}}>Decrement</button>
                <button onClick={this.reset} style={{border:"2px solid black", borderRadius:"5px", margin:"10px", padding:"10px", backgroundColor:"white"}}>Reset</button>
            </div>
            
            </>
        )
    }
}