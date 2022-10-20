import React from "react";
import { useRef, useEffect, useState } from 'react';
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./RainbowHighlight";
import userData from "@constants/data";
import Sparkles from './Sparkles'
import AnimatedText from 'react-animated-text-content';

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
    <section className="bg-[#F1F1F1] dark:bg-gray-900 mb-6">
    <div className="flex flex-row justify-center items-start overflow-hidden">
      {/* Text container */}
      <div className="w-full w-1/2 mx-auto text-center md:text-left lg:p-20">
      <RainbowHighlight color={colors[0]} order="1" show={myElementIsVisible}>
            <h1 ref={myRef} className="text-4xl lg:text-8xl max-w-lg font-bold md:my-0 text-white text-center">
              Developer
          </h1>
      </RainbowHighlight>
      <div>
      <AnimatedText
        type="words" // animate words or chars
        animation={{
          x: '200px',
          y: '-20px',
          scale: 1.1,
          ease: 'ease-in-out',
        }}
        animationType="throw"
        interval={0.06}
        duration={0.8}
        tag="p"
        className="pt-4 text-2xl text-center"
        includeWhiteSpaces
        threshold={0.1}
        rootMargin="20%"
        >
          Hi
        </AnimatedText>
        <AnimatedText
        type="words" // animate words or chars
        animation={{
          x: '200px',
          y: '-20px',
          scale: 1.1,
          ease: 'ease-in-out',
        }}
        animationType="throw"
        interval={0.06}
        duration={0.8}
        tag="p"
        className="text-lg text-center"
        includeWhiteSpaces
        threshold={0.1}
        rootMargin="20%"
        >
          I'm Adnan 👷🏽‍♂️ 
        </AnimatedText>
        <AnimatedText
        type="words" // animate words or chars
        animation={{
          x: '200px',
          y: '-20px',
          scale: 1.1,
          ease: 'ease-in-out',
        }}
        animationType="throw"
        interval={0.06}
        duration={0.8}
        tag="p"
        className="text-lg text-center"
        includeWhiteSpaces
        threshold={0.1}
        rootMargin="20%"
        >
          I like to 🔧 things.
        </AnimatedText>
        <AnimatedText
        type="words" // animate words or chars
        animation={{
          x: '200px',
          y: '-20px',
          scale: 1.1,
          ease: 'ease-in-out',
        }}
        animationType="throw"
        interval={0.06}
        duration={0.8}
        tag="p"
        className="text-lg text-center"
        includeWhiteSpaces
        threshold={0.1}
        rootMargin="20%"
        >
        I occasionally ✍🏽 things
        </AnimatedText>
        <AnimatedText
        type="words" // animate words or chars
        animation={{
          x: '200px',
          y: '-20px',
          scale: 1.1,
          ease: 'ease-in-out',
        }}
        animationType="throw"
        interval={0.06}
        duration={0.8}
        tag="p"
        className="text-lg text-center"
        includeWhiteSpaces
        threshold={0.1}
        rootMargin="20%"
        >
        Currently 🧑🏽‍💻 in React web development
        </AnimatedText>
      </div>
      </div>
    </div>
    </section>
  </>
  );
}
