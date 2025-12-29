import React from "react";
export class Statemanagement extends React.Component{
  
  constructor(){
        super();
        this.state = {
            greeting : "Today is Wednesday, Semi Christmas"
        } 
        this.handleevent = this.handleevent.bind(this);
    }

    handleevent(){
       console.log(this);
        this.setState({
            greeting:"Christmas is on the way, Santa is coming to ur doors."
        })
    }
    render(){
        return(
            <>
           <h1>{this.state.greeting}</h1>
            <button onClick={()=>{this.handleevent()}}>Click Here</button>
            
            </>
        )
    }
}