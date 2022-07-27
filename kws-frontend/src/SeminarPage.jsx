import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import getSeminar from "./tasks/getSeminar"

import Nav from "./components/Nav"
import Footer from "./components/Footer"

function SeminarPage(props) {
    const [seminarData, setSeminarData] = useState({isLoaded: false, seminarData: {}})

    let { id } = useParams()

    useEffect(() => {
        getSeminar(id, setSeminarData)
    }, [])

    return (
        <div className="seminarPage">
            <Nav />
            <h1> this page should have the same number as the route here: {id}</h1>

            {!seminarData.isLoaded ? 
            <h1>Loading...</h1> :
            <div className="seminarEmbeds">
                <h1>{seminarData.seminarData.attributes.seminarTitle}</h1>
                <iframe src={seminarData.seminarData.attributes.embedURL} frameBorder="0"></iframe>
                <a href={seminarData.seminarData.attributes.requiredReadingURL}> Required Reading </a>
                <a href={seminarData.seminarData.attributes.optionalReadingURL}> Optional Reading </a>
            </div> 
            }

            <Footer />
        </div>
    )
}

export default SeminarPage