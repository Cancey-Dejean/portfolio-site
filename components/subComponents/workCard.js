import Image from "next/image"

const WorkCard = ({ text, img }) => {
  return (
    <>
      <img src={img} className="w-full" alt={text} />
      <h4 className="">{text}</h4>
    </>
  )
}

export default WorkCard
