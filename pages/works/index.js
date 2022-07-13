import Link from "next/link"
import Head from "next/head"
import Header from "../../components/Header"
import Socials from "../../components/subComponents/Socials"
import Title from "../../components/subComponents/Title"
import { FaReact, FaHtml5 } from "react-icons/fa"

const WorksPage = () => {
  return (
    <div className="page-wrapper page-inner">
      <Head>
        <title>Cancey Dejean | Frontend Developer - UI | Works</title>
        <meta name="description" content="Project Types" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className="page">
        <Title title="Works" />

        <div className="grid px-[1rem] max-w-[1500px] w-full gap-y-[4rem] lg:gap-x-[4rem] mx-auto text-center lg:grid-cols-2">
          <Link href="/works/react">
            <a className="border border-black p-[30px] w-full max-w-[400px] my-0 mx-auto lg:max-w-full">
              <FaReact className="h-[100px] w-[100px] lg:h-[300px] lg:w-[300px] mx-auto" />
              <h4 className="mt-[30px]">React</h4>
            </a>
          </Link>

          <Link href="/works/html-email">
            <a className="border border-black p-[30px] w-full max-w-[400px] my-0 mx-auto lg:max-w-full">
              <FaHtml5 className="h-[100px] w-[100px] lg:h-[300px] lg:w-[300px] mx-auto" />
              <h4 className="mt-[30px]">HTML Email</h4>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default WorksPage
