import React, { useState, useEffect } from "react"
import Header from "../components/Navigation";
import Footer from "../components/Footer";
import "../styles/globals.css";
import Head from "next/head";
import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';
import RingLoader from "react-spinners/RingLoader";

hljs.registerLanguage('javascript', javascript);

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000)
  }, []);

  useEffect(() => {
    hljs.highlightAll();
});

  return (
    <>
      <Head>
        <title>Viviana Davila | Los Angeles, CA </title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.2.0/build/styles/night-owl.min.css"></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
      </Head>
      {
        loading ? (
          <div className="loadingIcon">
            <RingLoader color={"#40CFE4"} loading={loading} css={"display:block;margin:50px auto;"} size={150} />
          </div>
        ) : (
          <>
            <Header/>
            <Component {...pageProps} />
            <Footer />
          </>
        )
      }
    </>
  )
}

export default MyApp
