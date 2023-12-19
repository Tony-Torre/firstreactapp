import React from "react"
import { json } from "react-router-dom"

class GetData extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            placeHolderObj: []
        }
    }
    componentDidMount(){
    fetch("https://localhost:7145/api/AnagraficaGenerales")
    .then(response => response.json())
    .then((json)=> this.setState({placeHolderObj: json}))
    }

    render(){
        const {placeHolderObj} = this.state
        return(
            <div>
                    {placeHolderObj.map((placeHolderObj)=>(
                        <div>
                            <li>
                                nome: {placeHolderObj.nominativo}
                            </li>
                        </div>
                    ))}
            </div>
        )
    }
}

export default GetData