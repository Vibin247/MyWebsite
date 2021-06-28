import scroll from "./../js/scroll";

export default function NavBar(props){

    const handleNavClick = (event) => {
        const pageid = event.target.id.substr(0, event.target.id.indexOf("-"));
        scroll.scrollToPage(pageid);
    }
    return (
        <div className="nav-bar">
            {props.tabs.map((tab)=>(
                <span id={tab.name + "-link"} key={tab.name} className="nav-bar-link" onClick={handleNavClick}>{tab.display}</span>
            ))}
        </div>
    );
}