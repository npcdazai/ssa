import React from 'react';
import AboutUS from '../Components/AboutUS';
import HeroSection from '../Components/HeroSection';
import KeyFeatures from '../Components/KeyFeatures';
import Glimples from '../Components/Glimples';
import Program from '../Components/Programs';
import ConnectivitySection from '../Components/ConnectivitySection';
import ProfessionalsSection from '../Components/ProfessionalsSection';
import Facilities from '../Components/Facilities';
import Banners from '../Components/Banners';


const Home = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", width: "100%", gap: "3rem" }}>
            <div id="hero-section"><HeroSection /></div>
            <div id="about-section"><AboutUS/></div>
            <div id="features-section"><KeyFeatures/></div>
            <div id="glimples-section"><Glimples/></div>
            <div id="programs-section"><Program/></div>
            <div id="connectivity-section"><ConnectivitySection/></div>
            <div id="professionals-section"><ProfessionalsSection/></div>
            <div id="facilities-section"><Facilities/></div>
            <div id="banners-section"><Banners/></div>
        </div>
    );
};

export default Home;
