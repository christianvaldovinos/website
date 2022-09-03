import React from "react";
import "./Work.css"

function Work() {
    return (
        <div id="work" className="box">
            <h1>Work</h1>
            <div class="links">
                Here is the repository for this website: {' '}
                <a href="https://github.com/christianvaldovinos/website" target="_blank">Github Repository</a>
            </div>
            <div className="links">
                Here is the working link for another major project I've worked on: {' '}
                <a href="https://cs124-lab3-fe950--pr18-lab5-dii4vh81.web.app/" target="_blank">List App</a>
            </div>
            <div className="links">
                Here is the repository for the list app: {' '}
                <a href="https://github.com/cvaldovinos/cs124-lab2/tree/lab5" target="_blank">Github Repository</a>
            </div>
        </div>
    );
}

export default Work;
