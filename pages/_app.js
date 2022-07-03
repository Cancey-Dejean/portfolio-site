import Header from "../components/Header"
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  return (
    <main className="w-screen h-screen relative overflow-hidden p-[2rem]">
      <Header />
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
