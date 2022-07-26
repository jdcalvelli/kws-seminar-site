import { Link } from "react-router-dom"

function Nav(props) {

    return (
        <div className="Nav">
            <h1><Link to="/"> kws </Link></h1>
            <h3> <a href="#">seminars</a> </h3>
            <h3> <a href="#">about</a> </h3>
            <h3> <a href="#">contact</a> </h3>
        </div>
    )

}

export default Nav