import Image from "next/image";
import { Nav } from "./Nav";
import hero from "../public/hero.svg"

export default function Layout({ children }) {
  return (
    <main className="pb-8">
      <Nav />
      <Image src={hero} alt="" />
      {children}
      <footer className="fixed right-4 bottom-1 opacity-30 font-thin text-xs">TGT 2022</footer>
    </main>
  )
}
