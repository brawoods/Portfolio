import Link from "next/link";
import Contact from "./contact";

export default function NavigationMenu() {
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
