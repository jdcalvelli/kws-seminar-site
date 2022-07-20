import Nav from "./components/Nav"
import Hero from "./components/Hero"
import SeminarSection from "./components/SeminarSection"
import About from "./components/About"
import Contact from "./components/Contact"

function App(props) {
    return (
        <div className="App">
            <Nav />
            <Hero />
            <SeminarSection />
            <About />
            <Contact />
        </div>
    )
}

export default App