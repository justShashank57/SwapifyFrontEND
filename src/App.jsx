import React from "react";
import Navbar from "./components/Navbar";
import One from "./Pages/page1";
import Two from "./Pages/page2";
import Three from "./Pages/page3";
export default function App(){
    return (
        <div>
            <Navbar/>
            <One/>
            <Two/>
            <Three/>
        </div>
    )
}