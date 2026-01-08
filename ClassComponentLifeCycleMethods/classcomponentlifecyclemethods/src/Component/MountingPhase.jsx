import React from "react";

export class MountingPhase extends React.Component{
    constructor(){
        
        super();
        this.state = {
            message: "Hello Here"
        }
        console.log("Constructor : Whenever Component is Created")
    }
    componentDidMount(){
        console.log("ComponentDidMount Phase : Executing")
        setTimeout(()=>{
            this.setState({
                message : "Hello There"
            })
        }, 2000)
    }
    render(){
        console.log("Render: Updating UI")
        return(
            <>
            {this.state.message}
            </>
        )
    }
}