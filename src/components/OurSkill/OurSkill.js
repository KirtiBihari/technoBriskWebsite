import React, {useState} from 'react';
import './OurSkill.scss';


const OurSkill = (props) => {

    const {} = props;

    return (
        <div className="our-skill-area fix hidden-sm">
        <div className="test-overly"></div>
        <div className="skill-bg area-padding-2">
        <div className="container">
            <div className="row">
            <div className="col-xs-12 col-sm-3 col-md-3 text-center">
                <div className="single-skill">
                <div className="progress-circular">
                    <input type="text" className="knob" value="0" data-rel="95" data-linecap="round" data-width="175" data-bgcolor="#fff" data-fgcolor="#3EC1D5" data-thickness=".20" data-readonly="true" disabled />
                    <h3 className="progress-h4">Web Design</h3>
                </div>
                </div>
            </div>
            <div className="col-xs-12 col-sm-3 col-md-3 text-center">
                <div className="single-skill">
                <div className="progress-circular">
                    <input type="text" className="knob" value="0" data-rel="85" data-linecap="round" data-width="175" data-bgcolor="#fff" data-fgcolor="#3EC1D5" data-thickness=".20" data-readonly="true" disabled />
                    <h3 className="progress-h4">Graphics Design</h3>
                </div>
                </div>
            </div>
            <div className="col-xs-12 col-sm-3 col-md-3 text-center">
                <div className="single-skill">
                <div className="progress-circular">
                    <input type="text" className="knob" value="0" data-rel="75" data-linecap="round" data-width="175" data-bgcolor="#fff" data-fgcolor="#3EC1D5" data-thickness=".20" data-readonly="true" disabled />
                    <h3 className="progress-h4">Php Developer</h3>
                </div>
                </div>
            </div>
            <div className="col-xs-12 col-sm-3 col-md-3 text-center">
                <div className="single-skill">
                <div className="progress-circular">
                    <input type="text" className="knob" value="0" data-rel="65" data-linecap="round" data-width="175" data-bgcolor="#fff" data-fgcolor="#3EC1D5" data-thickness=".20" data-readonly="true" disabled />
                    <h3 className="progress-h4">Java Script</h3>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    );
};

export default OurSkill;