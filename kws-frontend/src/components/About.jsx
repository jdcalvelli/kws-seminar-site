import { Group, Image, MediaQuery, Stack, Text, Title } from "@mantine/core"

function About(props) {
    return (
        <Stack spacing="xl" justify="center" id="About" p='xl' m='xl'>
            <Title order={1} mx="xl">About Us</Title>

            <MediaQuery
                smallerThan='xl'
                styles={{
                    flexDirection: "column-reverse"
                }}
            >
                <Group noWrap spacing="xl" position="center" align='center'>
                    <Text mx="xl" style={{ width: '50%' }}>{props.aboutText}</Text>

                    <Image sx={{ height: 200, width: 200 }} src={props.imgSrc} px="xl"></Image>
                </Group>
            </MediaQuery>
        </Stack>
    )
}

export default About