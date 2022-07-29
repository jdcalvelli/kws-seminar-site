import { Center, Stack, Title } from "@mantine/core"

function Hero(props) {
    return (
        <Center sx={{height: "600px"}}>
            <Stack align="center" spacing="xl">
                <Title order={1}>{props.title}</Title>
                <Title order={3}>{props.subtitle}</Title>
            </Stack>
        </Center>
    )
}

export default Hero