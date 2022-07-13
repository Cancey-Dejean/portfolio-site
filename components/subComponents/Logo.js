import Link from "next/link"

const Logo = ({ click, pageColor }) => {
  return (
    <Link href="/">
      <a>
        <div
          className={`font-logo text-black inline-block text-[2rem] relative z-[2] transition-colors duration-[.5s] ease-in-out lg:text-[3rem] lg:text-[#fcf6f4] ${pageColor}`}
          // style={{
          //   color: click ? "#fcf6f4" : "#000",
          // }}
        >
          CD
        </div>
      </a>
    </Link>
  )
}

export default Logo
