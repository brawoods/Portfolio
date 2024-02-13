import Image from "next/image";
import { projects } from "../lib/project-data";

interface Project {
  name: string;
  description: string;
  gitHubUrl: string;
  technologies: string[];
  images: string[];
  gifs: string[];
}

export default function ProjectWrapper() {
  return projects.map((project: Project) => {
    return (
      <Project
        name={project.name}
        key={project.name}
        description={project.description}
        gitHubUrl={project.gitHubUrl}
        technologies={project.technologies}
        images={project.images}
        gifs={project.gifs}
      />
    );
  });
}

export function Project({ name, description, images, ...project }: Project) {
  return (
    <div className="grid gap-4 md:grid-cols-2 my-8">
      <div className="flex flex-col gap-4">
        <div className="text-center">{name}</div>
        <div className="text-center">{description}</div>
      </div>
      <div>
        <Image src={images[0]} width="700" height="500" alt="thumbnail" />
      </div>
    </div>
  );
}
