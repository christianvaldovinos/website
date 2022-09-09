import React from "react";
import "./About.css";

function About() {
    return (
        <div id="about" className="box">
            <h1>About Me</h1>
            <div id="bottomLeftBox">
                <div id="back">
                    My name is Christian Valdovinos and I am a senior at Harvey Mudd College where I will be graduating
                    May 2023 with a major in <strong>Computer Science</strong> and a concentration in Economics. I
                    worked as a <strong>Software Engineering Intern</strong> at <strong>SoFi</strong> (Social Finance)
                    in San Francisco, CA this Summer (May - August 2022).
                </div>
            </div>
            <div id="bottomRightBox">
                <div id="back2">
                    <div id="skills">Programming Languages/Tools</div>
                    <img className="skillIcons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="python"/>
                    <img className="skillIcons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="java"/>
                    <img className="skillIcons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="cpp"/>
                    <img className="skillIcons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="javascript"/>
                    <img className="skillIcons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="react"/>
                    <img className="skillIcons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" alt="html"/>
                    <img className="skillIcons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt="css"/>
                    <img className="skillIcons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="postgreSQL"/>
                    <img className="skillIcons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg" alt="git"/>
                </div>
            </div>
        </div>
    );
}

export default About;
