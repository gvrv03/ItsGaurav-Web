import baseUrl from "../baseUrl";
import React from "react";
import Contact from "./Component/Contact";
import Head from "next/head";
import Image from "next/image";
import SingleBlog from "./Component/SingleBlog";
import Skills from "./Component/Skills";
import { Button } from "@mantine/core";
import Typewriter from "typewriter-effect";
import AboutHome from "./Component/AboutHome";
export default function Home(props) {
  const blog = props.blogs;
  const last = blog.length;
  const first = last - 3;

  // structured Schema

  const addJsonLd = () => {
    return {
      itemListElement: [
        {
          "@context": "https://schema.org/",
          "@type": "BlogPosting",
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://itsgaurav.vercel.app/Post/638f4be6cf491b30041a1727",
          },
          headline: "Cheatsheet for Django",
          description:
            "Python-based web framework used for rapid development of web applications.",
          image:
            "https://www.stxnext.com/hubfs/blog-post-graphic-13-django-tutorials.webp",
          author: {
            "@type": "Person",
            name: "Gaurav Narnaware",
            url: "https://itsgaurav.vercel.app/About",
          },
          publisher: {
            "@type": "Organization",
            name: "Gaurav Narnaware",
            logo: {
              "@type": "ImageObject",
              url: "https://itsgaurav.vercel.app/About",
            },
          },
          datePublished: "2022-12-06",
          dateModified: "2022-12-06",
        },
        {
          "@context": "https://schema.org/",
          "@type": "BlogPosting",
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://itsgaurav.vercel.app/Post/638f4c4acf491b30041a1729",
          },
          headline: "13 Best Django and Django REST Tutorials in 2022",
          description:
            "Thinking of learning Django? You’re already familiar with Python, but want to go further and try something new? Or maybe you already know Django and just wish to boost your qualifications even more?",
          image:
            "https://www.stxnext.com/hubfs/blog-post-graphic-Best-Django-packages-and-libraries.webp",
          author: {
            "@type": "Person",
            name: "Gaurav Narnaware",
            url: "https://itsgaurav.vercel.app/About",
          },
          publisher: {
            "@type": "Organization",
            name: "Gaurav Narnaware",
            logo: {
              "@type": "ImageObject",
              url: "https://itsgaurav.vercel.app/About",
            },
          },
          datePublished: "2022-12-06",
          dateModified: "2022-12-06",
        },
        {
          "@context": "https://schema.org/",
          "@type": "BlogPosting",
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://itsgaurav.vercel.app/Post/638f4cc0cf491b30041a172b",
          },
          headline: "What Is Django and What Is Django Used for?",
          description:
            "Thinking of learning Django? You’re already familiar with Python, but want to go further and try something new? Or maybe you already know Django and just wish to boost your qualifications even more?",
          image:
            "https://www.stxnext.com/hubfs/STX%20Next%202020/blog/images/blog-post-graphic-what-is-Django-used-for.webp",
          author: {
            "@type": "Person",
            name: "Gaurav Narnaware",
            url: "https://itsgaurav.vercel.app/About",
          },
          publisher: {
            "@type": "Organization",
            name: "Gaurav Narnaware",
            logo: {
              "@type": "ImageObject",
              url: "https://itsgaurav.vercel.app/About",
            },
          },
          datePublished: "2022-12-06",
          dateModified: "2022-12-06",
        },
      ],
    };
  };
  return (
    <>
      <Head>
        <meta charSet="utf-8" />

        <meta
          name="google-site-verification"
          content="JFM9UHt_BrAX36Tz0oxMDShc7XtAyDd4Hi8w-BaCGCc"
        />
        <meta property="og:type" content="website" />
        <meta
          name="keyword"
          content="gaurav narnaware,Gaurav Narnaware,Gaurav N,gvrv,gvrv_n,gauravn3112003,gaurav"
        />
        <title>Gaurav Narnaware | Personal Website</title>
        <meta name="title" content="Gaurav Narnaware | Personal Website" />
        <meta
          name="description"
          content="I'm a creator, software developer, and web designer by name Gaurav Narnaware."
        />
        <meta
          name="keywords"
          content="Gaurav Narnaware, Gaurav, gvrv, gvrv_n"
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Gaurav Narnaware" />

        {/* <!-- Primary Meta Tags --> */}
        <meta
          name="description"
          content="I'm a creator, software developer, and web designer by name Gaurav Narnaware."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={baseUrl} />

        <meta
          name="og:title"
          property="og:title"
          content="Gaurav Narnaware | Personal Website"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

        <meta
          property="og:description"
          content="I'm a creator, software developer, and web designer by name Gaurav Narnaware."
        />
        <meta property="og:image" content={`${baseUrl}/profile.webp`} />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={baseUrl} />
        <meta
          property="twitter:title"
          content="Gaurav Narnaware | Personal Website"
        />
        <meta
          property="twitter:description"
          content="I'm a creator, software developer, and web designer by name Gaurav Narnaware."
        />
        <meta property="twitter:image" content={`${baseUrl}/profile.webp`} />
        <link rel="canonical" href={baseUrl} />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(addJsonLd()) }}
          key="item-jsonld"
        />
      </Head>

      <section className="gradient pt-14">
        <div>
          <div className="scroll-up-btn">
            <i className="fas fa-angle-up" />
          </div>

          {/* home section start */}
          <section className="home pt-0" id="home">
            <div className="max-width">
              <div className="home-content">
                <div className="text-1">Hello, my name is</div>
                <div className="text-2">Gaurav Narnaware </div>
                <div className="text-3">
                  And I'm a{" "}
                  <span className="typing">
                    {" "}
                    <Typewriter
                      options={{
                        strings: ["Web Developer", "Software Developer"],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </span>
                </div>
                <a href="#contact">Hire me</a>
              </div>
            </div>
          </section>
        </div>
      </section>
      <AboutHome />
      <Skills />
      <section className="blogB" id="blogB">
        <div className="max-width  ">
          <h2 className="title blogBefore">Blogs</h2>
          <div className=" mx-auto  py-1">
            <div className="-m-4 flex  flex-wrap-reverse">
              {blog.slice(first, last).map((item) => {
                return (
                  <SingleBlog
                    image={item.image}
                    Category={item.category}
                    Title={item.title.substring(0, 80)}
                    desc={item.description.substring(0, 100) + "..."}
                    key={item._id}
                    id={item._id}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(baseUrl + "/api/blogs", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  if (!data) {
    data = null;
  }
  return {
    props: { blogs: data },
  };
}
