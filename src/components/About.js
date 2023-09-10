import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js'; // Import Typed.js
import './About.css'; // Import the CSS file
import profileImage from './My project (4).png'; // Import the image

function About() {
  const typedTextRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        // Add your text as an array of strings to be typed
        "As an information tech student and a tech enthusiast, I love developing tech projects and spending time coding.",
        "Throughout my college journey, I have gained knowledge in C, C++, web development (front-end + back-end), and data structures and algorithms (DSA).",
        "Apart from coding, I also enjoy playing chess, reading books, and participating in photography competitions.",
        "My educational journey includes a B.Tech in IT from SRM University, which provided me with a solid foundation in various technical areas.",
        "During my time at Audex Technology, I actively contributed to the development of software solutions and worked with cutting-edge technologies.",
        "In my free time, I continue to learn and explore new technologies to improve my skills and create innovative solutions."
      ],
      typeSpeed: 40,
      backSpeed: 20, 
      startDelay: 1000,   
      backDelay: 1500,
      loop: true, 
    };

    const typed = new Typed(typedTextRef.current, options);

    return () => {
      typed.destroy(); // Clean up the Typed instance to avoid memory leaks
    };
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <div className="about-box">
          <h2 className="about-title">About Me</h2>
          <div ref={typedTextRef}></div>
        </div>
      </div>
      <div className="profile-image-container">
        <img src={profileImage} alt="Your Name" className="profile-image" />
      </div>
    </section>
  );
}

export default About;
