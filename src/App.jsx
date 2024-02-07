import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import About from './sections/About'
import Projects from './sections/Projects'
import Skills from './sections/Skills'

function App() {
  

  return (
    <div className="bg-gradient-to-r from-sky-700 to-indigo-400">
      <NavBar />
      <Header />
      <h1></h1>
      <About />
      <Skills />
      <section id="projects">
      <h1 className="mb-14 mt-20">Projects</h1>
      </section>
      <Projects />
      <Footer />
    </div>
  )
}

export default App
