import React from 'react';
import '../styles/HeroSection.css'; 

const HeroSection = () => {
    return (
        <div className="hero-section d-flex justify-content-center align-items-center text-center text-white">
            <div className="overlay" />
            <div className="hero-content">
                <p className="section-label mid">SSA HUNTER VALLEY</p>

                <h1 className="hero-title Matter">
                    GROW YOUR GAME WITH THE <br />
                    <span className="hero-bold boldMatter">PROFESSIONALS</span>
                </h1>

                <div className="hero-sub">
                    <p className="slogan boldMatter">
                        ADOPT <span className="dot">•</span> NURTURE <span className="dot">•</span> DELIVER
                    </p>
                    <button className="btn btn-outline-light rounded-pill px-4 py-2 Matter ">
                        Register Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
