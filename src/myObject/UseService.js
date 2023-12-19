import React from "react";

const UseService = ({TService}) =>{
    const salutoCasuale = TService.casualString()
    return(
        <div>
            <h1>Un saluto (Forse) casuale</h1>
            <h3>{salutoCasuale}</h3>
        </div>
    )
}

export default UseService