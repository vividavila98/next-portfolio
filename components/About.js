import React from 'react';
import Image from "next/image";
import styles from "../styles/Home.module.css";
import skills from '../public/images/skills.svg';

export default function About() {
    return (
    <section>
      <h2 className="headTitle">Learn More About Me</h2>
      <div className={styles.aboutBox}>
        <div className={styles.skillsBox}>
            <Image src={skills} alt="my skills" quality={100}/>
        </div>
        <p>
        Hello again! Thanks for taking the take to check out my work. As a junior dev, it’s my hope 
            that I can explain concepts more simply and help out my fellow junior devs out there.  I still 
            have so much left to learn, but this is my way of contributing to a community that has given me so much 
            already! <br/>If you’re intersted in learning more about me and my work, feel free to email me!
        </p>
      </div>
    </section> 
    )
}
