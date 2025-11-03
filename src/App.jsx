import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-black" style={{ fontFamily: 'Poppins, sans-serif' }}>
      {/* Font import */}
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap"
        rel="stylesheet"
      />
      <NavBar />
      <main className="flex flex-col gap-6">
        <Hero />
        <Features />
        <Footer />
      </main>
    </div>
  )
}

export default App
