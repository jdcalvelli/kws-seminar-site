function SeminarCard(props) {
    return (
        <div className="SeminarCard">
            <img src={props.imgSrc} alt="Seminar Image" />
            <h1> {props.title} </h1>
            <p>{props.flavorText}</p>
        </div>
    )
}

export default SeminarCard