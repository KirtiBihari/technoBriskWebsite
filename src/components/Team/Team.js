import React, {useState} from 'react';
import './Team.scss';
import teamImg1 from '../../assets/images/team/1.jpg';
import teamImg2 from '../../assets/images/team/2.jpg';
import teamImg3 from '../../assets/images/team/3.jpg';
import teamImg4 from '../../assets/images/team/4.jpg';

const Team = (props) => {

    const {} = props;

    return (
        <div id="team" className="our-team-area area-padding">
        <div className="container">
            <div className="row">
                <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="section-headline text-center">
                    <h2>Our special Team</h2>
                </div>
                </div>
            </div>
            <div className="row">
            <div className="col-md-3 col-sm-3 col-xs-12">
            <div className="single-team-member">
                <div className="team-img">
                <a href="#">
                    <img src={teamImg1} alt="" />
                </a>
                <div className="team-social-icon text-center">
                    <ul>
                    <li>
                        <a href="#">
                        <i className="fa fa-facebook"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        <i className="fa fa-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        <i className="fa fa-instagram"></i>
                        </a>
                    </li>
                    </ul>
                </div>
                </div>
                <div className="team-content text-center">
                <h4>Jhon Mickel</h4>
                <p>Seo</p>
                </div>
            </div>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-12">
            <div className="single-team-member">
                <div className="team-img">
                <a href="#">
                    <img src={teamImg2} alt="" />
                </a>
                <div className="team-social-icon text-center">
                    <ul>
                    <li>
                        <a href="#">
                        <i className="fa fa-facebook"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        <i className="fa fa-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        <i className="fa fa-instagram"></i>
                        </a>
                    </li>
                    </ul>
                </div>
                </div>
                <div className="team-content text-center">
                <h4>Andrew Arnold</h4>
                <p>Web Developer</p>
                </div>
            </div>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-12">
            <div className="single-team-member">
                <div className="team-img">
                <a href="#">
                    <img src={teamImg3} alt="" />
                </a>
                <div className="team-social-icon text-center">
                    <ul>
                    <li>
                        <a href="#">
                        <i className="fa fa-facebook"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        <i className="fa fa-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        <i className="fa fa-instagram"></i>
                        </a>
                    </li>
                    </ul>
                </div>
                </div>
                <div className="team-content text-center">
                <h4>Lellien Linda</h4>
                <p>Web Design</p>
                </div>
            </div>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-12">
            <div className="single-team-member">
                <div className="team-img">
                <a href="#">
                    <img src={teamImg4} alt="" />
                </a>
                <div className="team-social-icon text-center">
                    <ul>
                    <li>
                        <a href="#">
                        <i className="fa fa-facebook"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        <i className="fa fa-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        <i className="fa fa-instagram"></i>
                        </a>
                    </li>
                    </ul>
                </div>
                </div>
                <div className="team-content text-center">
                <h4>Jhon Powel</h4>
                <p>Seo Expert</p>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    );
};

export default Team;