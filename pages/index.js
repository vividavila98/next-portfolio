import { useState } from 'react';
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import realPic from '../public/images/grad-pic.jpg';
import arrow from '../public/images/sub-arrow.svg';
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
          <Image src={arrow} className={styles.arrow} width={20} height={20} alt="arrow" />
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
      </section>

      <section>
      <h2 className={styles.headTitle}>Featured Projects</h2>
      </section>

      <section className={styles.subscribe}>
        <div className={styles.subBox}>
        <h2 className={styles.headTitle}>Subscribe</h2>
        <p className={styles.subInfo}>Want to learn more about Web Development? Sign up with your email to be notified everytime
           I add a new post!</p>
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