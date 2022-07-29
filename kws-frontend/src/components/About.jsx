import { Group, Image, Stack, Text, Title } from "@mantine/core"

function About(props) {
    return (
        <Stack spacing="xl" style={{height: 600}} justify="center" id="About">
            <Title order={1} mx="xl">About Us</Title>
            <Group noWrap spacing="xl" position="apart">
                <Text mx="xl" style={{width: '50%'}}>{props.aboutText}</Text>

                <Image sx={{height: 200, width: 200}} src={props.imgSrc} px="xl"></Image>
            </Group>
        </Stack>
    )
}

export default About