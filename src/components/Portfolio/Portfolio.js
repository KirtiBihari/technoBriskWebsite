import React, {useState} from 'react';
import './Portfolio.scss';
import portfolioImg1 from '../../assets/images/portfolio/1.jpg';
import portfolioImg2 from '../../assets/images/portfolio/2.jpg';
import portfolioImg3 from '../../assets/images/portfolio/3.jpg';
import portfolioImg4 from '../../assets/images/portfolio/4.jpg';
import portfolioImg5 from '../../assets/images/portfolio/5.jpg';
import portfolioImg6 from '../../assets/images/portfolio/6.jpg';

const Portfolio = (props) => {

    const {} = props;

    return (
        <div id="portfolio" className="portfolio-area area-padding fix">
        <div className="container">
        <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="section-headline text-center">
                <h2>Our Portfolio</h2>
            </div>
            </div>
        </div>
        <div className="row wesome-project-1 fix">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="awesome-menu ">
                <ul className="project-menu">
                <li>
                    <a href="#" className="active" data-filter="*">All</a>
                </li>
                <li>
                    <a href="#" data-filter=".development">Development</a>
                </li>
                <li>
                    <a href="#" data-filter=".design">Design</a>
                </li>
                <li>
                    <a href="#" data-filter=".photo">Photoshop</a>
                </li>
                </ul>
            </div>
            </div>
        </div>

        <div className="row awesome-project-content">
            <div className="col-md-4 col-sm-4 col-xs-12 design development">
            <div className="single-awesome-project">
                <div className="awesome-img">
                <a href="#"><img src={portfolioImg1} alt="" /></a>
                <div className="add-actions text-center">
                    <div className="project-dec">
                    <a className="venobox" data-gall="myGallery" href={portfolioImg1}>
                        <h4>Business City</h4>
                        <span>Web Development</span>
                    </a>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-12 photo">
            <div className="single-awesome-project">
                <div className="awesome-img">
                <a href="#"><img src={portfolioImg2} alt="" /></a>
                <div className="add-actions text-center">
                    <div className="project-dec">
                    <a className="venobox" data-gall="myGallery" href={portfolioImg2}>
                        <h4>Blue Sea</h4>
                        <span>Photosho</span>
                    </a>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-12 design">
            <div className="single-awesome-project">
                <div className="awesome-img">
                <a href="#"><img src={portfolioImg3} alt="" /></a>
                <div className="add-actions text-center">
                    <div className="project-dec">
                    <a className="venobox" data-gall="myGallery" href={portfolioImg3}>
                        <h4>Beautiful Nature</h4>
                        <span>Web Design</span>
                    </a>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-12 photo development">
            <div className="single-awesome-project">
                <div className="awesome-img">
                <a href="#"><img src={portfolioImg4} alt="" /></a>
                <div className="add-actions text-center">
                    <div className="project-dec">
                    <a className="venobox" data-gall="myGallery" href={portfolioImg4}>
                        <h4>Creative Team</h4>
                        <span>Web design</span>
                    </a>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-12 development">
            <div className="single-awesome-project">
                <div className="awesome-img">
                <a href="#"><img src={portfolioImg5} alt="" /></a>
                <div className="add-actions text-center text-center">
                    <div className="project-dec">
                    <a className="venobox" data-gall="myGallery" href={portfolioImg5}>
                        <h4>Beautiful Flower</h4>
                        <span>Web Development</span>
                    </a>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-12 design photo">
            <div className="single-awesome-project">
                <div className="awesome-img">
                <a href="#"><img src={portfolioImg6} alt="" /></a>
                <div className="add-actions text-center">
                    <div className="project-dec">
                    <a className="venobox" data-gall="myGallery" href={portfolioImg6}>
                        <h4>Night Hill</h4>
                        <span>Photoshop</span>
                    </a>
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

export default Portfolio;