import React, {useState} from 'react';
import './MainContent.scss';
import About from '../About/About';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Services from '../Services/Services';
import OurSkill from '../OurSkill/OurSkill';
import Team from '../Team/Team';
import Portfolio from '../Portfolio/Portfolio';
import OurProcess from '../OurProcess/OurProcess';
import Review from '../Review/Review';
import Price from '../Price/Price';
import Testimonials from '../Testimonials/Testimonials';

const MainContent = (props) => {

    return (
        <div id="main">
          <About />
          <Services />
          <OurProcess />
          <OurSkill />
          <Team />
          <Review />
          <Portfolio />
          <Price />
          <Testimonials />
          {/* <Blog /> */}
          <Contact />
        </div>
    );
};

export default MainContent;