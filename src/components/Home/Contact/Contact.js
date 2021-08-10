import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact mt-5" id="contact">
            <h1 className="text-center text-light p-5">CONTACT US</h1>
            <div class="contact-form">
                <div class="row contact-input d-flex justify-content-center" >
                    <div className="col-md-3">
                        <input type="text" name="name" placeholder="Your Name" />
                    </div>
                    <div className="col-md-3">
                        <input type="text" name="email" placeholder="Your Email" />
                    </div>

                    <div className="col-md-3">
                        <input type="text" name="subject" placeholder="Subject" />
                    </div>
                </div>
                <div class="row contact-textarea d-flex justify-content-center" >
                    <div className="col-md-9 ps-4">
                        <textarea
                            class="textarea"
                            placeholder="Enter Maessage Here..."
                        ></textarea>
                    </div>
                </div>

                <div className="contact-button">
                    <div class="contact-btn">
                        <a href="#null">SEND MESSAGE</a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Contact;