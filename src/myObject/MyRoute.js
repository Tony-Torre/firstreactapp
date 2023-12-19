import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";
import FirstWithClass from "./FirstWithClass";
import First from "./FirstJS";
import Login from "./Login";

const MyMenu = () => {
    return (
        <BrowserRouter>
        <li>
            <Link to ="/">Home</Link>
        </li>
        <li>
            <Link to ="/First">Primo</Link>
        </li>
        <li>
            <Link to ="/FirstWithClass">Classe</Link>
        </li>
        <li>
            <Link to ="/Login">Login</Link>
        </li>
        <Routes>
            <Route path="/" element={"/"}/>
            <Route path="/First" element={<First/>}/>
            <Route path="/FirstWithClass" element={<FirstWithClass/>}/>
            <Route path="/Login" element={<Login/>}/>
        </Routes>
        </BrowserRouter>
        );
    }
export {MyMenu}