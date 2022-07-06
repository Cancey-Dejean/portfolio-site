import Head from "next/head"
import Header from "../../components/Header"
import Title from "../../components/subComponents/Title"
import WorkCard from "../../components/subComponents/workCard"

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
        <Title title="Shopify" />

        <div className="grid grid-cols-3 max-w-[1300px] w-full gap-x-[4rem] mx-auto text-center">
          <WorkCard text="Babe" url="/" />
        </div>
      </div>
    </div>
  )
}

export default ReactProject
