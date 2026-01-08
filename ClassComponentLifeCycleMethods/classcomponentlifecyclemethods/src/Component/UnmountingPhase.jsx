import React from "react";
export default class UnmountingPhase extends React.Component{
    componentDidMount(){
        this.timer = setInterval(()=>{
            console.log("Timer is Running");
        }, 1000)
    }
    componentWillUnmount(){
        console.log("Unmounting Phase Executing");
        clearInterval(this.timer);
    }
    render(){
        return(
            <>
                <h1>Component Unmounting Phase</h1>
            </>
        )
    }
}