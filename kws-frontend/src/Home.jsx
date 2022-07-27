import Nav from "./components/Nav"
import Hero from "./components/Hero"
import SeminarSection from "./components/SeminarSection"
import About from "./components/About"
import Contact from "./components/Contact"
import { MantineProvider } from "@mantine/core"

function Home(props) {
    return (
        <MantineProvider>
            <div className="App">
                <Nav />
                <Hero />
                <SeminarSection />
                <About />
                <Contact />
            </div>
        </MantineProvider>
    )
}

export default Home