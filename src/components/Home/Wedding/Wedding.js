import React, { useEffect, useState } from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import wedding1 from '../../../images/bnr2.png';
import './Wedding.css';
import weddingImg from "../../../fakeWeddingImg/fakeWeddingImg.json";
import WeddingImage from '../WeddingImage/WeddingImage';

const Wedding = () => {



    return (
        <div>
            <Navigation></Navigation>
            <div className="wedding-photo ">
                <div className="row container-fluid">
                    <div className="col-md-12 wedding-image">
                        <img src={wedding1} alt="" />
                    </div>

                </div>
                <div className="d-flex justify-content-center container-fluid wedding-gallery ">
                    <div className="row pt-3 pb-3">
                        {
                            weddingImg.map((ig) => <WeddingImage image1={ig} key={ig.id}></WeddingImage>)
                        }
                    </div>

                </div>


            </div>
        </div>
    );
};

export default Wedding;