import React, { useState, useEffect } from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";
import Link from "next/link";

// TO DO: markdown in safe mode

export default function PostPage({frontmatter: {title, date}, slug, content, posts}) {

  const [link, setLink] = useState("");
  const [postTitle, setTitle] = useState("");

  const findNextPost = () => {
    let length = posts.length;

    posts.forEach((post, index) => {
      if (post.postSlug === slug) {
        if(index + 1 < length) {
          setLink(posts[index + 1].postSlug);
          setTitle(posts[index + 1].frontmatter.title);
        } else {
          setLink(posts[0].postSlug);
          setTitle(posts[0].frontmatter.title);
        }
      }
    })
  };

  useEffect(() => {
      findNextPost();
  });

  console.log(posts);
  console.log(link);
  console.log(postTitle);
 
  return (
    <div className="container">
      <article className="animate__animated animate__fadeIn animate__delay-2s" dangerouslySetInnerHTML={{__html: marked(content)}}>
      </article>
      <Link href={`/blog/${link}`}><a className="nextPost">Next Post: {postTitle}</a></Link>
    </div>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map(filename => ({
    params: {
        slug: filename.replace(".md", "")
    }
  }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({params: {slug}}) {
  const markdownWithMeta = fs.readFileSync(path.join("posts", slug + ".md"), "utf-8");

  const {data: frontmatter, content} = matter(markdownWithMeta);

  // Get files from posts directory
  const files = fs.readdirSync(path.join("posts"));
  
  // Get slug and frontmatter from posts
  const posts = files.map(filename => {
    // Create slug
    const postSlug = filename.replace(".md", "");

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(path.join("posts", filename), "utf-8");

    const {data: frontmatter} = matter(markdownWithMeta);

    return {
      postSlug,
      frontmatter
    }
  });

  return {
    props: {
        frontmatter,
        slug,
        content,
        posts 
    }
  }
}
