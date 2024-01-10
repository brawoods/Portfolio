import { placeholderProject } from "../lib/placeholder-project-data";
import productPage from "@/../public/assets/black-clover/black-clover-product-page.png";
import Image from "next/image";

const { name, descriptions } = placeholderProject;

export default function Projects() {
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 my-8">
        <div className="flex flex-col gap-4">
          <div className="text-center">{name}</div>
          <div className="text-center">{descriptions.short}</div>
        </div>
        <div>
          <Image src={productPage} alt="overview section" />
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 my-8">
        <div className="flex flex-col gap-4">
          <div className="text-center">{name}</div>
          <div className="text-center">{descriptions.short}</div>
        </div>
        <div>
          <Image src={productPage} alt="overview section" />
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 my-8">
        <div className="flex flex-col gap-4">
          <div className="text-center">{name}</div>
          <div className="text-center">{descriptions.short}</div>
        </div>
        <div>
          <Image src={productPage} alt="overview section" />
        </div>
      </div>
    </>
  );
}

// flex flex-col gap-8 px-4 justify-center md:flex-row
