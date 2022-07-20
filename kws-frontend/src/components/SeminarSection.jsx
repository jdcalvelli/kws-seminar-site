import SeminarCard from "./SeminarCard"

function SeminarSection(props) {
    
    let testArray = [0, 1, 2, 3 , 4, 5, 6]

    return (
        <div className="SeminarSection">
            <h1> this will contain individual seminar cards </h1>
            <h1> this will also contain the filtering method somehow </h1>

            {testArray.map((item, index) => {
                return <SeminarCard imgSrc='#' flavorText={`testFlavorText ${index}`}/>
            })}

        </div>
    )
}

export default SeminarSection