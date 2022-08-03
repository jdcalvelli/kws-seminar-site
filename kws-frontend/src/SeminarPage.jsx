import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import getSeminar from "./tasks/getSeminar"
import getHomePage from "./tasks/getHomePage"

import Nav from "./components/Nav"
import Footer from "./components/Footer"
import { Anchor, Button, Center, Group, Loader, MantineProvider, Stack, Title } from "@mantine/core"

function SeminarPage(props) {

    const [homePageData, setHomePageData] = useState({ isLoaded: false, homePageData: {} })

    const [seminarData, setSeminarData] = useState({ isLoaded: false, seminarData: {} })

    let { id } = useParams()

    useEffect(() => {
        getSeminar(id, setSeminarData)
        getHomePage(setHomePageData)
    }, [])

    return (
        <MantineProvider theme={{ primaryColor: 'orange' }}>

            {!homePageData.isLoaded ?
                <Center><Loader size='xl' variant="dots"></Loader></Center> :
                <div className="seminarPage">
                    <Nav
                        imgSrc={"https://kws-seminar-api.com" + homePageData.homePageData.attributes.riscImage.data.attributes.url}
                    />

                    {!seminarData.isLoaded ?
                        <Loader size="xl" variant="dots" /> :
                        <Stack>
                            <Title order={1} m='xl'>{seminarData.seminarData.attributes.seminarTitle}</Title>
                            <iframe src={seminarData.seminarData.attributes.embedURL} frameBorder="0" style={{ padding: 36, height: '80vh' }}></iframe>
                            <Group p='xl' position="center">
                                <Button size="xl" onClick={() => { window.location.replace(seminarData.seminarData.attributes.teacherSlideshowURL) }}>Teacher Slideshow</Button>
                                <Button size="xl" onClick={() => { window.location.replace(seminarData.seminarData.attributes.requiredReadingURL) }}>Required Readings</Button>
                                <Button size="xl" onClick={() => { window.location.replace(seminarData.seminarData.attributes.optionalReadingURL) }}>Optional Readings</Button>
                            </Group>
                        </Stack>
                    }

                    <Footer style={{ height: 'calc(100% - 80px)' }} />
                </div>
            }
        </MantineProvider>

    )
}

export default SeminarPage