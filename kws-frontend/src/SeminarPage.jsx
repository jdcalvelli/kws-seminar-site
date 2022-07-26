import { useParams } from "react-router-dom"

function SeminarPage(props) {
    let { id } = useParams()
    
    return (
        <h1> this page should have the same number as the route here: {id}</h1>
    )
}

export default SeminarPage