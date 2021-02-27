import React, {useState} from 'react';
import './OurProcess.scss';
import processImg1 from '../../assets/images/process/process-01.svg';
import processImg2 from '../../assets/images/process/process-02.svg';
import processImg3 from '../../assets/images/process/process-03.svg';
import processImg4 from '../../assets/images/process/process-04.svg';


const OurProcess = (props) => {

    const {} = props;

    const processList = [
        {
            name: 'Plan',
            desc: `We set priorities, organize content, and understand the buyer’s journey that your audience takes as they navigate your website. At the end of strategy, you will have a Blueprint for your website project, a comprehensive strategic plan for your website design, content, and functionality.`,
            imgUrl: processImg1,
            contentAlign: 'left',
            processNo: '01'
        },
        {
            name: 'Design',
            desc: `Once the Blueprint is approved, we create wireframes and a design comp for your review. This process involves various reviews, approvals, and close communication between you and our creative team. We begin with the Homepage to set
            style, image and branding standards, then move toward interior layouts.`,
            imgUrl:processImg2,
            contentAlign: 'right',
            processNo: '02'
        },
        {
            name: 'Develop',
            desc: `With the blueprint & design comps as our guide, the development team begins to create your website with the state of the earth tools. Our entire team works to add content, final design elements, review, & test your website
            for quality.`,
            imgUrl:processImg3,
            contentAlign: 'left',
            processNo: '03'
        },
        {
            name: 'Deploy',
            desc: `After testing and review, we present your new website. Upon your approval, your website will be launched, promoted and optimized for search engines such as Google & Bing.`,
            imgUrl:processImg4,
            contentAlign: 'right',
            processNo: '04'
        }
    ]

    return (
        <div id="process" className="ourprocess-area area-padding">
            <div className='container'>
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="section-headline services-head text-center">
                            <h2>Our Process</h2>
                        </div>
                    </div>
                </div>
                <div className="row text-center">
                    { processList && processList.length > 0
                        ? processList.map(item => (
                            <div className={`process-block container d-flex w-100 ${item.contentAlign === 'left' ? 'flex-row ' : 'flex-row-reverse'}`}>
                                <div className={`desc-content ${item.contentAlign === 'left' ? 'border-lg-left border-lg-bottom border-300' : ''}`}>
                                    <span class="process-item-number">{item.processNo}</span>
                                    <h3>{item.name}</h3>
                                    <p>
                                        {item.desc}
                                    </p>
                                </div>
                                <div className={`img-content ${item.contentAlign !== 'left' ? 'border-lg-right border-lg-bottom border-300' : ''}`}>
                                    <img src={item.imgUrl} alt="" />
                                </div>
                            </div>)) 
                        : null
                    }
                </div>
            </div>
        </div>
    );
};

export default OurProcess;