import Link from "next/link"

const Logo = ({ click }) => {
  return (
    <Link href="/">
      <a>
        <div
          className="font-logo inline-block text-[3rem] relative z-[2] transition-colors duration-[.5s] ease-in-out text-[#fcf6f4]"
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
