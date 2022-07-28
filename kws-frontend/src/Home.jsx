import Nav from "./components/Nav"
import Hero from "./components/Hero"
import SeminarSection from "./components/SeminarSection"
import About from "./components/About"
import Contact from "./components/Contact"
import { MantineProvider } from "@mantine/core"
import Footer from "./components/Footer"

function Home(props) {
    return (
        <MantineProvider theme={{primaryColor: 'orange'}}>
            <div className="App">
                <Nav />
                <Hero />
                <SeminarSection />
                <About />
                <Contact />
                <Footer />
            </div>
        </MantineProvider>
    )
}

export default Home