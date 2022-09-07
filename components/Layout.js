import Image from "next/image";
import Nav from "./Nav";
import Footer from "./Footer";
import hero from "../public/hero.svg"

export default function Layout({ children }) {
  return (
    <main className="pb-8">
      <Nav />
      <Image src={hero} alt="" />
      {children}
      <Footer />
    </main>
  )
}
