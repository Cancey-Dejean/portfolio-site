import Link from "next/link"
import Head from "next/head"
import Header from "../../components/Header"
import Socials from "../../components/subComponents/Socials"
import Title from "../../components/subComponents/Title"
import types from "../../data/typeData"
import { FaReact, FaHtml5 } from "react-icons/fa"
import WorkCard from "../../components/subComponents/WorkCard"

const WorksPage = () => {
  return (
    <div className="page-wrapper page-inner">
      <Head>
        <title>Cancey Dejean | Frontend Developer - UI | Works</title>
        <meta name="description" content="Email Projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className="page">
        <Title title="Works" />

        <div className="w-full gap-y-[4rem] mx-auto text-center lg:gap-x-[4rem]">
          {types.map((type, index) => (
            <Link href="" key={index}>
              <a>
                <WorkCard text={type.name} />
              </a>
            </Link>
          ))}

          {/* <Link href="/works/react">
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
          </Link> */}
        </div>
      </div>

      <Socials />
    </div>
  )
}

export default WorksPage
