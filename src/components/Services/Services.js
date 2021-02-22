import React, {useState} from 'react';
import './Services.scss';


const Services = (props) => {

    const {} = props;

    return (
        <div id="services" className="services-area area-padding">
        <div className="container">
            <div className="row">
                <div className="col-md-12 col-sm-12 col-xs-12">
                    <div className="section-headline services-head text-center">
                        <h2>Our Services</h2>
                    </div>
                </div>
            </div>
            <div className="row text-center">
                <div className="col-md-4 col-sm-4 col-xs-12">
                    <div className="about-move">
                        <div className="services-details">
                            <div className="single-services">
                                <a className="services-icon" href="#">
                                    <i className="fa fa-code"></i>
                                </a>
                                <h4>Web Development</h4>
                                <p>
                                We use powerful tools to provide your business goals the extra edge it truly deserves, and getting your establishment right at the tip of your fingers!.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-12">
                    <div className="about-move">
                        <div className="services-details">
                            <div className="single-services">
                                <a className="services-icon" href="#">
                                    <i className="fa fa-camera-retro"></i>
                                </a>
                                <h4>UI/UX Design</h4>
                                <p>
                                ​A simple and sophisticated UI design requires an eye for detail.​An accessible aesthetic design backed by a technical architecture will translate into a user-friendly and engaging interface that will augment the usability of the product.​
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-12">
                    <div className=" about-move">
                        <div className="services-details">
                            <div className="single-services">
                                <a className="services-icon" href="#">
                                    <i className="fa fa-mobile"></i>
                                </a>
                                <h4>Mobile App Development</h4>
                                <p>
                                A fully functional app that your customers can't stop raving about. We build the following app React Native apps build cross-platform apps and save 30-50% on development costs.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-12">
                    <div className=" about-move">
                        <div className="services-details">
                            <div className="single-services">
                                <a className="services-icon" href="#">
                                    <i className="fa fa-check-square"></i>
                                </a>
                                <h4>Quality Assurance </h4>
                                <p>
                                Our QA is implemented from the word go Our QA team is geared to:​Monitor the development process and ensure the product meets all the initial requirements.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-12">
                    <div className=" about-move">
                        <div className="services-details">
                            <div className="single-services">
                                <a className="services-icon" href="#">
                                    <i className="fa fa-bar-chart"></i>
                                </a>
                                <h4>Dashboards</h4>
                                <p>
                                Dashboards are easy to create, customize and share. You can also send a snapshot of your Dashboard data via email or generate a PDF file that you can distribute however you please.​​
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-12">
                    <div className=" about-move">
                        <div className="services-details">
                            <div className="single-services">
                                <a className="services-icon" href="#">
                                    <i className="fa fa-pencil-square-o"></i>
                                </a>
                                <h4>Training</h4>
                                <p>
                                We offer online classes using technology expertise with the best online training delivery methodology.Our trainers are committed to providing training based on latest skills and share real-time work scenario.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Services;