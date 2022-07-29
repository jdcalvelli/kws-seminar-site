import { Badge, Button, Card, Group, Image, Text } from "@mantine/core"
import { Link } from "react-router-dom"

function SeminarCard(props) {
    return (
        
        <Card shadow="sm" p="lg" radius="md" withBorder style={{width: '90%'}}>
            <Card.Section mb='md'>
                <Image 
                    src={props.imgSrc}
                    height={160}
                    alt="Seminar Image"
                />
            </Card.Section>

            <Group position="apart" noWrap>
                <Text weight={500}>{props.title}</Text>
                <Badge>category</Badge>
            </Group>

            <Text size="sm" color="dimmed">
                {props.flavorText}
            </Text>

            <Button variant="light" fullWidth radius="md" mt='md' component={Link} to={`/seminars/${props.id}`}>
                See the seminar!
            </Button>
        </Card>
    )
}

export default SeminarCard