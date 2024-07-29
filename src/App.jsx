import "./App.css"

import { Route,Routes } from "react-router";
import React from "react";
import AboutMe from "./pages/AboutMe";
import Header from "./components/Header";
import Main from "./pages/Main";

export default function App() {


    return (
        <div className="app">
            <div className="wrapper">
            <Header/>
            <div className="body">
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/aboutme" element={<AboutMe/>}/>
            </Routes>
            </div>
            </div>
        </div>
 
    )
}
