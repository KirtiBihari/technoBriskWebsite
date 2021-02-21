import React, {useState} from 'react';
import './Home.scss';
import sliderImg1 from '../../assets/images/slider/slider1.jpg';
import sliderImg2 from '../../assets/images/slider/slider2.jpg';
import sliderImg3 from '../../assets/images/slider/slider3.jpg';

const Home = (props) => {

    const {} = props;

    return (
      <div id="home" className="slider-area">
        <div className="bend niceties preview-2">
          <div id="ensign-nivoslider" className="slides">
            <img src={sliderImg1} alt="" title="#slider-direction-1" />
            <img src={sliderImg2} alt="" title="#slider-direction-2" />
            <img src={sliderImg3} alt="" title="#slider-direction-3" />
          </div>

          <div id="slider-direction-1" className="slider-direction slider-one">
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-sm-12 col-xs-12">
                  <div className="slider-content">
                    <div className="layer-1-1 hidden-xs wow animate__slideInDown animate__animated" data-wow-duration="2s" data-wow-delay=".2s">
                      <h2 className="title1">The Best Business Information </h2>
                    </div>
                    <div className="layer-1-2 wow animate__fadeIn animate__animated" data-wow-duration="2s" data-wow-delay=".2s">
                      <h1 className="title2">We're In The Business Of Helping You Start Your Business</h1>
                    </div>
                    <div className="layer-1-3 hidden-xs wow animate__slideInUp animate__animated" data-wow-duration="2s" data-wow-delay=".2s">
                      <a className="ready-btn right-btn page-scroll" href="#services">See Services</a>
                      <a className="ready-btn page-scroll" href="#about">Learn More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="slider-direction-2" className="slider-direction slider-two">
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-sm-12 col-xs-12">
                  <div className="slider-content text-center">
                    <div className="layer-1-1 hidden-xs wow animate__slideInUp animate__animated" data-wow-duration="2s" data-wow-delay=".2s">
                      <h2 className="title1">The Best Business Information </h2>
                    </div>
                    <div className="layer-1-2 wow animate__fadeIn animate__animated" data-wow-duration="2s" data-wow-delay=".1s">
                      <h1 className="title2">We're In The Business Of Get Quality Business Service</h1>
                    </div>
                    <div className="layer-1-3 hidden-xs wow animate__slideInUp animate__animated" data-wow-duration="2s" data-wow-delay=".2s">
                      <a className="ready-btn right-btn page-scroll" href="#services">See Services</a>
                      <a className="ready-btn page-scroll" href="#about">Learn More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="slider-direction-3" className="slider-direction slider-two">
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-sm-12 col-xs-12">
                  <div className="slider-content">
                    <div className="layer-1-1 hidden-xs wow animate__slideInUp animate__animated" data-wow-duration="2s" data-wow-delay=".2s">
                      <h2 className="title1">The Best business Information </h2>
                    </div>
                    <div className="layer-1-2 wow animate__fadeIn animate__animated" data-wow-duration="2s" data-wow-delay=".1s">
                      <h1 className="title2">Helping Business Security & Peace of Mind for Your Family</h1>
                    </div>
                    <div className="layer-1-3 hidden-xs wow animate__slideInUp animate__animated" data-wow-duration="2s" data-wow-delay=".2s">
                      <a className="ready-btn right-btn page-scroll" href="#services">See Services</a>
                      <a className="ready-btn page-scroll" href="#about">Learn More</a>
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

export default Home;