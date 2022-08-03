import { Button, Center, Group, Loader, NativeSelect, ScrollArea, Select, SimpleGrid, Stack, Title } from "@mantine/core"
import { useState, useEffect } from "react"
import getCategories from "../tasks/getCategories"
import getSeminarCards from "../tasks/getSeminarCards"
import getCardsByFilter from "../tasks/getCardsByFilter"

import SeminarCard from "./SeminarCard"

function SeminarSection(props) {

    const [cardArrayData, setCardArrayData] = useState({ isLoaded: false, cardArray: [] })
    const [categoriesData, setCategoriesData] = useState({ isLoaded: false, categoriesData: [] })

    const [currentCategory, setCurrentCategory] = useState("Economics")

    // have to use get effect for on component mount to pull data
    // have to capture both potentials for is loaded return and is not loaded

    //empty dependency array = like class based component did mount
    useEffect(() => {
        getSeminarCards(setCardArrayData)
        getCategories(setCategoriesData)
    }, [])

    return (

        <Stack spacing='xl' id="Seminars" p='xl'>

            <Title order={1} mx="xl">The Seminars</Title>

            <Group>
                <NativeSelect
                    label="Filter by category:"
                    placeholder="Category"
                    data={
                        categoriesData.categoriesData.map((item) => {
                            return { value: item.attributes.CategoryName, label: item.attributes.CategoryName }
                        })
                    }
                    sx={{ width: 300 }}
                    mx='xl'
                    mb="xl"
                    onChange={(event)=>{
                        setCurrentCategory(event.currentTarget.value)
                    }}
                /> 

                <Button
                    onClick={async () => {
                        let result = await getCardsByFilter(currentCategory)
                        console.log(result)
                        setCardArrayData({isLoaded: true, cardArray: result})
                        }}
                    >
                    Filter
                </Button>

                <Button
                    onClick={() => {
                        getSeminarCards(setCardArrayData)
                        }}
                    >
                    Show All
                </Button>

            </Group>

            {/* have to filter through state and change to new state */}



            <ScrollArea sx={{ height: '80vh', width: '100%' }} scrollbarSize={2}>
                <Center>
                    <SimpleGrid
                        cols={2}
                        spacing="xl"
                        mx="xl"
                        breakpoints={[
                            { maxWidth: 'lg', cols: 1 }
                        ]}
                    >
                        {!cardArrayData.isLoaded ?
                            <Loader size="xl" variant="dots" /> :
                            cardArrayData.cardArray.map((item) => {
                                // console.log(item)
                                return <SeminarCard key={item.id}
                                    id={item.id}
                                    imgSrc={"https://kws-seminar-api.com" + item.attributes.seminarImage.data.attributes.url}
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