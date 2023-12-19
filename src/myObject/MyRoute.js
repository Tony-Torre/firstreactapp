import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";
import FirstWithClass from "./FirstWithClass";
import First from "./FirstJS";

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
        <Routes>
            <Route path="/" element={"/"}/>
            <Route path="/First" element={<First/>}/>
            <Route path="/FirstWithClass" element={<FirstWithClass/>}/>
        </Routes>
        </BrowserRouter>
        );
    }
export {MyMenu}