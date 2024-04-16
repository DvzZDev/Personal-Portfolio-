import React from "react";
import "tailwindcss/tailwind.css";
import { Work_Sans } from "next/font/google";
import Section1 from "../components/Section1";
import Header from "@/components/header";
import Skills from "@/components/skills";
import Aboutme from "@/components/aboutme";
import Footer from "@/components/footer";
const work_sans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-work",
  style: ["normal", "italic"],
});

function Page() {
  return (
    <>
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
