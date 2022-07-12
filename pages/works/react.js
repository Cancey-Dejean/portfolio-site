import Head from "next/head"
import Link from "next/link"
import Header from "../../components/Header"
import Title from "../../components/subComponents/Title"
import projects from "../../data/reactData"

const ReactProject = () => {
  return (
    <div className="page-wrapper">
      <Head>
        <title>Cancey Dejean | React</title>
        <meta name="description" content="Shopify UI Stores." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className="page">
        <Title title="React" />

        <div className="grid grid-cols-2 max-w-[1500px] w-full gap-x-[3rem] mx-auto text-center">
          {projects.map((project) => (
            <Link href={project.url} key={project.id} passHref>
              <a
                className="bg-white p-[20px]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={project.image}
                  className="w-full"
                  alt={project.name}
                />
                <h4 className="mt-[20px] font-bold uppercase text-black text-[20px]">
                  {project.name}
                </h4>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ReactProject
