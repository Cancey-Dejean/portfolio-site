import Head from "next/head"
import Header from "../components/Header"
import Socials from "../components/subComponents/Socials"
import { FaShopify, FaReact } from "react-icons/fa"
import { AiFillHtml5, AiOutlineMail } from "react-icons/ai"
import Link from "next/link"
import Title from "../components/subComponents/Title"

const WorksPage = () => {
  return (
    <div
      className="h-full w-full bg-no-repeat bg-cover bg-center flex"
      style={{
        backgroundImage:
          "url(https://cdn.shopify.com/s/files/1/0517/8146/8354/files/paper.jpg?v=1656883730)",
        backgroundColor: "rgba(252, 246, 244,0.5)",
      }}
    >
      <Head>
        <title>Cancey Dejean | Frontend Developer - UI | Works</title>
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
        <div className="grid grid-cols-3 max-w-[1200px] gap-x-[4rem] mx-auto text-center">
          <Link href="">
            <a>
              <FaShopify className="h-[400px] w-[400px]" />
              <h4>Shopify</h4>
            </a>
          </Link>
          <Link href="">
            <a>
              <AiFillHtml5 className="h-[200px] w-[200px] mx-auto" />
              <AiOutlineMail className="h-[200px] w-[200px] mx-auto" />
              <h4>HTML Email</h4>
            </a>
          </Link>
          <Link href="/works/react">
            <a>
              <FaReact className="h-[400px] w-[400px]" />
              <h4>React</h4>
            </a>
          </Link>
        </div>
      </div>

      <Socials />
    </div>
  )
}

export default WorksPage
