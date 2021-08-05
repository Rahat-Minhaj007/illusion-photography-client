import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-md-6 banner1 text-light d-flex align-items-end p-5">
                    <h2>COUPLES</h2>

                </div>
                <div className="col-md-6 banner2 text-light d-flex align-items-end p-5">
                    <h2>WEDDINGS</h2>
                </div>

            </div>
        </div>
    );
};

export default Banner;