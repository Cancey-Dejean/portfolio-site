import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  return (
    <main className="w-screen h-screen relative overflow-hidden">
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
