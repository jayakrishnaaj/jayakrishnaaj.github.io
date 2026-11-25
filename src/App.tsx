import Hero from './components/Hero'
import Nav from './components/Nav'
import { About, Contact, Experience, Footer, Projects, Skills } from './components/Sections'

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
