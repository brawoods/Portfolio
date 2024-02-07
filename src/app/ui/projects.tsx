import { projects } from "../lib/project-data";
import productPage from "@/../public/assets/black-clover/black-clover-product-page.png";
import Image from "next/image";

interface Project {
  name: string;
  descriptions: string;
  gitHubUrl: string;
  technologies: string[];
  images: string[];
  gifs: string[];
}

const { blackClover, bluegillApi, stackage } = projects;

export default function Projects() {
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 my-8">
        <div className="flex flex-col gap-4">
          <div className="text-center">{blackClover.name}</div>
          <div className="text-center">{blackClover.descriptions}</div>
        </div>
        <div>
          <Image src={productPage} alt="overview section" />
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 my-8">
        <div className="flex flex-col gap-4">
          <div className="text-center">{bluegillApi.name}</div>
          <div className="text-center">{bluegillApi.descriptions}</div>
        </div>
        <div>
          <Image src={productPage} alt="overview section" />
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 my-8">
        <div className="flex flex-col gap-4">
          <div className="text-center">{stackage.name}</div>
          <div className="text-center">{stackage.descriptions}</div>
        </div>
        <div>
          <Image src={productPage} alt="overview section" />
        </div>
      </div>
    </>
  );
}
