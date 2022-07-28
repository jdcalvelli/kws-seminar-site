import { Anchor, Center, Stack, Text, Title } from "@mantine/core"

function Contact(props) {
    return (

        <Stack spacing='xl' style={{height: 200}} id="Contact">
            <Title mx="xl" order={1}>Contact Us</Title>

            <Center style={{height: '100%'}}>
                <Text size="xl" style={{letterSpacing: 2, fontStyle: 'italic'}}> 
                    <Anchor href="mailto:centerforrisc@gmail.com">centerforrisc@gmail.com</Anchor>
                </Text>
            </Center>

        </Stack>

    )
}

export default Contact