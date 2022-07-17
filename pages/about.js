import Head from "next/head"
import Header from "../components/Header"
import Title from "../components/subComponents/Title"
import {
  FaReact,
  FaHtml5,
  FaSass,
  FaWordpress,
  FaFigma,
  FaShopify,
} from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io5"
import { AiOutlineMail } from "react-icons/ai"
import { SiWebflow } from "react-icons/si"

const About = () => {
  return (
    <div className="page-wrapper page-inner">
      <Head>
        <title>
          Cancey Dejean | Frontend Developer - User Interface Design | About
        </title>
        <meta name="description" content="Project Types" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className="page">
        <Title title="About" />

        <div className="grid px-[1rem] max-w-[600px] mx-auto items-center text-center w-full gap-y-[2rem] lg:max-w-[1300px] lg:text-left lg:gap-y-[4rem] lg:gap-x-[4rem] lg:grid-cols-2">
          <div className="order-2">
            <p className="mb-4">
              My name is Cancey Dejean and I am a Frontend UI Developer. I have
              worked in many different technology stacks and have worked with
              Design, Email, Product Management and Backend developer teams to
              create digital experiences.
            </p>

            <div className="flex gap-3 flex-wrap justify-center lg:justify-start">
              <FaShopify className="h-[50px] w-[50px] mt-6" />
              <FaReact className="h-[50px] w-[50px] mt-6" />
              <FaHtml5 className="h-[50px] w-[50px] mt-6" />
              <FaSass className="h-[50px] w-[50px] mt-6" />
              <IoLogoJavascript className="h-[50px] w-[50px] mt-6" />
              <FaWordpress className="h-[50px] w-[50px] mt-6" />
              <SiWebflow className="h-[50px] w-[50px] mt-6" />
              <FaFigma className="h-[50px] w-[50px] mt-6" />
              <AiOutlineMail className="h-[50px] w-[50px] mt-6" />
            </div>
          </div>

          <div>
            <img
              className=""
              src="https://cdn.shopify.com/s/files/1/0517/8146/8354/files/about.jpg?v=1656872441"
              alt="Cancey Dejean"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
