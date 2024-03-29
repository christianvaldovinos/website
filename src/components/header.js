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
                                <span className="buttons" key={section} >
                                    <Link className="headerLink" to={section} spy={true} smooth={true}>
                                        <span id={"linkText"}>{section}</span>
                                    </Link>
                                </span>))
                            }
                        </div>
                    </nav>
                </div>
            </header>
        )
    }
}
