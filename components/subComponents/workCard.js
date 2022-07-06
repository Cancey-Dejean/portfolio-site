const WorkCard = ({ text, img }) => {
  return (
    <>
      <img src={img} className="h-[200px]" alt="" />
      <h1>{text}</h1>
    </>
  )
}

export default WorkCard
