import { Group, Loader, ScrollArea, Select, Stack } from "@mantine/core"
import { useState, useEffect } from "react"
import getSeminarCards from "../tasks/getSeminarCards"

import SeminarCard from "./SeminarCard"

function SeminarSection(props) {

    const [cardArrayData, setCardArrayData] = useState({ isLoaded: false, cardArray: [] })

    // have to use get effect for on component mount to pull data
    // have to capture both potentials for is loaded return and is not loaded

    //empty dependency array = like class based component did mount
    useEffect(() => {
        getSeminarCards(setCardArrayData)
    }, [])

    return (

        // stack 
        // filter by category on top input with a dropdown
        // then a grid section to contain the cards
        // use loading dots where necessary

        // not doing the filtering logic now that will come later

        <Stack spacing='xl'>
            <Select
                label="Filter by category:"
                placeholder="Category"
                data={[
                    { value: "category1", label: "Category 1" },
                    { value: "category2", label: "Category 2" },
                ]}
                sx={{ width: 300 }}
                m="xl"
            />

            <ScrollArea sx={{width: '100%'}} scrollbarSize={2}>
                <Group noWrap mx='xl'>
                    {!cardArrayData.isLoaded ?
                        <Loader size="xl" variant="dots"/> :
                        cardArrayData.cardArray.map((item) => {
                            // console.log(item)
                            return <SeminarCard key={item.id}
                                id={item.id}
                                imgSrc={"http://localhost:1337" + item.attributes.seminarImage.data.attributes.url}
                                title={item.attributes.seminarTitle}
                                flavorText={item.attributes.seminarFlavorText} />
                        })
                    }
                </Group>
            </ScrollArea>

        </Stack>
    )
}

export default SeminarSection