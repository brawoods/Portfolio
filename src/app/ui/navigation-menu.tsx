"use client";

import { useState } from "react";
import Link from "next/link";
import Contact from "./contact";
import { Icon } from "@iconify/react";
import { onToggle } from "../lib/util";

export default function NavigationWrapper() {
  const [navToggle, setNavToggle] = useState<boolean>(false);

  return (
    <>
      <div
        className="flex justify-end"
        onClick={() => onToggle(navToggle, setNavToggle)}
      >
        <NavigationBtn />
      </div>
      <div className="absolute right-6">{navToggle && <NavigationMenu />}</div>
    </>
  );
}

export function NavigationBtn() {
  return <Icon icon="ic:round-menu" />;
}

export function NavigationMenu() {
  return (
    <nav>
      <ul className="grid justify-items-end">
        <li>
          <Link href="#home">Home</Link>
        </li>
        <li>
          <Link href="#projects">Projects</Link>
        </li>
        <li>
          <Link href="#about">About</Link>
        </li>
        <li>
          <Contact />
        </li>
      </ul>
    </nav>
  );
}
