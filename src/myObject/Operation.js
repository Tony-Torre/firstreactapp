import React from "react";

function Summon(props){
    let number = props.numero
    return number.n1+number.n2
}

function Sottrazione(props){
    
    let number = props.numero
    return number.n1 - number.n2
}

export {Summon, Sottrazione}