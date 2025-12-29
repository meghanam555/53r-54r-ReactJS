import React from "react";
export class Props extends React.Component{
    render(){
        return(
            <div>
                <div>
                    <h1>Employee Details</h1>
                    <p>EId: {this.props.eid}</p>
                    <p>EName: {this.props.ename}</p>
                    <p>ESalary : {this.props.esalary}</p>
                    <p>EDepartment: {this.props.edepartment}</p>
                    <p>EEmail : {this.props.eemail}</p>
                    <p>EAte: {this.props.eate ? "Employee Eaten The Food" : "Employee eating Manager Brain"}</p>
                    <p>ESkills : {this.props.eskills}</p>
                </div>
            </div>
        )
    }
}