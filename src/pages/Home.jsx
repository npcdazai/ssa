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
            <HeroSection />
            <AboutUS/>
            <KeyFeatures/>
            <Glimples/>
            <Program/>
            <ConnectivitySection/>
            <ProfessionalsSection/>
            <Facilities/>
            <Banners/>
        </div>
    );
};

export default Home;
