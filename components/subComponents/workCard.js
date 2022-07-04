import Link from "next/link"

const WorkCard = ({ name, url }) => {
  return (
    <>
      <Link href={url}>
        <a>
          <FaShopify className="object-cover h-[400px] w-[400px] rounded-lg" />
          <h1>{name}</h1>
        </a>
      </Link>
    </>
  )
}

export default WorkCard
