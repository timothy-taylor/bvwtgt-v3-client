import Link from "next/link";

const links = [
  { text: "Writing", path: "/" },
  { text: "About", path: "/about" },
]

export default function Nav() {
  return (
    <nav className="absolute top-1 right-4 md:right-1/4">
      <ul className="list-none m-0">
        {links.map((link,i) => (
          <li className="inline p-0" key={`${link.text}${i}`}>
            <Link href={link.path}>
              <a className="pr-4 lowercase">{link.text}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
