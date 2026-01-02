import React from "react";

export class ChildrenProps extends React.Component{
    render(){
        return(
            <>
            <div style={{textAlign:"center",margin:"20px" ,width:"400px", height:"510px", borderRadius:"10px", color:"white", backgroundColor:"blue",border:"2px solid blue"}}>
                <h2>{this.props.name}</h2>
                <h2>{this.props.age}</h2>
                <h2>{this.props.place}</h2>
                <h2>{this.props.salary}</h2>
                {/* <h2>{this.props.skills}</h2> */}
                
                <div>
                    <ul>
                    {
                    this.props.skills.map((item, index)=>(
                     
                        //  <p key={index}>{item}</p>
                        <li key={index}>{item}</li>
                     
                    ))
                }
                </ul>
                </div>
                <h1 style={{color:"black", fontSize:"10px", backgroundColor:"pink"}}>{this.props.hildren}</h1>
                </div>
            </>
        )
    }
}