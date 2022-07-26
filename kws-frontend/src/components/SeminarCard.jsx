import { Link } from "react-router-dom"

function SeminarCard(props) {
    return (
        <Link to={`/seminars/${props.id}`}>
            <div className="SeminarCard">
                <img src={props.imgSrc} alt="Seminar Image" />
                <h1> {props.title} </h1>
                <p>{props.flavorText}</p>
            </div>
        </Link>
    )
}

export default SeminarCard