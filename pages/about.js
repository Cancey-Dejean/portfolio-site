import Head from "next/head"
import Link from "next/link"
import Header from "../components/Header"
import Title from "../components/subComponents/Title"

const About = () => {
  return (
    <div className="page-wrapper page-inner">
      <Head>
        <title>Cancey Dejean | Frontend Developer - UI | About</title>
        <meta name="description" content="Project Types" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className="page">
        <Title title="Works" />

        <div className="grid px-[1rem] max-w-[1300px] w-full gap-y-[4rem] lg:gap-x-[4rem] mx-auto lg:grid-cols-2">
          <div>Text</div>

          <div>Picture</div>
        </div>
      </div>
    </div>
  )
}

export default About
