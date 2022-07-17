import Link from "next/link"
import { AiFillLinkedin, AiFillYoutube, AiFillGithub } from "react-icons/ai"

const Socials = ({ click }) => {
  return (
    <div className="flex items-center z-[3] fixed bottom-[30px] flex-col left-[50%] transform translate-x-[-50%] sm:bottom-0 sm:left-[2rem]">
      <div className="flex justify-center gap-[1rem] sm:flex-col sm:gap-[.5rem] sm:mb-[5px]">
        <Link href="https://www.linkedin.com/in/cancey-dejean/" passHref>
          <a target="_blank" rel="noopener noreferrer">
            <AiFillLinkedin
              className="w-[30px] h-[30px] text-[#000] lg:text-[#fcf6f4] social-link"
              // style={{
              //   color: click ? "#fcf6f4" : "black",
              // }}
            />
          </a>
        </Link>
        <Link href="https://github.com/Cancey-Dejean" passHref>
          <a target="_blank" rel="noopener noreferrer">
            <AiFillGithub
              className="w-[30px] h-[30px] text-[#000] lg:text-[#fcf6f4] social-link"
              // style={{
              //   color: click ? "#fcf6f4" : "black",
              // }}
            />
          </a>
        </Link>
        <Link
          href="https://www.youtube.com/channel/UCrpJadsiBBgh75Mf410PPdQ"
          passHref
        >
          <a target="_blank" rel="noopener noreferrer">
            <AiFillYoutube
              className="w-[30px] h-[30px] text-[#000] lg:text-[#fcf6f4] social-link"
              // style={{
              //   color: click ? "#fcf6f4" : "black",
              // }}
            />
          </a>
        </Link>
      </div>

      <div
        className="hidden sm:flex w-[2px] h-[2rem] bg-black md:h-[8rem] text-[#000 lg:text-[#fcf6f4] lg:bg-[#fcf6f4] social-bar"
        // style={{
        //   backgroundColor: click ? "white" : "black",
        // }}
      ></div>
    </div>
  )
}

export default Socials
