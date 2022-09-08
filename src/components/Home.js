import React from "react";
import "./Home.css"

function Home() {
    return (
        <div id="homeDiv" className="box">
            <div id="homeText">
                <h1>Hello, my name is <span id="name">Christian</span>.</h1>
                <p id="subHeadingHome">Welcome to my page!</p>
            </div>
        </div>
    );
}

export default Home;

