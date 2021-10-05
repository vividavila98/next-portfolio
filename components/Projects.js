import React from 'react';
import Image from "next/image";
import exLink from '../public/images/ex-link.svg';
import gitLink from '../public/images/gitlink2.svg';
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Projects() {
    return (
    <section className={styles.projSec}>
      <h2 className="headTitle">Featured Projects</h2>
      <div className={styles.projList}>
          <div className={styles.projBox}>
            <p className={styles.projTech}>MongoDB Express React TypeScript Redux</p>
            <h3>Shortly</h3>
            <p className={styles.projInfo}>
              A tool to transform a lengthy URL into a shorter, easy to read link that redirects to the original URL.</p>
              <div className={styles.projLink}>
              <Link href="https://www.lill.link/">
                <a target="_blank" rel="noopener noreferrer">
                  <Image src={exLink} className={styles.arrow} width={25} height={25} alt="arrow" />
                  </a>
              </Link>
              <Link href="https://github.com/vividavila98/shortly">
                <a target="_blank" rel="noopener noreferrer">
                  <Image src={gitLink} className={styles.arrow} width={25} height={25} alt="arrow" />
                  </a>
              </Link>
              </div>
          </div>
          <div className={styles.projOutline}></div>
          <div className={styles.projBox}>
            <p className={styles.projTech}>JavaScript React Yelp API</p>
            <h3>Ravenous</h3>
            <p className={styles.projInfo}>
              An online directory to help you find the best local businesses based on their rating and reviews.</p>
              <div className={styles.projLink}>
                <Link href="https://www.ravenous.me/">
                  <a target="_blank" rel="noopener noreferrer">
                    <Image src={exLink} className={styles.arrow} width={25} height={25} alt="arrow" />
                    </a>
                </Link>
                <Link href="https://github.com/vividavila98/ravenous-react">
                  <a target="_blank" rel="noopener noreferrer">
                    <Image src={gitLink} className={styles.arrow} width={25} height={25} alt="arrow" />
                    </a>
                </Link>
              </div>    
          </div>
          <div className={styles.projOutline2}></div>
        </div>
        <div className={styles.projList}>
          <div className={styles.projBox}>
            <p className={styles.projTech}>TypeScript React Countries API SCSS</p>
            <h3>Where in the World?</h3>
            <p className={styles.projInfo}>
              A resource to learn about more a country, including its population, primary languages, and more.</p>
              <div className={styles.projLink}>
              <Link href="https://www.countries.guide/">
                <a target="_blank" rel="noopener noreferrer">
                  <Image src={exLink} className={styles.arrow} width={25} height={25} alt="arrow" />
                  </a>
              </Link>
              <Link href="https://github.com/vividavila98/countries">
                <a target="_blank" rel="noopener noreferrer">
                  <Image src={gitLink} className={styles.arrow} width={25} height={25} alt="arrow" />
                  </a>
              </Link>
              </div>
          </div>
          <div className={styles.projOutline}></div>
          <div className={styles.projBox}>
            <p className={styles.projTech}>TypeScript React IP Geolocation API</p>
            <h3>IP Tracker</h3>
            <p className={styles.projInfo}>
              A tool to search for any IP address or domain to discover its location, timezone, and more.</p>
              <div className={styles.projLink}>
                <Link href="https://www.ip-tracker.me/">
                  <a target="_blank" rel="noopener noreferrer">
                    <Image src={exLink} className={styles.arrow} width={25} height={25} alt="arrow" />
                    </a>
                </Link>
                <Link href="https://github.com/vividavila98/ip-tracker">
                  <a target="_blank" rel="noopener noreferrer">
                    <Image src={gitLink} className={styles.arrow} width={25} height={25} alt="arrow" />
                    </a>
                </Link>
              </div>    
          </div>
          <div className={styles.projOutline2}></div>
        </div>
      </section>
    )
}
