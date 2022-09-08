import React, { Component } from 'react'
import {Link} from 'react-scroll'
import logo from "./logo.png";
import  "./header.css"

const sections = ["home", "about", "work", "contact"];

export default class header extends Component {
    render() {
        return (
            <header>
                <div className="container">
                    <nav>
                        <img id="logo" src={logo} alt="Logo"/>
                        <div id="navButtons">
                            {sections.map(section => (
                                <span className="buttons">
                                    <Link className="headerLink" to={section} spy={true} smooth={true}>
                                        {section}
                                    </Link>
                                </span>
                            ))}
                        </div>
                    </nav>
                </div>
            </header>
        )
    }
}
