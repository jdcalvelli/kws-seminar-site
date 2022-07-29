import Nav from "./components/Nav"
import Hero from "./components/Hero"
import SeminarSection from "./components/SeminarSection"
import About from "./components/About"
import Contact from "./components/Contact"
import { Center, Loader, MantineProvider } from "@mantine/core"
import Footer from "./components/Footer"
import { useEffect, useState } from "react"
import getHomePage from "./tasks/getHomePage"

function Home(props) {

    const [homePageData, setHomePageData] = useState({ isLoaded: false, homePageData: {} })

    useEffect(()=>{
        getHomePage(setHomePageData)
    }, [])

    return (
        <MantineProvider theme={{ primaryColor: 'orange' }}>

            {!homePageData.isLoaded ?
                <Center><Loader size='xl' variant="dots"></Loader></Center> :
                <div className="App">
                    <Nav />
                    <Hero title={homePageData.homePageData.attributes.title} subtitle={homePageData.homePageData.attributes.subtitle}/>
                    <SeminarSection />
                    <About 
                        aboutText={homePageData.homePageData.attributes.aboutUs} 
                        imgSrc={"http://localhost:1337" + homePageData.homePageData.attributes.riscImage.data.attributes.url}
                    />
                    <Contact 
                        contactEmail={homePageData.homePageData.attributes.contactEmail}/>
                    <Footer />
                </div>
            }
        </MantineProvider>
    )
}

export default Home