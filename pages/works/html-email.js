import Head from "next/head"
import Link from "next/link"
import Header from "../../components/Header"
import Title from "../../components/subComponents/Title"
import projects from "../../data/emailData"

const ReactProject = () => {
  return (
    <div className="page-wrapper page-inner">
      <Head>
        <title>Cancey Dejean | React</title>
        <meta name="description" content="React UI Projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className="page">
        <Title title="HTML Email" />

        <div className="grid px-[1rem] max-w-[600px] w-full gap-y-[4rem] lg:gap-x-[4rem] mx-auto text-center lg:grid-cols-2 lg:max-w-[1500px]">
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
