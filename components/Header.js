import React from 'react';
import Head from "next/head";
import styles from "../styles/Header.module.css";
import Image from "next/image";
import realPic from '../public/images/grad-pic.jpg';

export default function Header() {
    return (
        <>
        <Head>
          <title>Viviana Davila | Los Angeles, CA </title>
          <meta name="description" content="Web Dev Blog" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <header className={styles.header}>
          <div className={styles.introBox}>
            <h1 className={styles.title}>Viviana Davila</h1>
            <div className={styles.codeText}>Front-End Developer</div>
            <p className={styles.intro}>Hello! I’m a Front-End Developer based in Los Angeles, CA 
            with an emphasis on utilizing <span className="code">ReactJS</span> to build both simple mobile-responsive websites & 
            dynamic web applications.</p>
            </div>
            <div className={styles.picBox}>
            <Image src={realPic} className={styles.topPic} width={500} height={500} alt="Picture of me" />
            <div className={styles.picOutline}></div>
          </div>
        </header>
        </>
    )
}
