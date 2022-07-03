import Logo from "./subComponents/Logo"
import PowerButton from "./subComponents/PowerButton"
import Link from "next/link"

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-[3rem]">
        <Logo />

        <div className="flex items-center gap-x-5">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/">
            <a>Link</a>
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-x-5">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/">
          <a>Link</a>
        </Link>
      </div>

      <PowerButton />
    </header>
  )
}

export default Header
