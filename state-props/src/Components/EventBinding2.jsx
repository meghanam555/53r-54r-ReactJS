import React from "react";
export class EventBinding2 extends React.Component{
    constructor(){
        super();
        this.state = {
            name: "Durga"
        }
    }
    handleClick = ()=>{
        this.setState({
            name: "Uppal_balu"
        })
    }
    oldgf = ()=>{
        this.setState({
            name:this.state.name
        })
    }
    render(){
        return(
            <>
            <p>Venki girlfriend is : {this.state.name}</p>
            <button onClick={this.handleClick}>New Girlfriend</button>
            <button onClick={}>Old Girlfriend</button>
            </>
        )
    }
}