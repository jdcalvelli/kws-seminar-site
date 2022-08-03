import { Link, useParams } from "react-router-dom"
import { Link as LinkRS } from 'react-scroll'

import { Anchor, Button, Group, Header, Title } from '@mantine/core'



function Nav(props) {

    let { id } = useParams()

    console.log(id)

    return (

        <Header height={80}>
            <Group align="center" position="apart" sx={{ height: '100%' }} px="xl">
                <Title order={1}><Anchor component={Link} to="/">kws</Anchor></Title>

                {id === undefined ?
                    <Group spacing="xl">
                        <Title order={3} sx={{":hover": {cursor: "pointer"}}}><LinkRS to="Seminars" spy={true} smooth={true} offset={160} duration={500}>Seminars</LinkRS></Title>
                        <Title order={3} sx={{":hover": {cursor: "pointer"}}}><LinkRS to="About" spy={true} smooth={true} offset={0} duration={500}>About</LinkRS></Title>
                        <Button radius="xl"><LinkRS to="Contact" spy={true} smooth={true} offset={0} duration={500}>Contact</LinkRS></Button>
                    </Group> :
                    null
                }

            </Group>
        </Header>
    )

}

export default Nav