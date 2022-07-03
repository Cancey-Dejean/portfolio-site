import Image from "next/image"

const BigLogo = ({ handleClick, click }) => {
  return (
    <>
      <button
        type="button"
        className="absolute z-[2] translate translate-x-[-50%] translate-y-[-50%] flex flex-col items-center justify-center transition-all duration-[1s] ease-in-out"
        onClick={() => handleClick()}
        style={{
          width: click ? 120 : 200,
          height: click ? 120 : 200,
          top: click ? "85%" : "50%",
          left: click ? "92%" : "50%",
        }}
      >
        <Image
          src="https://cdn.shopify.com/s/files/1/0517/8146/8354/files/my-logo.png?v=1656862677"
          layout="fill"
          priority={true}
        />
        <span
          className="relative transition-all duration-[1s] ease-in-out"
          style={{
            display: click ? "none" : "inline-block",
            top: click ? "5rem" : "8rem",
          }}
        >
          Click Here
        </span>
      </button>
    </>
  )
}

export default BigLogo
