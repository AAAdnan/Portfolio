import React from "react";
import userData from "@constants/data";
import { useRef, useEffect, useState } from 'react';
import { RainbowHighlight } from "./RainbowHighlight";

export default function Projects() {

  const colors = ["#688e26", "#FAA613", "#F44708", "#F44708"];

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
      <div className="mx-auto">
        <h1 ref={myRef} className="text-4xl text-white md:text-8xl font-bold text-center">
        <RainbowHighlight color={colors[1]} show={myElementIsVisible}>
          <span>
          Projects
          </span>
          </RainbowHighlight>
        </h1>
      </div>
      {/* Grid starts here */}
      <div className="bg-[#F1F1F1] dark:bg-gray-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 px-10 md:px-0 pb-40">
          {userData.projects.map((proj, idx) => (
            <ProjectCard
              title={proj.title}
              link={proj.link}
              imgUrl={proj.imgUrl}
              number={`${idx + 1}`}
              need={proj.need}
              contribution={proj.contribution}
              tech={proj.tech}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const ProjectCard = ({ title, link, imgUrl, number, need , contribution, tech }) => {

  const [myElementIsVisible, updateMyElementIsVisible] = useState();

  const myRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
    const entry = entries[0];
    updateMyElementIsVisible(entry.isIntersecting);
  });
  observer.observe(myRef.current)
}, []);


  const colors = ["#688e26", "#FAA613", "#F44708", "#F44708"];

  return (
    <a href={link} className="w-full block shadow-2xl">
      <div className="relative overflow-hidden">
        <div className="h-72 object-cover">
          <img
            src={imgUrl}
            alt="portfolio"
            className="transform hover:scale-125 transition duration-2000 ease-out object-cover h-full w-full"
          />
        </div>
        <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">
          {title}
        </h1>
        <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
          {number.length === 1 ? "0" + number : number}
        </h1>
      </div>
      <section className="flex flex-col">
        <div className="pt-8">
          <RainbowHighlight color={colors[2]} show={myElementIsVisible}>
            <p className="text-white text-center" ref={myRef}>{need}</p>
          </RainbowHighlight>
        </div>
          <p className="p-8 text-center">{contribution}</p>
        <div className="flex justify-evenly pb-8">
          {tech.map(element => (
            <>
              <div>
                <img className=" md:h-20 md:w-20 h-10 w-10 mb-8" src={element.image}></img>
                <p className="text-center">{element.text}</p>
             </div>
            </>
          ))}
        </div>
      </section>
    </a>
  );
};
