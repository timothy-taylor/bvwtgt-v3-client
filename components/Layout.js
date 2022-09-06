import Image from "next/image";
import Link from "next/link";
import hero from "../public/hero.svg"

export default function Layout({ children }) {
  return (
    <main className="pb-8">
      <nav className="absolute top-1 right-4 md:right-1/4">
        <Link href="/">
          <a className="pr-4 lowercase">Writing</a>
        </Link>
        <Link href="/about">
          <a className="pr-4 lowercase">About</a>
        </Link>
      </nav>
      <Link href="/">
        <a>
          <Image src={hero} alt="site banner" />
        </a>
      </Link>
      {children}
      <footer className="fixed right-4 bottom-1 opacity-30 font-thin text-xs">TGT 2022</footer>
    </main>
  )
}