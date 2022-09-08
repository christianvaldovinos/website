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
                    <p id="projectDesc">Look up the weather in any US city with a population over 100,000 using the{' '}
                        <a id="apiLink" href="https://rapidapi.com/wirefreethought/api/geodb-cities/" target="_blank" rel="noreferrer">
                            GeoDB Cities
                        </a>
                        {' '}and{' '}
                        <a id="apiLink" href="https://openweathermap.org/api" target="_blank" rel="noreferrer">
                            OpenWeather
                        </a>
                        {' '}APIs.
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
                    <div id="title">Note App</div>
                    <img id="projectPic" src={listAppImage} alt="noteAppImage" />
                    <p id="projectDesc">
                        Create notes and share with others, includes Google authentication.
                        <p id="projectDesc">Accessible Design, keyboard and screen reader navigable.</p>
                        <em>Co-created with Chris Couto</em>
                        <p id="testAccount">Email for testing: <strong>test@guest.com</strong></p>
                        <p id="testAccount">Password for testing: <strong>password</strong></p>
                    </p>
                    <div id="working">
                        <a id="workingLink" href="https://cs124-lab3-fe950--pr18-lab5-dii4vh81.web.app" target="_blank" rel="noreferrer">
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
                        <p>Created from scratch using React, Node.js, and CSS.</p>
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
