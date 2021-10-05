import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { sortByDate } from "../utils";
import Header from '../components/Header';
import PostList from '../components/PostList';
import Projects from "../components/Projects";
import About from "../components/About";

export default function Home({posts}) {

  return (
    <div className="container">
      <Header />
      <PostList posts ={posts}/>
      <Projects />
      <About />     
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
