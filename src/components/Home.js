import React from "react";
import "./Home.css"

function Home() {
    return (
        <div id="homeDiv" className="box">
            <div id="homeText">
                <h1>Hello, my name is <span id="name">Christian</span>.</h1>
                Welcome to my page!
            </div>
        </div>
    );
}

export default Home;

