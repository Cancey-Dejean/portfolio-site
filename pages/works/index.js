import Link from "next/link"
import Head from "next/head"
import Header from "../../components/Header"
import Socials from "../../components/subComponents/Socials"
import Title from "../../components/subComponents/Title"
import WorkCard from "../../components/subComponents/workCard"
import projects from "../../data/emailData"

const WorksPage = () => {
  return (
    <div className="page-wrapper">
      <Head>
        <title>Cancey Dejean | Frontend Developer - UI | Works</title>
        <meta name="description" content="Email Projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className="page">
        <Title title="HTML Email" />

        <div className="grid grid-cols-3 max-w-[1300px] w-full gap-x-[4rem] mx-auto text-center">
          {projects.map((project) => (
            <Link href={project.url} key={project.id}>
              <a>
                <WorkCard text={project.name} img={project.image} />
              </a>
            </Link>
          ))}
        </div>
      </div>

      <Socials />
    </div>
  )
}

export default WorksPage
