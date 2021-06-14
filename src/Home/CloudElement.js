import { Link } from "react-router-dom";

export default function CloudElement(props){
    const positions = [
        {top:"-350px",left:"0px"},
        {top:"225px",left:"250px"},
        {top:"225px",left:"-250px"}
    ];
    return (
        <div className="CloudElement" style={positions[props.index]}>
            <Link to="/profile">
                <span onMouseEnter={props.handleOnMouseEnter} onMouseLeave={props.handleOnMouseLeave}>{props.tab.display}</span>
            </Link>
        </div>
    );
}