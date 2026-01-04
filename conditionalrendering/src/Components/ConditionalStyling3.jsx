import React from "react";

export class ConditionalStyling3 extends React.Component{
    constructor(){
        super();
        this.state = {
            hadLunch : false
        }
    }
    render(){
        return(
            <>

            {
                // this.state.hadLunch && <p style={{color:this.state.hadLunch ? "blue" : "red"}}>Healthy</p>
                this.state.hadLunch ? <p style={{color:this.state.hadLunch ? "blue" : "red"}}>Healthy</p> : <p style={{color:this.state.hadLunch ? "blue" : "red"}}>Not Healthy</p>
            }
            </>
        )
    }
}