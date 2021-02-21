import React, {useState} from 'react';
import './Contact.scss';


const Contact = (props) => {

    const {} = props;

    return (
        <div id="contact" className="contact-area">
        <div className="contact-inner area-padding">
        <div className="contact-overly"></div>
        <div className="container ">
            <div className="row">
                <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="section-headline text-center">
                <h2>Contact us</h2>
                </div>
            </div>
            </div>
            <div className="row">
                <div className="col-md-4 col-sm-4 col-xs-12">
                    <div className="contact-icon text-center">
                        <div className="single-icon">
                            <i className="fa fa-mobile"></i>
                            <p>
                            Call: +1 5589 55488 55<br />
                            <span>Monday-Friday (9am-5pm)</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-12">
                    <div className="contact-icon text-center">
                    <div className="single-icon">
                        <i className="fa fa-envelope-o"></i>
                        <p>
                        Email: info@example.com<br />
                        <span>Web: www.example.com</span>
                        </p>
                    </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-12">
                    <div className="contact-icon text-center">
                    <div className="single-icon">
                        <i className="fa fa-map-marker"></i>
                        <p>
                        Location: A108 Adam Street<br />
                        <span>NY 535022, USA</span>
                        </p>
                    </div>
                    </div>
                </div>
            </div>
            <div className="row">

                <div className="col-md-6 col-sm-6 col-xs-12">
                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22864.11283411948!2d-73.96468908098944!3d40.630720240038435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sbg!4v1540447494452" width="100%" height="380" frameborder="0" style="border:0" allowfullscreen></iframe> */}
                </div>

                <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="form contact-form">
                <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                    <div className="form-group">
                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                    <div className="validate"></div>
                    </div>
                    <div className="form-group">
                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                    <div className="validate"></div>
                    </div>
                    <div className="form-group">
                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                    <div className="validate"></div>
                    </div>
                    <div className="form-group">
                    <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                    <div className="validate"></div>
                    </div>
                    <div className="mb-3">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">Your message has been sent. Thank you!</div>
                    </div>
                    <div className="text-center"><button type="submit">Send Message</button></div>
                </form>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    );
};

export default Contact;