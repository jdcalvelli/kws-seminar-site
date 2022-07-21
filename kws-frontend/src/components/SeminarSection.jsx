import { useState, useEffect } from "react"
import getSeminarCards from "../tasks/getSeminarCards"

import SeminarCard from "./SeminarCard"

function SeminarSection(props) {

    const [cardArrayData, setCardArrayData] = useState({isLoaded: false, cardArray: []})

    // have to use get effect for on component mount to pull data
    // have to capture both potentials for is loaded return and is not loaded

    //empty dependency array = like class based component did mount
    useEffect(() => {
        getSeminarCards(setCardArrayData)
    }, [])

    return (
        <div className="SeminarSection">
            <h1> this will contain individual seminar cards </h1>
            <h1> this will also contain the filtering method somehow </h1>

            { !cardArrayData.isLoaded ? 
                <h1> Loading ... </h1> :
                cardArrayData.cardArray.map((item, index) => {
                    console.log(item)
                    return <SeminarCard key={index} 
                                        // have to figure out how to get img source
                                        imgSrc={item.attributes.seminarImage} 
                                        title = {item.attributes.seminarTitle} 
                                        flavorText={item.attributes.seminarFlavorText}/>
                })
            }

        </div>
    )
}

export default SeminarSection