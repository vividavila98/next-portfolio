import React from 'react';
import Image from "next/image";
import skills from '../public/images/newskills2.svg';

export default function About() {
    return (
    <section id="about" className="animate__animated animate__fadeIn animate__delay-2s">
      <h2 className="headTitle">Learn More About Me</h2>
      <div className="aboutBox">
        <div className="skillsBox">
            <Image src={skills} alt="my skills" quality={100}/>
        </div>
        <p>
        Hello again! My name is Viviana, and I'm currently looking for my next role as a 
        Front-End Developer. With my education in UX/UI design, I started to teach myself how to code in 2018. 
        Since then, I've had the opportunity of working at a <a className="company" href="https://www.juristerra.net/" target="_blank" rel="noopener noreferrer">legal services startup</a>, a <a className="company" href="https://wistly.io/" target="_blank" rel="noopener noreferrer">delivery service app startup</a>, 
        and a <a className="company" href="https://growthmed.com/" target="_blank" rel="noopener noreferrer">digital marketing agency</a>. In each role, I valued setting goals for myself, being feedback-oriented, and having a growth mindset. 
        <br/>
        {/* If you’re interested in learning more about my experience, feel free to email me! */}
        </p>
      </div>
    </section> 
    )
}
