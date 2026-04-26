import './App.css'
import About from './components/About'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'

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
