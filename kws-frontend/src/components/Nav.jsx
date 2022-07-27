import { Link } from "react-router-dom"

import { Anchor, Button, Group, Header, Title } from '@mantine/core'

function Nav(props) {

    return (

        <Header height={80}>
            <Group align="center" position="apart" sx={{height: '100%'}} px="xl">
                <Title order={1}><Anchor component={Link} to="/">kws</Anchor></Title>

                <Group spacing="xl">
                    <Title order={3}>seminars</Title>
                    <Title order={3}>about</Title>
                    <Button radius="xl">contact</Button>
                </Group>
            </Group>
        </Header>
    )

}

export default Nav