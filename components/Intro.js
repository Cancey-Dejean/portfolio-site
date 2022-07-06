import { motion } from "framer-motion"
import Image from "next/image"
import { About } from "../components/subComponents/images"

const Intro = ({ click }) => {
  return (
    <motion.div
      className="absolute z-[5] left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] w-[55vw] flex"
      style={{
        background:
          "linear-gradient(to right, rgb(252, 246, 244) 50%, rgb(0, 0, 0) 50%) center bottom / 100% 2px no-repeat, linear-gradient(to right, rgb(252, 246, 244) 50%, rgb(0, 0, 0) 50%) center top",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 2px",
        borderLeft: "2px solid #fcf6f4",
        borderRight: "2px solid #000",
      }}
    >
      <div className="grid grid-cols-2 w-full h-full">
        <div
          className="flex flex-col p-[2rem] leading-[1.2] justify-center"
          style={{
            color: click ? "#fcf6f4" : "#000",
            fontSize: "calc(1em + 1.5vw)",
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h1 className="font-bold text-[5rem]">Cancey Dejean</h1>
            <h3 className="mb-[1rem] text-[3rem]">Frontend Development</h3>
            <h6 className="text-[#fcf6f4]/60 text-[2rem] font-light">
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
          <Image
            src={About}
            className="object-cover w-full h-full"
            layout="responsive"
            alt="About Image"
          />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Intro
