import Header from './components/Header'
import Hero from './components/Hero'
import Products from './components/Products'
import Feedback from './components/Feedback'
import Location from './components/Location'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      <Header />
      <main>
        <Hero />
        <Products />
        <Feedback />
        <Location />
      </main>
      <Footer />
    </div>
  )
}

export default App
