import React, { type ReactElement } from "react";
import { GitHubIcon } from "../icons/socialIcons";
import Collapsible from "../ui/collapsable";

const Footer = (): ReactElement => {
  return (
    <footer className="flex-grow flex-1 py-5 bg-primary-foreground border-t-[1px] border-muted">

      <div
        className="
            py-12
            w-full
            grid
            gap-4
            grid-cols-5
            items-center
            justify-center
          "
        >

          {/* import from settings and map over */}

        <div className="bg-blue-500 w-full h-full">1</div>
        <div className="bg-red-500 w-full h-full">2</div>
        <div className="bg-green-500 w-full h-full">3</div>
        <div className="bg-purple-500 w-full h-full">4</div>
        <div className="bg-yellow-500 w-full h-full">5</div>
        <Collapsible title="Privacy">
        content
        </Collapsible>


        <a
          href="https://github.com/JamesPrenticez"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon width={50}/>
        </a>
      </div>
      <p className="w-full flex items-center justify-center mt-3">
        <span className="font-bold pr-2">Created by:</span>James Prentice 2024
      </p> 
    </footer>
  );
};

export default Footer;