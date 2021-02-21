import React, {useState} from 'react';
import './Header.scss';
import TechnoBriskLogo from '../../assets/images/technobrisk-Logo.jpg';

const Header = (props) => {

    const {} = props;

    return (
        <header id="header" className="fixed-top">
          <div className="container d-flex">
      
            <div className="logo mr-auto">
              {/* <h1 className="text-light"><a href="index.html"><span>Techno</span>Brisk</a></h1> */}
              <a href="index.html"><img src={TechnoBriskLogo} alt="" className="img-fluid" /></a>
            </div>
      
            <nav className="nav-menu d-none d-lg-block">
              <ul>
                <li className="active"><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#process">Process</a></li>
                <li><a href="#team">Team</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                {/* <li><a href="#blog">Blog</a></li> */}
                {/* <li className="drop-down"><a href="">Drop Down</a>
                  <ul>
                    <li><a href="#">Drop Down 1</a></li>
                    <li className="drop-down"><a href="#">Drop Down 2</a>
                      <ul>
                        <li><a href="#">Deep Drop Down 1</a></li>
                        <li><a href="#">Deep Drop Down 2</a></li>
                        <li><a href="#">Deep Drop Down 3</a></li>
                        <li><a href="#">Deep Drop Down 4</a></li>
                        <li><a href="#">Deep Drop Down 5</a></li>
                      </ul>
                    </li>
                    <li><a href="#">Drop Down 3</a></li>
                    <li><a href="#">Drop Down 4</a></li>
                    <li><a href="#">Drop Down 5</a></li>
                  </ul>
                </li> */}
                <li><a href="#contact">Contact</a></li>
      
              </ul>
            </nav>
      
          </div>
        </header>
      
    );
};

export default Header;