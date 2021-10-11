import React from 'react';
import Head from "next/head"; 
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
        <header className="header">
          <div className="introBox animate__animated animate__fadeIn animate__delay-1s">
            <h1 className="title">Viviana Davila</h1>
            <div className="codeText">Front-End Developer</div>
            <p className="intro">Hello! I’m a Front-End Developer based in Los Angeles, CA 
            with an emphasis on utilizing <span className="code">ReactJS</span> to build both simple mobile-responsive websites & 
            dynamic web applications.</p>
          </div>
          
          <div className="picBox animate__animated animate__fadeIn animate__delay-1s">
            <Image src={realPic} className="topPic" width={500} height={500} alt="Picture of me" />
            <div className="picOutline"></div>
          </div>
        </header>
        </>
    )
}
