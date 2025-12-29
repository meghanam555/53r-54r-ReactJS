import React from "react";
export class EventBinding1 extends React.Component{
    constructor(){
        super();
        this.state = {
            name:"Hiii, Everyone"
        }
        // this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        // console.log(this);
        this.setState({
            name:"Hello Everybody"
        })
    }
    render(){
        return(
            <>
            {/* <h1>Helloo</h1> */}
            <h1>{this.state.name}</h1>
            {/* <button onClick={this.handleClick}>Click Here for Change</button> */}
            {/* <button onClick={()=>{this.handleClick()}}>Click Here</button> */}
            </>
        )
    }
}