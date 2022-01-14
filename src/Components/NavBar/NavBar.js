import navigator from "./../../js/Navigation";

export default function NavBar(props){

    const handleNavClick = (event) => {
        const pageid = event.target.id.substr(0, event.target.id.indexOf("-"));
        navigator.scrollToPage(pageid);
    }

    return (
        <nav className="nav-bar">
            {props.tabs.map((tab)=>(
                <span id={tab.name + "-link"} key={tab.name} className="nav-bar-link" onClick={handleNavClick}>{tab.display}</span>
            ))}
        </nav>
    );
}