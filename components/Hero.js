import React from "react";
import { useRef, useEffect, useState } from 'react';
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./RainbowHighlight";
import userData from "@constants/data";
import Sparkles from './Sparkles'
import AnimatedText from 'react-animated-text-content';
import AboutMe from "../components/AboutMe";


export default function Hero() {
  
  return (
    <>
    <section className="bg-[#F1F1F1] dark:bg-gray-900 mb-6">
    <AboutMe />
    </section>
  </>
  );
}
