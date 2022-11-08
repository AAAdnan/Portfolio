import React from "react";
import userData from "@constants/data";
import { useRef, useEffect, useState } from 'react';
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./RainbowHighlight";

export default function AboutMe() {

  const colors = ["#30D5C8", "#FAA613", "#F44708", "#F44708"];

  const [myElementIsVisible, updateMyElementIsVisible] = useState();

  const myRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
    const entry = entries[0];
    updateMyElementIsVisible(entry.isIntersecting);
  });
  observer.observe(myRef.current)
}, []);

  return (
    <section className="bg-[#F1F1F1] dark:bg-gray-900">
      <div className="max-w-6xl mx-auto h-48">
      <RainbowHighlight color={colors[0]} order="1" show={myElementIsVisible}>
        <h1 ref={myRef} className="text-4xl text-white md:text-8xl font-bold text-center mx-auto">
          About Me.
        </h1>
      </RainbowHighlight>
      </div>
      <div className="bg-[#F1F1F1] -mt-10 dark:bg-gray-900">
        <div className="text-container max-w-6xl mx-auto pt-20">
          <p
            className="leading-loose text-2xl md:text-4xl font-semibold  mx-4"
            style={{ lineHeight: "3rem" }}
          >
            {userData.about.title}. Currently working on{" "}
            <a
              className="bg-red-500 rounded-md px-2 py-1 text-white"
              href={userData.about.currentProjectUrl}
            >
              {userData.about.currentProject} ✈️
            </a>
          </p>
        </div>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 px-4">
        <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
          {/* Social Buttons */}
          <div className="inline-flex flex-col">
            <div>
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Contact
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                For any sort help / enquiry, shoot a{" "}
                <a
                  href={`mailto:${userData.email}`}
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                  mail
                </a>{" "}
                and I'll get back. I swear.
              </p>
            </div>
            <div className="mt-8">
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Job Opportunities
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                I'm looking for a job currently, If you see me as a good fit,
                check my{" "}
                <a
                  href={userData.resumeUrl}
                  target="__blank"
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                  CV
                </a>{" "}
                and I'd love to work for you.
              </p>
            </div>
            {/* Social Links */}
            <h1 className="text-xl font-semibold text-gray-700 mt-8 dark:text-gray-200">
              Social Links
            </h1>
            <div className="mt-4 ml-4">
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.github}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    GitHub
                  </p>
                </a>
              </div>
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.linkedin}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    LinkedIn
                  </p>
                </a>
              </div>
            </div>
          </div>
          {/* Text area */}
          <div className="col-span-1 md:col-span-2">
            {userData.about.description?.map((desc, idx) => (
              <p
                key={idx}
                className="text-xl text-gray-700 mb-4 dark:text-gray-300 "
              >
                {desc}
              </p>
            ))}

            <h1 className="bg-red-500 text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50">
              Tech Stack
            </h1>
            <div className="flex flex-row flex-wrap mt-8">
              <div>
                <img
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
                  className="h-20 w-20 mx-4 my-4"
                />
                <p className="text-center">Javascript</p>
              </div>
                <div>
                <img
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"
                  className="h-20 w-20 mx-4 my-4"
                />
                <p className="text-center">HTML</p>
              </div>
              <div>
                <img
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"
                  className="h-20 w-20 mx-4 my-4"
                />
                <p className="text-center">HTML</p>
              </div>
              <div>
                <img
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/angular/angular.png"
                  className="h-20 w-20 mx-4 my-4"
                />
                <p className="text-center">Angular</p>
              </div>
                <div>
                <img
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/vue/vue.png"
                  className="h-20 w-20 mx-4 my-4"
                />
                <p className="text-center">Vue</p>
              </div>
              <div>
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <p className="text-center">Git</p>
              </div>
              <div>
                <img
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
                  className="h-20 w-20 mx-4 my-4"
                />
                <p className="text-center">React</p>
              </div>
              <div>
                <img
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/firebase/firebase.png"
                  className="h-20 w-20 mx-4 my-4"
                />
                <p className="text-center">Firebase</p>
              </div>
              <div>
                <img
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mysql/mysql.png"
                  className="h-20 w-20 mx-4 my-4"
                />
                <p className="text-center">MySQL</p>
              </div>
              <div>
                <img
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png"
                  className="h-20 w-20 mx-4 my-4"
                />
                <p className="text-center">Mongo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
