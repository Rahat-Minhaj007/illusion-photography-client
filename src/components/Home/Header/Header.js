import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import './Header.css';

const Header = () => {
    return (
        <div className="slider" id="home">
            <Navbar></Navbar>
            <div className="header-text">
                <h1>WELCOME to ILLUSION</h1>
                <p>The camera sees more than the eye, so why not make use of it?</p>

            </div>

        </div>
    );
};

export default Header;