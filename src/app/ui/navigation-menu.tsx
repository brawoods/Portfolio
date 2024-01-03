import Link from "next/link";

export default function NavigationMenu() {
  const homePage = "/";

  return (
    <nav>
      <ul>
        <li>
          <Link href={homePage}>Home</Link>
        </li>
        <li>Projects button</li>
        <li>About button</li>
        <li>Contact button</li>
      </ul>
    </nav>
  );
}
