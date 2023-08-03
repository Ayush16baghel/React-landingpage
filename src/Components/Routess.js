import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from "./Home";
import Products from "./Products";
import Contact from "./Contact";
import About from "./About";

const Routess =() =>(
    <Routes>
        <Route exact path="/" Component={Home}/>
        <Route  path="/products" exact Component={Products}/>
        <Route  path="/about" exact Component={About}/>
        <Route  path="/contact" exact Component={Contact}/>
    </Routes>
);
export default Routess;