import React from "react";
import { About, Contact, Overview, ProjectWrapper } from "./ui/_sections";
import NavigationWrapper from "./ui/navigation-menu";

export default function Page() {
  const title = "//Brandon.Woods_";

  return (
    <main className="flex min-h-screen flex-col p-6 bg-gray-950">
      {/* header container */}
      <div id="home" className="sticky top-6 grid grid-cols-3 mb-4 bg-gray-950">
        <div className="col-start-2 flex place-content-center">
          <p>{title}</p>
        </div>
        {/* Navigation */}

        <div className="flex justify-end">
          <NavigationWrapper />
        </div>
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
