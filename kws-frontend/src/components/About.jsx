import { Group, Image, Stack, Text, Title } from "@mantine/core"

function About(props) {
    return (
        <Stack spacing="xl" style={{height: 600}} justify="center">
            <Title order={1} mx="xl">About Us</Title>
            <Group noWrap spacing="xl">
                <Text mx="xl" style={{width: '50%'}}> The Center for RISC is the brainchild of Steven Levitt, 
                professor of economics at the University of Chicago and co-author of Freakonomics. 
                We are not an academic group or research lab. Instead, we investigate today’s 
                ocial issues by combining unconventional perspectives with empirical data, 
                generating radical solutions with real-world relevance. We then test and scale those solutions 
                through a mix of partnerships with academics, nonprofits, government agencies, 
                international organizations, and private corporations.</Text>

                <Text mx="xl" style={{width: '50%'}}> THIS IS WHERE THE RISC IMAGE WILL GO</Text>
            </Group>
        </Stack>
    )
}

export default About