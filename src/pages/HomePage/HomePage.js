import React, {useState} from 'react';
import Home from '../../components/Home/Home';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './HomePage.scss';
import MainContent from '../../components/MainContent/MainContent';

const HomePage = (props) => {
    
    const {} = props;

    return (
        <div className="card h-100" data-spy="scroll" data-target="#navbar-example">
            <Header />
            <Home />
            <MainContent />
            <Footer />
        </div>
    );
};

export default HomePage;