"use client";

import React, { useState } from "react";
import { About, Contact, Overview, Projects } from "./ui/sections";
import NavigationMenu from "./ui/navigation-menu";
import NavigationBtn from "./ui/navigation-btn";

export default function Home() {
  const [navToggle, setNavToggle] = useState(false);

  const onToggle = function (state: boolean, set: any) {
    state == false ? set(true) : set(false);
  };

  return (
    <main>
      <div>
        <div>
          <p>Brandon Woods</p>
        </div>
        <NavigationBtn onClick={() => onToggle(navToggle, setNavToggle)} />
        {navToggle && <NavigationMenu />}
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
