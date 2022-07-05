import Head from "next/head"
import Header from "../../components/Header"

const ShopifyProject = () => {
  return (
    <div className="page-wrapper">
      <Head>
        <title>Cancey Dejean | Shopify</title>
        <meta
          name="description"
          content="Frontend developer with a passion for UI. I'm a Frontend developer with a background in building beautiful, functional, and responsive web experiences."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="page">
        <div className="grid grid-cols-3 max-w-[1300px] w-full gap-x-[4rem] mx-auto text-center">
          <h1>Shopify</h1>
        </div>
      </div>
    </div>
  )
}

export default ShopifyProject
