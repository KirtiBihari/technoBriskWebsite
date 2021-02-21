import React, {useState} from 'react';
import './Review.scss';
import aboutImg2 from '../../assets/images/about/2.jpg';

const Review = (props) => {

    const {} = props;

    return (
        <div className="reviews-area">
        <div className="row no-gutters">
            <div className="col-lg-6 py-0">
                <img src={aboutImg2} alt="" className="img-fluid" />
            </div>
            <div className="col-lg-6 work-right-text d-flex align-items-center">
                <div className="px-5 py-5 py-lg-0">
  <h2>working with us</h2>
  <h5>Web Design, Ready Home, Construction and Co-operate Outstanding Buildings.</h5>
  <a href="#contact" className="ready-btn scrollto">Contact us</a>
</div>
            </div>
        </div>
    </div>
    );
};

export default Review;