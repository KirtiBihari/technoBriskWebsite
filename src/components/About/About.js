import React, {useState} from 'react';
import './About.scss';
import aboutImg1 from '../../assets/images/about/1.jpg';


const About = (props) => {

    const {} = props;

    return (
            <div id="about" className="about-area area-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="section-headline text-center">
                                <h2>About TechnoBrisk</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-sm-6 col-xs-12">
                            <div className="well-left">
                                <div className="single-well">
                                    <a href="#">
                                        <img src={aboutImg1} alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-12">
                            <div className="well-middle">
                                <div className="single-well">
                                    {/* <a href="#">
                                        <h4 className="sec-head">project Maintenance</h4>
                                    </a> */}
                                    <p>
                                   TechnoBrisk aims on building excellent digital solutions by supplying IT Solutions and Training to empower and establish a Brand New Destination of Digital existence of the potential customers. Our work involves regressive working on dynamic concepts of Marketing, Back and Front End Development and psychology to yield premium outcomes.
                                    </p>
                                    <ul>
                                        <li>
                                        <i className="fa fa-check"></i> Statergy
                                        </li>
                                        <li>
                                        <i className="fa fa-check"></i> Design
                                        </li>
                                        <li>
                                        <i className="fa fa-check"></i> Development
                                        </li>
                                        <li>
                                        <i className="fa fa-check"></i> Help & Supports
                                        </li>
                                        <li>
                                        <i className="fa fa-check"></i> Training
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default About;