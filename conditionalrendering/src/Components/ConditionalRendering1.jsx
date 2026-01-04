import React from "react";
export class ConditionalRendering1 extends React.Component{
    constructor(){
        super();
        this.state = {
            ismorning : false
        }
    }
    render(){
        return(
            <>
            {
                this.state.ismorning ? "Good Morning" : "Good Evening"
            }
            </>
        )
    }
}