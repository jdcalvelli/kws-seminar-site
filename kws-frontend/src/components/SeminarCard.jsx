import { Link } from "react-router-dom"

function SeminarCard(props) {
    return (
        
            <div className="SeminarCard">
                <img src={props.imgSrc} alt="Seminar Image" />
                <h1> {props.title} </h1>
                <p>{props.flavorText}</p>
                <Link to={`/seminars/${props.id}`}> <button>See More</button></Link>
            </div>
    )
}

export default SeminarCard