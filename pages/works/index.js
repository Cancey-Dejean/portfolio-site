import Head from "next/head"
import Header from "../../components/Header"
import Socials from "../../components/subComponents/Socials"
import { FaShopify, FaReact } from "react-icons/fa"
import { AiFillHtml5 } from "react-icons/ai"
import Link from "next/link"
import Title from "../../components/subComponents/Title"

const WorksPage = () => {
  return (
    <div className="page-wrapper">
      <Head>
        <title>Cancey Dejean | Frontend Developer - UI | Works Overview</title>
        <meta
          name="description"
          content="Frontend developer with a passion for UI. I'm a Frontend developer with a background in building beautiful, functional, and responsive web experiences."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div
        className="page relative flex flex-col items-center"
        style={{
          backgroundColor: "rgba(252, 246, 244,0.7)",
        }}
      >
        <Title title="Select Platform:" />

        <div className="grid grid-cols-3 max-w-[1300px] w-full gap-x-[4rem] mx-auto text-center">
          <Link href="/works/shopify">
            <a className="border border-black inline-block p-[2rem]">
              <FaShopify className="h-[200px] w-[200px] mx-auto" />
              <h4 className="mt-[1.5rem]">Shopify</h4>
            </a>
          </Link>
          <Link href="/works/html-email">
            <a className="border border-black inline-block p-[2rem]">
              <AiFillHtml5 className="h-[200px] w-[200px] mx-auto" />
              <h4 className="mt-[1.5rem]">HTML Email</h4>
            </a>
          </Link>
          <Link href="/works/react">
            <a className="border border-black inline-block p-[2rem]">
              <FaReact className="h-[200px] w-[200px] mx-auto" />
              <h4 className="mt-[1.5rem]">React</h4>
            </a>
          </Link>
        </div>
      </div>

      <Socials />
    </div>
  )
}

export default WorksPage
