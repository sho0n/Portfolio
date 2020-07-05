import React, { Component } from "react";
import "./Contact.css";


class Contact extends Component {



    render() {
        return (
            <div className='grid-container_Contact'>
                <div className="Contact">
                    <a className="contactLink" href="mailto:shon.sanches@gmail.com">
                        <i class="fa fa-envelope-open fa-lg"></i>
                                            Shon.sanches@gmail.com
                                        </a>
                </div>
                <div className="Contact">
                    <a className="contactLink" href="https://www.github.com/sho0n">
                        <i class="fa fa-github fa-lg"></i>
                                            Github
                                        </a>
                </div>
                <div className="Contact">

                    <a className="contactLink" href="https://www.linkedin.com/in/sonia-tejero-sanchez/">
                        <i class="fa fa-linkedin fa-lg"></i>
                                            Linkedin
                                        </a>


                </div>
            </div>
        );
    }
}

export default Contact;