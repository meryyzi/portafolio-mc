import './App.css'
import About from './sections/About'
import Experience from './sections/Experience'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './sections/Projects'
import Skills from './sections/Skills'

function App() {
  return (
    <>
      <section className=''>
        <Header />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience  />
        <Footer />

      </section>
    </>
  )
}

export default App
