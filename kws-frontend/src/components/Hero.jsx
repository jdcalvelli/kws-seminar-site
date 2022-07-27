import { Center, Stack, Title } from "@mantine/core"

function Hero(props) {
    return (
        <Center sx={{height: "600px"}}>
            <Stack align="center" spacing="xl">
                <Title order={1}>this is seminar</Title>
                <Title order={3}>this is a subtitle for the site</Title>
            </Stack>
        </Center>
    )
}

export default Hero