import React from 'react';
import Image from "next/image";
import exLink from '../public/images/ex-link.svg';
import gitLink from '../public/images/gitlink2.svg';
import Link from "next/link";

export default function Projects() {
    return (
    <section id="projects" className="projSec animate__animated animate__fadeIn animate__delay-2s">
      <h2 className="headTitle">Featured Projects</h2>
      <div className="projList">
          <div className="projBox">
            <a className="overlay" target="_blank" rel="noopener noreferrer" href="https://www.lill.link/"></a>
            <div className="inner">
              <p className="projTech">MongoDB Express React TypeScript Redux</p>
              <a className="projLink" href="https://www.lill.link/" target="_blank" rel="noopener noreferrer"><h3>Shortly</h3></a>
              <p className="projInfo">
                A tool to transform a long URL into a shorter, easy to read link that redirects to the original URL.
              </p>
              <div className="projLink">
                <Link href="https://www.lill.link/">
                  <a target="_blank" rel="noopener noreferrer">
                    <Image src={exLink} className="arrow" width={25} height={25} alt="arrow" />
                  </a>
                </Link>
                <Link href="https://github.com/vividavila98/shortly">
                  <a target="_blank" rel="noopener noreferrer">
                    <Image src={gitLink} className="arrow" width={25} height={25} alt="arrow" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="projOutline"></div>
          
          <div className="projBox">
            <a className="overlay" target="_blank" rel="noopener noreferrer" href="https://www.ravenous.me/"></a>
            <div className="inner">
              <p className="projTech">JavaScript React Yelp API</p>
              <a className="projLink" href="https://www.ravenous.me/" target="_blank" rel="noopener noreferrer"><h3>Ravenous</h3></a>
              <p className="projInfo">
              An online directory to help you find the best local businesses based on their rating and reviews.
              </p>
              <div className="projLink">
                <Link href="https://www.ravenous.me/">
                  <a target="_blank" rel="noopener noreferrer">
                    <Image src={exLink} className="arrow" width={25} height={25} alt="arrow" />
                  </a>
                </Link>
                <Link href="https://github.com/vividavila98/ravenous-react">
                  <a target="_blank" rel="noopener noreferrer">
                    <Image src={gitLink} className="arrow" width={25} height={25} alt="arrow" />
                  </a>
                </Link>
              </div> 
            </div>   
          </div>
          <div className="projOutline2"></div>
        </div>

        <div className="projList">
          <div className="projBox">
            <a className="overlay" target="_blank" rel="noopener noreferrer" href="https://www.countries.guide/"></a>
            <div className="inner">
              <p className="projTech">TypeScript React Countries API SCSS</p>
              <a className="projLink" href="https://www.countries.guide/" target="_blank" rel="noopener noreferrer"><h3>Where in the World?</h3></a>
              <p className="projInfo">
              A resource to learn about more a country, including its population, primary languages, and more.
              </p>
              <div className="projLink">
              <Link href="https://www.countries.guide/">
                <a target="_blank" rel="noopener noreferrer">
                  <Image src={exLink} className="arrow" width={25} height={25} alt="arrow" />
                </a>
              </Link>
              <Link href="https://github.com/vividavila98/countries">
                <a target="_blank" rel="noopener noreferrer">
                  <Image src={gitLink} className="arrow" width={25} height={25} alt="arrow" />
                </a>
              </Link>
              </div>
            </div>
          </div>
          <div className="projOutline"></div>

          <div className="projBox">
            <a className="overlay" target="_blank" rel="noopener noreferrer" href="https://www.ip-tracker.me/"></a>
            <div className="inner">
              <p className="projTech">TypeScript React IP Geolocation API</p>
              <a className="projLink" href="https://www.ip-tracker.me/" target="_blank" rel="noopener noreferrer"><h3>IP Tracker</h3></a>
              <p className="projInfo">
              A tool to search for any IP address or domain to discover its location, timezone, and more.
              </p>
              <div className="projLink">
                <Link href="https://www.ip-tracker.me/">
                  <a target="_blank" rel="noopener noreferrer">
                    <Image src={exLink} className="arrow" width={25} height={25} alt="arrow" />
                  </a>
                </Link>
                <Link href="https://github.com/vividavila98/ip-tracker">
                  <a target="_blank" rel="noopener noreferrer">
                    <Image src={gitLink} className="arrow" width={25} height={25} alt="arrow" />
                  </a>
                </Link>
              </div>    
            </div>
          </div>
          <div className="projOutline2"></div>
        </div>
      </section>
    )
}
