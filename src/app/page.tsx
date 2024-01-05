"use client";

import React, { useState } from "react";
import { About, Contact, Overview, Projects } from "./ui/sections";
import NavigationMenu from "./ui/navigation-menu";

export default function Home() {
  const [navToggle, setNavToggle] = useState<boolean>(false);

  const onToggle = function (
    state: boolean,
    set: React.Dispatch<React.SetStateAction<boolean>>
  ) {
    set(!state);
  };

  return (
    <main>
      <div>
        <div>
          <p>Brandon Woods</p>
        </div>
        <button onClick={() => onToggle(navToggle, setNavToggle)}>
          NavigationBtn
        </button>
        <div>{navToggle && <NavigationMenu />}</div>
      </div>
      <div>
        Body
        <div id="overview">
          <Overview />
        </div>
        <div>
          <Projects />
        </div>
        <div>
          <About />
        </div>
        <div>
          <Contact />
        </div>
      </div>
    </main>
  );
}
