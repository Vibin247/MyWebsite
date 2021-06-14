import { NavLink } from "react-router-dom";

export default function NavBar(props){
    return (
        <div className="NavBar">
            {props.tabs.map((tab)=>(
                <NavLink activeClassName="activeTab" key={tab.name} to={tab.URL}>{tab.display}</NavLink>
            ))}
        </div>
    );
}