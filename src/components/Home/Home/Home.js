import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Header from '../Header/Header';
import './Home.css';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div >
           <Header></Header>
           <About></About>
           <Banner></Banner>
           <Service></Service>
        </div>
    );
};

export default Home;