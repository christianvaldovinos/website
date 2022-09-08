import React from "react";
import weatherAppImage from "./weatherAppImage.png";
import listAppImage from "./listAppImage.png";
import websiteImage from "./websiteImage.png";

import "./Work.css"

function Work() {
    return (
        <div id="work" className="box">
            <h1>Work</h1>
            <div id="projects">
                <div className="projectDiv">
                    <div id="title">Weather API</div>
                    <img id="projectPic" src={weatherAppImage} alt="weatherAPIImage" />
                    <p id="projectDesc">Look up the weather in any US city with a population over 100,000 using
                        <a href="https://rapidapi.com/wirefreethought/api/geodb-cities/" target="_blank" rel="noreferrer">
                            GeoDB Cities
                        </a>
                        and
                        <a href="https://openweathermap.org/api" target="_blank" rel="noreferrer">
                            OpenWeather
                        </a> APIs.
                    </p>
                    <div id="working">
                        <a id="workingLink" href="./weather" target="_blank" rel="noreferrer">Working Link</a>
                    </div>
                    <div id="githubRepo">
                        <a id="githubRepoLink" href="https://github.com/christianvaldovinos/weather" target="_blank" rel="noreferrer">
                            Github Repo
                        </a>
                    </div>
                </div>
                <div className="projectDiv">
                    <div id="title">List App</div>
                    <img id="projectPic" src={listAppImage} alt="listAppImage" />
                    <p id="projectDesc">
                        List app with authentication that allows you to create notes and share with others.
                        <p>Design emphasized accessibility, can be navigated entirely through keyboard and/or screen reader.</p>
                        <p id="credit">Co-created with Chris Couto</p>
                    </p>
                    <div id="working">
                        <a id="workingLink" href="https://cs124-lab3-fe950--pr18-lab5-dii4vh81.web.app/" target="_blank" rel="noreferrer">
                            Working Link
                        </a>
                    </div>
                    <div id="githubRepo">
                        <a id="githubRepoLink" href="https://github.com/cvaldovinos/cs124-lab2/tree/lab5" target="_blank" rel="noreferrer">
                            Github Repo
                        </a>
                    </div>
                </div>
                <div className="projectDiv">
                    <div id="title">Portfolio Website</div>
                    <img id="projectPic" src={websiteImage} alt="websiteImage" />
                    <p id="projectDesc">
                        Personal website which acts as a live-updated portfolio and hosts my web projects.
                    </p>
                    <div id="siteRepo">
                        <a id="githubRepoLink" href="https://github.com/christianvaldovinos/website" target="_blank" rel="noreferrer">
                            Github Repo
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Work;
