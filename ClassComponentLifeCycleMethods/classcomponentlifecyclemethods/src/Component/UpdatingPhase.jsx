import React from "react";
export class UpdatingPhase extends React.Component{
    constructor(){
        super();
        this.state = {
            count : 0
        }
    }
    increment = ()=>{
        this.setState({
            count : this.state.count + 1
        })
    }
    componentDidUpdate(prevprops, prevState){
        console.log("ComponentDidUpdate Phase");
        console.log("Previous Count Value : " +prevState.count);
        console.log("Current Count Value : " + this.state.count);
    }
    render(){
        console.log("Render Method Execution Happening");
        return(
            <>
            {this.state.count}
            <button onClick={this.increment}>Increment</button>
            </>
        )
    }
}