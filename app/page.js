import React from "react";
import { Analytics } from "@vercel/analytics/react";
import "tailwindcss/tailwind.css";
import { Work_Sans } from "next/font/google";
import Section1 from "../components/Section1";
import Header from "@/components/header";
import Skills from "@/components/skills";
import Aboutme from "@/components/aboutme";
import Footer from "@/components/footer";
import Head from "next/head";

const work_sans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-work",
  style: ["normal", "italic"],
});

function Page() {
  return (
    <>
      <title>David Esteban Portfolio</title>
      <meta
        property="og:title"
        content="Hi you👋, Welcome to my personal portfolio"
      />
      <meta
        name="image"
        property="og:image"
        content="https://i.imgur.com/ril8Lee.png"
      />
      <meta property="og:url" content="https://example.com/tech-innovations" />
      <meta property="og:description" content="DvzZ Portfolio" />
      <meta property="og:site_name" content="Tech World Daily" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:updated_time" content="2023-11-22T10:00:00+00:00" />

      <div className="sticky z-10 top-0 flex justify-center items-center bg-transparent">
        <Header />
      </div>
      <div className="bg-gray-800">
        <Section1 />
      </div>
      <div className="bg-gray-800">
        <Skills />
      </div>
      <div>
        <Aboutme />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Page;
