import Link from "next/link"
import Head from "next/head"
import Header from "../../components/Header"
import Socials from "../../components/subComponents/Socials"
import Title from "../../components/subComponents/Title"
import { FaReact, FaHtml5 } from "react-icons/fa"

const WorksPage = () => {
  return (
    <div className="page-wrapper">
      <Head>
        <title>Cancey Dejean | Frontend Developer - UI | Works</title>
        <meta name="description" content="Email Projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className="page">
        <Title title="Works" />

        <div className="grid grid-cols-2 max-w-[1300px] w-full gap-x-[4rem] mx-auto text-center">
          <Link href="/works/react">
            <a className="border border-black p-[30px]">
              <FaReact className="h-[300px] w-[300px] mx-auto" />
              <h4 className="mt-[30px]">React</h4>
            </a>
          </Link>

          <Link href="/works/html-email">
            <a className="border border-black p-[30px]">
              <FaHtml5 className="h-[300px] w-[300px] mx-auto" />
              <h4 className="mt-[30px]">HTML Email</h4>
            </a>
          </Link>
        </div>
      </div>

      <Socials />
    </div>
  )
}

export default WorksPage
