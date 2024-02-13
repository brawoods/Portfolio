"use client";

import React, { useState } from "react";
import { About, Contact, Overview, ProjectWrapper } from "./ui/_sections";
import NavigationMenu from "./ui/navigation-menu";
import { onToggle } from "./lib/util";

export default function Page() {
  const [navToggle, setNavToggle] = useState<boolean>(false);
  const title = "//Brandon.Woods_";

  return (
    <main className="flex min-h-screen flex-col p-6">
      {/* header container */}
      <div id="home" className="grid grid-cols-3 mb-4">
        <div className="col-start-2 flex place-content-center">
          <p>{title}</p>
        </div>
        <div className="col-start-3 flex justify-end">
          <button onClick={() => onToggle(navToggle, setNavToggle)}>Nav</button>
        </div>
        <div className="col-start-3">{navToggle && <NavigationMenu />}</div>
      </div>
      {/* body */}
      <div>
        <div id="overview" className="my-16">
          <Overview />
        </div>
        <div id="projects" className="flex flex-col my-16">
          <div className="flex justify-center">
            <p>Projects</p>
          </div>
          <ProjectWrapper />
        </div>
        <div id="about" className="flex flex-col my-16">
          <div className="flex justify-center">
            <p>About</p>
          </div>
          <About />
        </div>

        <div id="contact" className="flex justify-center my-16">
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
