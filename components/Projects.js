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
      <div className="max-w-6xl mx-auto h-48">
      <RainbowHighlight color={colors[1]} show={myElementIsVisible}>
        <h1 ref={myRef} className="text-5xl md:text-9xl font-bold text-center">
          Projects
        </h1>
        </RainbowHighlight>
      </div>
      {/* Grid starts here */}
      <div className="bg-[#F1F1F1] dark:bg-gray-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40">
          {userData.projects.map((proj, idx) => (
            <ProjectCard
              title={proj.title}
              link={proj.link}
              imgUrl={proj.imgUrl}
              number={`${idx + 1}`}
              description={proj.description}
              tech={proj.tech}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const ProjectCard = ({ title, link, imgUrl, number, description, tech }) => {

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
      <section>
        <h1 className="pt-10">Technology Used</h1>
        <p className="pt-8">{description}</p>
        <div className="grid grid-flow-col max-w-xs">
          {tech.map(element => (
             <img className="object-scale-down" src={element}></img>
          ))}
        </div>
      </section>
    </a>
  );
};
