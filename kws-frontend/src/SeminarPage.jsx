import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import getSeminar from "./tasks/getSeminar"

import Nav from "./components/Nav"
import Footer from "./components/Footer"
import { Anchor, Button, Group, Loader, MantineProvider, Stack, Title } from "@mantine/core"

function SeminarPage(props) {
    const [seminarData, setSeminarData] = useState({ isLoaded: false, seminarData: {} })

    let { id } = useParams()

    useEffect(() => {
        getSeminar(id, setSeminarData)
    }, [])

    return (
        <MantineProvider theme={{primaryColor:'orange'}}>
            <div className="seminarPage">
                <Nav />

                {!seminarData.isLoaded ?
                    <Loader size="xl" variant="dots" /> :
                    <Stack>
                        <Title order={1} m='xl'>{seminarData.seminarData.attributes.seminarTitle}</Title>
                        <iframe src={seminarData.seminarData.attributes.embedURL} frameBorder="0" style={{ padding: 36, height: '80vh' }}></iframe>
                        <Group p='xl' position="center">
                            <Anchor href={seminarData.seminarData.attributes.requiredReadingURL}><Button size="xl">required readings</Button></Anchor>
                            <Anchor href={seminarData.seminarData.attributes.optionalReadingURL}><Button size="xl">optional readings</Button></Anchor>
                        </Group>
                    </Stack>
                }

                <Footer style={{ height: 'calc(100% - 80px)' }} />
            </div>
        </MantineProvider>

    )
}

export default SeminarPage