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
    <div>
      <Head>
        <title>Cancey Dejean | Frontend Developer - UI</title>
        <meta
          name="description"
          content="Frontend developer with a passion for UI. I'm a Frontend developer with a background in building beautiful, functional, and responsive web experiences."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header click={click} />
      <DarkSide click={click} />
      <BigLogo click={click} handleClick={handleClick} />
      <Socials click={click} />
      {click ? <Intro click={click} /> : null}
    </div>
  )
}
