export default function Layout({ children }) {
  return (
    <>
      {/* Main Content */}
      <main className="w-screen h-screen relative overflow-hidden">
        {children}
      </main>
    </>
  )
}
