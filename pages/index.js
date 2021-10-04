import { useState } from 'react';
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import realPic from '../public/images/grad-pic.jpg';
import arrow from '../public/images/sub-arrow.svg';
import exLink from '../public/images/ex-link.svg';
import gitLink from '../public/images/gitlink2.svg';
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Post from "../components/Post";
import { sortByDate } from "../utils";
import axios from "axios";

export default function Home({ posts }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const handleChange = e => {
    setEmail(e.target.value);
  }

  const subscribe = async (e) => {
    e.preventDefault();

    setStatus("Loading ...");
    setErrorMessage(null);

    try {
      const response = await axios.post("/api/subscribe", {email});
      console.log(response);
      setStatus("Successfuly subscribed!");
      setEmail("");
    } catch (e) {
      setErrorMessage(e.response.data.error);
      setStatus("Something went wrong :(");
    }
  };

  return (
    <div className="container">
      <Head>
        <title>Viviana Davila | Blog </title>
        <meta name="description" content="Web Dev Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <div className={styles.introBox}>
        <h1 className={styles.title}>Viviana Davila</h1>
        <div className={styles.codeText}>Front-End Engineer</div>
        <p className={styles.intro}>Hello! I’m a Front-End Engineer based in Los Angeles, CA 
        with an emphasis on utilizing ReactJS to build both simple mobile-responsive websites & 
        dynamic web applications.</p>
        </div>
        <div className={styles.picBox}>
        <Image src={realPic} className={styles.topPic} width={500} height={500} alt="Picture of me" />
        <div className={styles.picOutline}></div>
        </div>
      </header>
      <section>
        <h2 className={styles.headTitle}>Recent Posts</h2>
        <div className={styles.subText}>
          Sign up to be notified <br/> everytime I add a new post!
          <form className={styles.form}>
          <input 
            name="email" 
            type="email" 
            placeholder="email" 
            className={styles.input}
            value={email}
            onChange={handleChange}
            />
          <button className={styles.btn} onClick={subscribe}>
          <Image src={arrow} className={styles.arrow} width={15} height={15} alt="arrow" />
          </button>
        </form>
        </div>
        <div className="posts">
          {
            posts.slice(0, 2).map((post, index) => (
              <Post post={post} key={index}/>
              
            ))
          }
        </div>
        <Link href="/posts"><a className={styles.postBtn}>View all posts ...</a></Link>
      </section>

      <section className={styles.projSec}>
      <h2 className={styles.headTitle}>Featured Projects</h2>
        
      <div className={styles.projList}>
          <div className={styles.projBox}>
            <p className={styles.projTech}>MongoDB Express React TypeScript Redux</p>
            <h3>Shortly</h3>
            <p className={styles.projInfo}>
              A tool to shorten your link, as apart of a mock website 
              designed by FrontEnd Mentor.</p>
              <br/>
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
            <p className={styles.projTech}>MongoDB Express React TypeScript Redux</p>
            <h3>Shortly</h3>
            <p className={styles.projInfo}>
              A tool to shorten your link, as apart of a mock website 
              designed by FrontEnd Mentor.</p>
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
            <p className={styles.projTech}>MERN TypeScript Redux</p>
            <h3>Shortly</h3>
            <p className={styles.projInfo}>
              A tool to shorten your link, as apart of a mock website 
              designed by FrontEnd Mentor.</p>
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
          <div className={styles.projOutline2}></div>
        </div>

      </section>

      
    </div>
  )
}

export async function getStaticProps() {
  // Get files from posts directory
  const files = fs.readdirSync(path.join("posts"));

  // Get slug and frontmatter from posts
  const posts = files.map(filename => {
    // Create slug
    const slug = filename.replace(".md", "");

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(path.join("posts", filename), "utf-8");

    const {data: frontmatter} = matter(markdownWithMeta);

    return {
      slug,
      frontmatter
    }
  });

  return {
    props: {
      posts: posts.sort(sortByDate),
    }
  }
}