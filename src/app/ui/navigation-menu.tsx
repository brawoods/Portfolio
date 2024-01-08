import Link from "next/link";

export default function NavigationMenu() {
  const homePage = "/";

  return (
    <nav>
      <ul className="grid justify-items-end">
        <li>
          <Link href={homePage}>Home</Link>
        </li>
        <li>Projects</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
