import Link from "next/link";

export default function About() {
  return (
    <>
      <h2 className="pt-8">Hi, I&apos;m Tim.</h2>
      <h3 className="max-w-sm">
        Software Developer | Frontend + Fullstack | Javascript, HTML5, CSS3,
        React, Ruby on Rails
      </h3>
      <p className="text-justify">
        I&apos;m a software developer using mostly Javascript and Ruby (with a bit
        exploring with Lua, Rust, C/C++). I care about accessibility, good UI,
        and responsive designs.
      </p>
      <p className="text-justify">
        I&apos;m also a generalist, musician, and a team player who enjoys
        improvisation, learning, and uncovering hidden assumptions and
        expectations so everyone can be on the same page.
      </p>
      <p className="text-justify">
        Using my experience as a luthier and instrument designer I treat my
        process of creating software as the building of an instrument: making
        something that is both simple and easily discoverable yet rewards
        deeper interaction and study. In my free time I enjoy coding musical
        controllers and interfaces for both the browser and various hardware
        devices.
      </p>
      <p>
        Love to chat about any of the following:
      </p>
      <ul>
        <li>synthesis / sound / instrument design</li>
        <li>chess</li>
        <li>skateboarding</li>
        <li>electric guitar</li>
        <li>
          carving out space and energy to live and have a sustainable career
          as an agoraphobic
        </li>
        <li>Andrei Tarkovsky films</li>
        <li>Rilke, Hesse, Nabakov, Camus, etc</li>
        <li>iterative processes and generative patterns</li>
        <li>balancing free improvisation with intentionality</li>
        <li>tea and espresso</li>
        <li>the Boston Celtics</li>
      </ul>
      <p>Explore:</p>
      <ul>
        <li>
          <Link href="https://www.linkedin.com/in/timothy-g-taylor">
            <a className="font-thin italic">
              LinkedIn
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://github.com/timothy-taylor">
            <a className="font-thin italic">
              Github
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://tgtmusic.bandcamp.com/">
            <a className="font-thin italic">
              Bandcamp
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://open.spotify.com/artist/5pJDAJfpQWFQJVOB16Gx70?si=XUQiPH22QduDUyMmuIjV6g">
            <a className="font-thin italic">
              Spotify
            </a>
          </Link>
        </li>
      </ul>
    </>
  )
}