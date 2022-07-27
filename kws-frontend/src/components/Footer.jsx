import { Divider, Group, Stack, Text } from "@mantine/core"

function Footer(props) {

    return (
        <Stack style={{height: 80}}>
            <Divider mb='xl' />
            <Text size='xs' color="dimmed" align="center"> Center for RISC 2022</Text>
        </Stack>

    )

}

export default Footer