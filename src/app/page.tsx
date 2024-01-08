"use client";

import React, { useState } from "react";
import { About, Contact, Overview, Projects } from "./ui/sections";
import NavigationMenu from "./ui/navigation-menu";
import { onToggle } from "./lib/util";

export default function Home() {
  const [navToggle, setNavToggle] = useState<boolean>(false);

  return (
    <main className="flex min-h-screen flex-col p-6">
      {/* header container */}
      <div id="header-container" className="grid grid-cols-3 ">
        <div className="col-start-2 flex justify-center">
          <p>//Brandon.Woods_</p>
        </div>
        <div className="col-start-3 flex justify-end">
          <button onClick={() => onToggle(navToggle, setNavToggle)}>Nav</button>
        </div>
        <div className=" col-start-1 col-span-3  md:col-start-3 flex justify-end">
          {navToggle && <NavigationMenu />}
        </div>
      </div>
      {/* body */}
      <div>
        <div id="overview-container">
          <Overview />
        </div>
        <div id="project-container">
          <Projects />
        </div>
        <div id="about-container">
          <About />
        </div>
        <div id="contact-container">
          <Contact />
        </div>
      </div>
    </main>
  );
}
