import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    var style={
        color: 'white',
        textDecoration:"none",

    }
    return (
        <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-md-6 banner1 text-light d-flex align-items-end p-5">
                <Link to="/couple" style={style}><h2>COUPLES</h2></Link>

                </div>
                <div className="col-md-6 banner2 text-light d-flex align-items-end p-5">
                    <Link to="/wedding" style={style}><h2>WEDDINGS</h2></Link>
                </div>

            </div>
        </div>
    );
};

export default Banner;