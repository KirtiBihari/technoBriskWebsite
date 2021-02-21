import React, {useState} from 'react';
import './Footer.scss';
import portfolioImg1 from '../../assets/images/portfolio/1.jpg';
import portfolioImg2 from '../../assets/images/portfolio/2.jpg';
import portfolioImg3 from '../../assets/images/portfolio/3.jpg';
import portfolioImg4 from '../../assets/images/portfolio/4.jpg';
import portfolioImg5 from '../../assets/images/portfolio/5.jpg';
import portfolioImg6 from '../../assets/images/portfolio/6.jpg';
import TechnoBriskLogo from '../../assets/images/technobrisk-Logo.jpg';

const Footer = (props) => {

    const {} = props;

    return (
        <footer>
    <div className="footer-area">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-4 col-xs-12">
            <div className="footer-content">
              <div className="footer-head">
                <div className="footer-logo">
                  {/* <h2><span>e</span>Business</h2> */}
                  <a href="index.html"><img src={TechnoBriskLogo} alt="" className="img-fluid" /></a>
                </div>

                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p>
                <div className="footer-icons">
                  <ul>
                    <li>
                      <a href="#"><i className="fa fa-facebook"></i></a>
                    </li>
                    <li>
                      <a href="#"><i className="fa fa-twitter"></i></a>
                    </li>
                    <li>
                      <a href="#"><i className="fa fa-google"></i></a>
                    </li>
                    <li>
                      <a href="#"><i className="fa fa-pinterest"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-4 col-xs-12">
            <div className="footer-content">
              <div className="footer-head">
                <h4>information</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                </p>
                <div className="footer-contacts">
                  <p><span>Tel:</span> +123 456 789</p>
                  <p><span>Email:</span> contact@example.com</p>
                  <p><span>Working Hours:</span> 9am-5pm</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-4 col-xs-12">
            <div className="footer-content">
              <div className="footer-head">
                <h4>Instagram</h4>
                <div className="flicker-img">
                  <a href="#"><img src={portfolioImg1} alt="" /></a>
                  <a href="#"><img src={portfolioImg2} alt="" /></a>
                  <a href="#"><img src={portfolioImg3} alt="" /></a>
                  <a href="#"><img src={portfolioImg4} alt="" /></a>
                  <a href="#"><img src={portfolioImg5} alt="" /></a>
                  <a href="#"><img src={portfolioImg6} alt="" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-area-bottom">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <div className="copyright text-center">
              <p>
                &copy; Copyright <strong>TechnoBrisk</strong>. All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
      
    );
};

export default Footer;