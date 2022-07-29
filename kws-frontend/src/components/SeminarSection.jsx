import { Center, Group, Loader, ScrollArea, Select, SimpleGrid, Stack, Title } from "@mantine/core"
import { useState, useEffect } from "react"
import getCategories from "../tasks/getCategories"
import getSeminarCards from "../tasks/getSeminarCards"

import SeminarCard from "./SeminarCard"

function SeminarSection(props) {

    const [cardArrayData, setCardArrayData] = useState({ isLoaded: false, cardArray: [] })
    const [categoriesData, setCategoriesData] = useState({isLoaded: false, categoriesData: []})

    // have to use get effect for on component mount to pull data
    // have to capture both potentials for is loaded return and is not loaded

    //empty dependency array = like class based component did mount
    useEffect(() => {
        getSeminarCards(setCardArrayData)
        getCategories(setCategoriesData)
    }, [])

    return (

        // stack 
        // filter by category on top input with a dropdown
        // then a grid section to contain the cards
        // use loading dots where necessary

        // not doing the filtering logic now that will come later

        <Stack spacing='xl' id="Seminars" p='xl'>

            <Title order={1} mx="xl">The Seminars</Title>

            <Select
                label="Filter by category:"
                placeholder="Category"
                data={
                    categoriesData.categoriesData.map((item) => {
                        return {value: item.attributes.CategoryName, label: item.attributes.CategoryName}
                    })
                }
                sx={{ width: 300 }}
                mx='xl'
                mb="xl"
            />

            <ScrollArea sx={{ height: '80vh', width: '100%' }} scrollbarSize={2}>
                <Center>
                    <SimpleGrid 
                        cols={2} 
                        spacing="xl" 
                        mx="xl" 
                        breakpoints={[
                            {maxWidth: 'lg', cols: 1}
                        ]}
                    >
                        {!cardArrayData.isLoaded ?
                            <Loader size="xl" variant="dots" /> :
                            cardArrayData.cardArray.map((item) => {
                                // console.log(item)
                                return <SeminarCard key={item.id}
                                    id={item.id}
                                    imgSrc={"http://localhost:1337" + item.attributes.seminarImage.data.attributes.url}
                                    title={item.attributes.seminarTitle}
                                    flavorText={item.attributes.seminarFlavorText} 
                                    category={item.attributes.seminar_category.data.attributes.CategoryName}
                                    />
                            })
                        }
                    </SimpleGrid>
                </Center>

            </ScrollArea>

        </Stack>
    )
}

export default SeminarSection