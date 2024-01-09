"use client";

import React, { useState } from "react";
import { About, Contact, Overview, Projects } from "./ui/_sections";
import NavigationMenu from "./ui/navigation-menu";
import { onToggle } from "./lib/util";

export default function Home() {
  const [navToggle, setNavToggle] = useState<boolean>(false);

  return (
    <main className="flex min-h-screen flex-col p-6">
      {/* header container */}
      <div id="home" className="grid grid-cols-3 mb-4">
        <div className="col-start-2 flex place-content-center">
          <p>//Brandon.Woods_</p>
        </div>
        <div className="col-start-3 flex justify-end">
          <button onClick={() => onToggle(navToggle, setNavToggle)}>Nav</button>
        </div>
        <div className="col-start-3">{navToggle && <NavigationMenu />}</div>
      </div>
      {/* body */}
      <div>
        <div id="overview-container" className="my-16">
          <Overview />
        </div>
        <div id="projects">
          <div>
            <p>Projects</p>
            <Projects />
          </div>
        </div>
        <div id="about">
          <About />
        </div>
        <div id="contact" className="flex justify-center">
          <div>
            <Contact />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div>Developed + Designed by Brandon Woods</div>
      </div>
    </main>
  );
}
