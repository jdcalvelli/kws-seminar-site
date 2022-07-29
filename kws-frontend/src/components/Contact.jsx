import { Anchor, Center, Stack, Text, Title } from "@mantine/core"

function Contact(props) {
    return (

        <Stack p='xl' spacing='xl' id="Contact" m='xl'>
            <Title mx="xl" order={1}>Contact Us</Title>

            <Center style={{height: '100%'}}>
                <Text size="xl" style={{letterSpacing: 2, fontStyle: 'italic'}}> 
                    <Anchor href={`mailto:${props.contactEmail}`}>{props.contactEmail}</Anchor>
                </Text>
            </Center>

        </Stack>

    )
}

export default Contact