import Logo from "./subComponents/Logo"
import PowerButton from "./subComponents/PowerButton"
import Link from "next/link"

const Header = ({ click }) => {
  return (
    <header className="fixed z-[4] top-0 left-0 p-[2rem] w-full flex items-center justify-between">
      <div className="flex items-center gap-[3rem]">
        <Logo click={click} />

        <div className="flex items-center gap-x-5">
          <Link href="/works">
            <a
              style={{
                color: click ? "#fcf6f4" : "#000",
              }}
            >
              Works
            </a>
          </Link>
          <Link href="/">
            <a
              style={{
                color: click ? "#fcf6f4" : "#000",
              }}
            >
              Skills
            </a>
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-x-5">
        <Link href="/">
          <a>About</a>
        </Link>
        <Link href="/">
          <a>Experience</a>
        </Link>
      </div>

      <PowerButton />
    </header>
  )
}

export default Header
