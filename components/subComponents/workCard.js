import Image from "next/image"

const WorkCard = ({ text, img }) => {
  return (
    <div>
      {/* <img src={img} className="w-full" alt={text} />
      <h4 className="">{text}</h4> */}

      <h4 className="">{text}</h4>
    </div>
  )
}

export default WorkCard
