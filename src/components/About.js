import React from "react";
import "./About.css";
import headshot from "./IMG-3028.jpg"

function About() {
    return (
        <div id="about" className="box">
            <h1>About Me</h1>
            <img id="headshot" src={headshot} alt="Logo"/>
            <div id="desc">
                My name is Christian Valdovinos and I am a senior at Harvey Mudd College where I will be graduating May
                2023 with a major in Computer Science and a concentration in Economics. I worked as a Software
                Engineering Intern at Social Finance (SoFi) in San Francisco, CA this Summer (May - August 2022).
            </div>
        </div>
    );
}

export default About;
