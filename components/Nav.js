import Link from "next/link";

export const Nav = () => {
  return (
    <nav className="absolute top-1 right-4 md:right-1/4">
      <ul className="list-none m-0">
        <li className="inline p-0">
          <Link href="/">
            <a className="pr-4 lowercase">Writing</a>
          </Link>
        </li>
        <li className="inline p-0">
          <Link href="/about">
            <a className="pr-4 lowercase">About</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
