import React, {useState} from 'react';
import arrow from '../public/images/sub-arrow.svg';
import Link from "next/link";
import Post from "./Post";
import Image from "next/image";
import useSubscribe from '../hooks/useSubscribe';

export default function PostList(props) {
  const { posts } = props;
  const { email, handleChange, subscribe } = useSubscribe();

    return (
      <section id="posts" className="animate__animated animate__fadeIn animate__delay-1s">
            <h2 className="headTitle">Recent Posts</h2>
            <div className="subText">
            Sign up to be notified <br/> everytime I add a new post!
            <form className="form">
            <input 
                name="email" 
                type="email" 
                placeholder="email" 
                className="input"
                value={email}
                onChange={handleChange}
                />
            <button className="btn" onClick={subscribe}>
            <Image src={arrow} className="arrow" width={15} height={15} alt="arrow" />
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
            <Link href="/posts"><a className="postBtn">View all posts ...</a></Link>
      </section>
    )
}
