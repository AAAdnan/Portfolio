import React from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./RainbowHighlight";
import userData from "@constants/data";
import Sparkles from './Sparkles'

export default function Hero() {
  const colors = ["#FFF200", "#84CC16", "#10B981", "#3B82F6"];
  return (
    <>
    <div className="flex flex-row justify-center items-start overflow-hidden">
      {/* Text container */}
      <div className="w-full md:w-1/2 mx-auto text-center md:text-left lg:p-20">
            <h1 className="text-6xl lg:text-9xl max-w-lg font-bold text-gray-600 my-20 md:my-0 md:text-gray-600 dark:text-white text-center">
            <Sparkles>
              Developer
            </Sparkles>
          </h1>
      </div>
      {/* Image container */}
    </div>
  </>
  );
}
