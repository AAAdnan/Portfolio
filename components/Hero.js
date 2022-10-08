import React from "react";
import { useRef, useEffect, useState } from 'react';
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./RainbowHighlight";
import userData from "@constants/data";
import Sparkles from './Sparkles'

export default function Hero() {
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
    <>
    <section className="bg-[#F1F1F1] dark:bg-gray-900 mb-8">
    <div className="flex flex-row justify-center items-start overflow-hidden">
      {/* Text container */}
      <div className="w-full w-1/2 mx-auto text-center md:text-left lg:p-20">
      <RainbowHighlight color={colors[0]} order="1" show={myElementIsVisible}>
            <h1 ref={myRef} className="text-4xl lg:text-8xl max-w-lg font-bold md:my-0 text-white text-center">
              Developer
          </h1>
      </RainbowHighlight>
      <div>
        <p className="pt-8">Hi I'm Adnan - I like to build things. Currently working in React in front-end development.
        </p>
      </div>
      </div>
    </div>
    </section>
  </>
  );
}
