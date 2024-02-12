import Image from "next/image";

export default function Project(project: Project) {
  return (
    <div className="grid gap-4 md:grid-cols-2 my-8">
      <div className="flex flex-col gap-4">
        <div className="text-center">{project.name}</div>
        <div className="text-center">{project.description}</div>
      </div>
      <div>
        <Image
          src={project.images[0]}
          width="700"
          height="500"
          alt="overview section"
        />
      </div>
    </div>
  );
}
