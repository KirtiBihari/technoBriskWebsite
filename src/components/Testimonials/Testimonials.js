import React, {useState} from 'react';
import './Testimonials.scss';


const Testimonials = (props) => {

    const {} = props;

    return (
        <div className="testimonials-area">
                <div className="testi-inner area-padding">
                    <div className="testi-overly"></div>
                    <div className="container ">
                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-xs-12">
                                <div className="testimonial-content text-center">
                                    <a className="quate" href="#"><i className="fa fa-quote-right"></i></a>
                                    <div className="owl-carousel testimonial-carousel">
                                        <div className="single-testi">
                                            <div className="testi-text">
                                                <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar luctus est eget congue.<br />consectetur adipiscing elit. Sed pulvinar luctus est eget congue.
                                                </p>
                                                <h6>Boby</h6>
                                            </div>
                                        </div>
                                        <div className="single-testi">
                                            <div className="testi-text">
                                                <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar luctus est eget congue.<br/>consectetur adipiscing elit. Sed pulvinar luctus est eget congue.
                                                </p>
                                                <h6>Jhon</h6>
                                            </div>
                                        </div>
                                        <div className="single-testi">
                                            <div className="testi-text">
                                                <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar luctus est eget congue.<br/>consectetur adipiscing elit. Sed pulvinar luctus est eget congue.
                                                </p>
                                                <h6>Fleming</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Testimonials;