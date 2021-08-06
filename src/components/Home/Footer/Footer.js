import React from 'react';
import icon from '../../../images/icon.png';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
    return (
        <div className="container-fluid homeFooter">
            <div className="row ">
                <div className="col-md-4 ps-5 mt-5 footerLogo">
                    <img style={{ width: "50px" }} src={icon} alt="" /><h4 className="text-light">illusion<br/>photography</h4>
                </div>
                <div style={{ color: "white" }} className="col-md-2 mt-5">
                    <p>About illusion-photography</p>
                    <p>Read Our Blog</p>
                    <p>Sign Up To Access</p>
                    <p>Add Your Review</p>
                </div>
                <div style={{ color: "white" }} className="col-md-2 mt-5">
                    <p>Get Help</p>
                    <p>Read FAQs</p>
                    <p>View All Courses</p>
                    <p>View All Instructor</p>
                </div>
                <div style={{ color: "white" }} className="col-md-3 mt-5">
                    <h5>Contact Us</h5>
                    <hr />
                    <p><FontAwesomeIcon icon={faMapMarkerAlt} /> 286/235 Astoria,USA</p>
                    <p><FontAwesomeIcon icon={faPhone} /> +189-898979<br />+167-765434</p>
                    <p><FontAwesomeIcon icon={faEnvelope} /> info@illusionPhotography.org</p>
                    <h2><FontAwesomeIcon icon={faFacebook} /> <FontAwesomeIcon icon={faTwitter} /> <FontAwesomeIcon icon={faInstagram} /></h2>
                </div>
            </div>

            <div className="row mt-5 ">
                <div className="col-md-5 ml-5 mt-5">
                    <small style={{ color: "gray" }}>copyrights©Rahat 2021,all rights reserved</small>
                </div>
                <div style={{ color: "white" }} className="col-md-2 mt-5">
                    <p>Private Policy</p>
                </div>
                <div style={{ color: "white" }} className="col-md-2 mt-5">
                    <p>Terms Of Use</p>
                </div>
                <div style={{ color: "white" }} className="col-md-2 mt-5">
                    <p>Pricing</p>
                </div>
            </div>



        </div>

    );
};

export default Footer;