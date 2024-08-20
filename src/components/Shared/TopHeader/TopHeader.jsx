import React from 'react';
import './index.css';
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaGithubSquare, FaPhoneAlt, FaEnvelope  } from "react-icons/fa";

const TopHeader = () => {
    return (
        <div id="topbar" className="d-flex align-items-center fixed-top">
            <div className="container d-flex justify-content-between">
                <div className="contact-info d-flex align-items-center">
                
                </div>
                <div className="d-none d-lg-flex social-links align-items-center">
                    <a href="www.linkedin.com/in/ujjal-zaman" target='_blank' rel="noreferrer" className="linkedin"><FaLinkedin /></a>
                    <a href="https://web.facebook.com/ujjal.zaman" target='_blank' rel="noreferrer" className="facebook"><FaFacebookSquare /></a>
                    <a href="https://github.com/Ujjalzaman" target='_blank' rel="noreferrer" className=""><FaGithubSquare /></a>
                    <a href="https://www.instagram.com/ujjal_zaman/" target='_blank' rel="noreferrer" className="instagram"><FaInstagramSquare /></a>
                </div>
            </div>
        </div>
    );
};
export default TopHeader;