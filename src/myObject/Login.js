import React, { useState } from "react";
import { json } from "react-router-dom";

function GetData( email , password){
    
    fetch("https://localhost:7145/Login", {method: 'POST',
    headers: new Headers({
        'Content-Type': 'application/json',
    }),
    body: JSON.stringify({
        email: email,
        password: password,
    })
    })
    .then((response) => {
        if(response.status == 200){
            console.log("ciao")
    }
})
}

function Login(){
    const [email, setEmail] = useState("");
    const changeEmail = (event) => {
        setEmail(event.target.value)
    }
    const [password, setPassword] = useState("");
    const changePassword = (event) => {
        setPassword(event.target.value)
    }
    return (
        <form>
        <div class="form-outline mb-4">
        <input type="email" onChange={changeEmail} id="Email" class="form-control" />
        <label class="form-label" for="form2Example1">Email address</label>
        </div>
        
        <div class="form-outline mb-4">
        <input type="password" onChange={changePassword} id="Password" class="form-control" />
        <label class="form-label" for="form2Example2">Password</label>
        </div>
        <button type="button" class="btn btn-primary btn-block mb-4" onClick={() => GetData(email,password)}>Sign in</button>
        </form>
        )
    }
    
    export {Login}