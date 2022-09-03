import React, { Component } from 'react'
import "./middleSection.css"
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Work from "./Work";

export default class middleSection extends Component {
    render() {
        return (
            <div id="wicked">
                <Home/>
                <About/>
                <Work/>
                <Contact/>
            </div>
        )
    }
}
