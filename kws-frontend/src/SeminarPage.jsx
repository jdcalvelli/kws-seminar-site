import { useParams } from "react-router-dom"

import Nav from "./components/Nav"

function SeminarPage(props) {
    let { id } = useParams()

    return (
        <div className="seminarPage">
            <Nav />
            <h1> this page should have the same number as the route here: {id}</h1>
        </div>
    )
}

export default SeminarPage