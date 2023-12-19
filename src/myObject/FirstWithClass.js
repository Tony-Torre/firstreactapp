import React from "react";

class FirstWithClass extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            nominativo : "claudio orloff",
            employees : []
        }
    }
    render(){
        const objects = this.state;
        
        function GetEmployeeName(){
            return objects.nominativo
        }
        return (
            <h3>Membro della mitica accademy .NET : {GetEmployeeName()}</h3>
            )
        }
    }
    
    export default FirstWithClass