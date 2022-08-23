import React from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./RainbowHighlight";
import userData from "@constants/data";
import Sparkles from './Sparkles'

export default function Hero() {
  const colors = ["#688e26", "#FAA613", "#F44708", "#F44708"];

  return (
    <>
    <div className="flex flex-row justify-center items-start overflow-hidden">
      {/* Text container */}
      <div className="w-full md:w-1/2 mx-auto text-center md:text-left lg:p-20">
      <RainbowHighlight color={colors[0]} order="1">
            <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-white my-2">
              Developer
          </h1>
      </RainbowHighlight>
      <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus metus lorem, pretium dapibus erat ac, mollis posuere arcu. Curabitur nec nisl eros. Proin varius posuere mi, at efficitur dolor. Cras at risus ipsum. Nullam volutpat leo nec nisl placerat, non ullamcorper magna dictum. Praesent quis ex ex. Morbi nec pellentesque eros. Donec fermentum mauris odio, eget tempus nibh ultricies ac. Donec purus nisl, gravida pretium odio ac, finibus rhoncus urna.

        Pellentesque ut auctor lectus. Quisque vitae lacinia lacus. Duis egestas orci at augue sagittis vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut a aliquet ligula, sit amet iaculis ligula. Sed id varius est. Nam auctor congue convallis. Aliquam erat volutpat.
        </p>
      </div>
      </div>
    </div>
  </>
  );
}
