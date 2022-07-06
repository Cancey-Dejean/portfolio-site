const WorkCard = ({ text, img }) => {
  return (
    <>
      <img src={img} className="w-full" alt="" />
      <h1>{text}</h1>
    </>
  )
}

export default WorkCard
