import React from "react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-black">About</p>
          <h2 className="py-4 text-black">Who I Am</h2>
          <p className="py-2 text-black">
            Hello! My name is Rayyan and I am an aspiring researcher and
            developer with a focus on Machine Learning. I have a strong
            foundation in deep learning and have experience building/deploying
            web and mobile applications using a variety of programming languages
            and frameworks.
          </p>

          <Link href="/#projects">
            <p className="py-2 text-black underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-yellow-500 rounded-xl flex items-center justify-center p-4 hover:scale-105 md:hover:scale-110 ease-in duration-500">
          <img
            className="rounded-xl group-hover:opacity-10"
            src={"/portfolio/assets/about.png"}
            alt="/"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default About;
