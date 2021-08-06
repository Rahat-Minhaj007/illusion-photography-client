import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Header from '../Header/Header';
import './Home.css';
import Service from '../Service/Service';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div >
           <Header></Header>
           <About></About>
           <Banner></Banner>
           <Service></Service>
           <Contact></Contact>
           <Footer></Footer>
        </div>
    );
};

export default Home;