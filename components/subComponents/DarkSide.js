const DarkSide = ({ click }) => {
  return (
    <div
      className="absolute z-[1] transition-all duration-[.5s] ease h-[50%] bg-black hidden lg:block md:top-0 md:left-0 md:w-full md:h-[50%]  lg:top-0 lg:right-[50%] lg:w-[50%] lg:h-[100%]"
      // style={{
      //   height: click ? "100%" : "0%",
      // }}
    ></div>
  )
}

export default DarkSide
