import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import baseUrl from "../../baseUrl";

const Disclaimer = () => {
  const router = useRouter();
  function Home() {
    router.push("/");
  }

  const data ="<p>Gaurav</p>";
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="author" content="Gaurav Narnaware"></meta>
        <title>Disclaimer || Gaurav Narnaware</title>
        <meta name="title" content="Disclaimer || Gaurav Narnaware" />
        <meta
          name="keywords"
          content="Gaurav Narnaware, Narnaware Gaurav, Gaurav,developedbygaurav ,Narnaware, itsgaurav,gvrv_n,gvrv,codewithgvrv, Gaurav Narnaware Website"
        />
        {/* <!-- Primary Meta Tags --> */}
        <title>Disclaimer | Gaurav Narnaware</title>
        <meta name="title" content="Disclaimer | Gaurav Narnaware" />
        <meta
          name="description"
          content="I'm a creator, software developer, and web designer by name Gaurav Narnaware.."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${baseUrl}/privacy/Disclaimer`} />
        <meta property="og:title" content="Disclaimer | Gaurav Narnaware" />
        <meta
          property="og:description"
          content="I'm a creator, software developer, and web designer by name Gaurav Narnaware.."
        />
        <meta property="og:image" content={`${baseUrl}/profile.webp`} />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content={`${baseUrl}/privacy/Disclaimer`}
        />
        <meta
          property="twitter:title"
          content="Disclaimer | Gaurav Narnaware"
        />
        <meta
          property="twitter:description"
          content="I'm a creator, software developer, and web designer by name Gaurav Narnaware.."
        />
        <meta property="twitter:image" content={`${baseUrl}/profile.webp`} />
      </Head>
      <section className="text-gray-600 body-font mb-24">
        <div className="container px-5 pt-0 mx-auto flex flex-wrap  items-center">
          <div className="pb-6">
            <span onClick={Home} className="primaryColor cursor-pointer">
              Home /{" "}
            </span>
            <span className=" cursor-pointer"> Disclaimer</span>
          </div>
        </div>
        <div className="mx-3 text-justify" dangerouslySetInnerHTML={{ __html: data }} />
      </section>
    </>
  );
};

export default Disclaimer;
