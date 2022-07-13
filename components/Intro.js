import { motion } from "framer-motion"

const Intro = ({ click }) => {
  return (
    <motion.div className="custom-border absolute z-[5] left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] flex w-[90vw] lg:w-[80vw] xl:w-[80vw] 2xl:w-[70vw]">
      <div className="grid grid-cols-1 lg:grid-cols-2  w-full h-full">
        <div
          className="flex flex-col py-[3rem] px-[1rem] leading-[1.2] justify-center text-center lg:py-[7rem] lg:px-[2rem] lg:text-[#fcf6f4] lg:text-left xl:py-[3rem] xl:p-[4rem]"
          // style={{
          //   color: click ? "#fcf6f4" : "#000",
          //   fontSize: "calc(1em + 1.5vw)",
          // }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h1 className="font-bold text-[2.5rem] sm:text-[3.5rem] xl:text-[5rem] 2xl:text-[5.5rem]">
              Cancey Dejean
            </h1>
            <h3 className="mb-[.5rem] text-[1.8rem] sm:text-[2.5rem] 2xl:text-[3.5rem]">
              Frontend Developer
            </h3>
            <h6 className="font-light text-[1.2rem] lg:text-[#fcf6f4]/60 2xl:text-[1.8rem]">
              with a focus in User Interaction.
            </h6>
          </motion.div>
        </div>

        <motion.div
          className="h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <img
            className="object-cover w-full h-full border-0 hidden lg:block lg:border-2 lg:border-black lg:border-l-0"
            src="https://cdn.shopify.com/s/files/1/0517/8146/8354/files/about.jpg?v=1656872441"
            alt="Cancey Dejean"
          />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Intro
