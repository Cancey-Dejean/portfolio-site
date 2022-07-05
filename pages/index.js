import Head from "next/head"
import { useState } from "react"
import Header from "../components/Header"
import Intro from "../components/Intro"
import BigLogo from "../components/subComponents/BigLogo"
import DarkSide from "../components/subComponents/DarkSide"
import Socials from "../components/subComponents/Socials"

export default function Home() {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)

  return (
    <div
      className="h-full w-full bg-no-repeat bg-cover bg-center flex"
      style={{
        backgroundImage:
          "url(https://cdn.shopify.com/s/files/1/0517/8146/8354/files/paper.jpg?v=1656883730)",
      }}
    >
      <Head>
        <title>Cancey Dejean | Frontend Developer - UI</title>
        <meta
          name="description"
          content="Frontend developer with a passion for UI. I'm a Frontend developer with a background in building beautiful, functional, and responsive web experiences."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header click={click} />
      <div className="page">
        <DarkSide click={click} />
        <BigLogo click={click} handleClick={handleClick} />
        <Socials click={click} />
        {click ? <Intro click={click} /> : null}
      </div>
    </div>
  )
}
