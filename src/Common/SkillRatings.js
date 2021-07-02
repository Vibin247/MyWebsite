import { ReactComponent as HTML } from "../SVGs/Logos/HTML.svg";
export default function SkillRatings(props) {

    return (
        <div className="skill-ratings display-inline-block text-align-center">
            {props.data.svgcomponent && (<props.data.svgcomponent height={100} width={100}/>)}
            <div className="skill-name">{props.data.name}</div>
        </div>
    );
}