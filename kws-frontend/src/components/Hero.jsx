import { Center, Stack, Text, Title } from "@mantine/core"

function Hero(props) {
    return (
        <Center sx={{height: "90vh"}}>
            <Stack align="center" spacing="xl">
                <Title order={1}>{props.title}</Title>
                <Text size="lg" sx={{maxWidth: 600, textAlign: 'center'}}>{props.subtitle}</Text>
            </Stack>
        </Center>
    )
}

export default Hero