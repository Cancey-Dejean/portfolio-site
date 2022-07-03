const DarkSide = ({ click }) => {
  return (
    <div
      className="absolute top-0 right-[50%] w-[50%] z-[1] transition-all duration-[.5s] ease bg-black"
      style={{
        height: click ? "100%" : "0%",
      }}
    ></div>
  )
}

export default DarkSide
