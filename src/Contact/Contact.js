import React from "react";
import "./Contact.css";
import git from "./github.png";
import linkedin from "./linkedin.png";
import mail from "./mail.png";
import phone from "./telephone.png";

function Contact() {
    return (
        <>
            <div className="grid-container_Contact">
                <div className="contact">
                    <img src={mail} alt="" className="cont"></img>
                    <br></br>
                    shon.sanches@gmail.com
                </div>
                <div className="contact">
                    <img src={phone} alt="" className="cont"></img>
                    <br></br>
                    07498285549
                </div>
                <div className="contact">
                    <img src={git} alt="" className="cont"></img>
                    <br></br>
                    <a className="link" href="https://github.com/sho0n/">Github</a>
                </div>
                <div className="contact">
                    <img src={linkedin} alt="" className="cont"></img>
                    <br></br>
                    <a className="link" href="https://www.linkedin.com/in/sonia-tejero-sanchez/">
                        LinkedIn
                    </a>
                </div>
            </div>
        </>
    );
}

export default Contact;
