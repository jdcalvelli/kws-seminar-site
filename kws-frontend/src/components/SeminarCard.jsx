function SeminarCard(props) {
    return (
        <div className="SeminarCard">
            <img src={props.imgSrc} alt="Seminar Image" />
            <p>{props.flavorText}</p>
        </div>
    )
}

export default SeminarCard