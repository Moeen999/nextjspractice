import Link from "next/link";
import coder from ".././public/coding.jpeg"
import "../app/globals.css";
import Image from "next/image";
export default function Navigation() {
  return (
    <header className="gridClass">
      <div>
        <Link href="/">
          <Image
            src={coder}
            width={50}
            height={50}
            className="rounded-full"
            alt="testImages"
          />
        </Link>
      </div>
      <nav >
        <ul className="links">
          {/* Link is used to avoid from Reloading of Page same as Navlink in our react but we don't need to use the to="route" we can use the href of anchor tag only  */}

          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/service">Services</Link>
          </li>
          <li>
            <Link href="/servercomp">ServerComp</Link>
          </li>
          <li>
            <Link href="/clientcomp">ClientComp</Link>
          </li>
          <li>
            <Link href="/service/teams">Teams</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
