import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";

function Contact() {
    return (
        <div id="contact" className="box">
            <h1>Contact Me</h1>
            {/*<div class="info">*/}
            {/*    Work:{' '}*/}
            {/*    <a class="contactInfo" href="mailto: christianvaldovinos01@gmail.com" target="_blank" rel="noreferrer">*/}
            {/*        christianvaldovinos01@gmail.com*/}
            {/*    </a>*/}
            {/*</div>*/}
            {/*<div class="info">*/}
            {/*    School:{' '}*/}
            {/*    <a class="contactInfo" href="mailto: cvaldovinos@hmc.edu" target="_blank" rel="noreferrer">*/}
            {/*        cvaldovinos@hmc.edu*/}
            {/*    </a>*/}
            {/*</div>*/}
            {/*<div class="info">*/}
            {/*    Phone:{' '}*/}
            {/*    <a class="contactInfo" href="tel:3106950808" >*/}
            {/*        (310)-695-0808*/}
            {/*    </a>*/}
            {/*</div>*/}
            <div id="linkBox">
                <a className="iconLink" href="https://github.com/cvaldovinos" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithubSquare} size="5x"/></a>
                <a className="iconLink" href="https://www.linkedin.com/in/christian-valdovinos/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} size="5x"/></a>
                <a className="iconLink" href="mailto: christianvaldovinos01@gmail.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faEnvelopeSquare} size="5x"/></a>
            </div>
        </div>
    );
}

export default Contact;
