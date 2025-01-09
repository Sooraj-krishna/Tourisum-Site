import React, { useState } from "react";
import "./Hero.css";

const Hero = () => {
    // State to track cursor position
    const [position, setPosition] = useState({ x: 50, y: 50 });
  
    // Function to handle mouse movement
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const { innerWidth, innerHeight } = window;
  
      // Calculate percentages for background position
      const xPercent = (clientX / innerWidth) * 100;
      const yPercent = (clientY / innerHeight) * 100;
  
      // Update state
      setPosition({ x: xPercent, y: yPercent });
};
    return (
        <>
            <section id='Hero'>
                <div className="hero">
                    <div className="wrapper">
                            <div className="container" onMouseMove={handleMouseMove}>
                                <h1 className="interactive-text"
                                    style={{
                                    backgroundPosition: `${position.x}% ${position.y}%`,
                                    }}
                                    >
                                        Welcome To The World Of Tourisum
                                </h1>
                            </div>
                        <div className="content">
                            <h3>Tourisum</h3>
                            <p>Tourism is the act of traveling for pleasure or relaxation, and the business of providing services to support that travel. It's a social, cultural, and economic phenomenon that involves people moving to new places for personal or professional reasons</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
