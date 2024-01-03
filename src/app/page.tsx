import React from "react";
import { About, Contact, Overview, Projects } from "./ui/sections";
import NavigationMenu from "./ui/navigation-menu";

export default function Home() {
  return (
    <main>
      <div>
        <div>
          <p>Brandon Woods</p>
        </div>
        <NavigationMenu />
      </div>
      <div>
        <div>
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
