import React, { Component } from 'react'
import {Link} from 'react-scroll'
import logo from "./logo.png";
import  "./header.css"

export default class header extends Component {
    render() {
        return (
            <header>
                <div className="container">
                    <nav>
                        <img id="logo" src={logo} alt="Logo"/>
                        <div id="navButtons">
                            <span id={"button1"} className={"buttons"}><Link activeClass="active" to="home" spy={true} smooth={true}>Home</Link></span>
                            <span id={"button2"} className={"buttons"}><Link  to="about" spy={true} smooth={true}>About</Link></span>
                            <span id={"button3"} className={"buttons"}><Link  to="work" spy={true} smooth={true}>Work</Link></span>
                            <span id={"button4"} className={"buttons"}><Link  to="contact" spy={true} smooth={true}>Contact</Link></span>
                        </div>
                    </nav>
                </div>
            </header>
        )
    }
}
