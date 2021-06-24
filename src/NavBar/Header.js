import NavBar from "./NavBar";

export default function Header(props){
    const tabs=props.tabs;
    return (
        <div id="page-header" className="page-header">
            {props.headerState && (
                <div className="nav-bar-row" id="nav-bar-row">
                    <div className="logo text-align-left">
                        <img src="./images/MyFace.png" alt="Vibin" width="80px" height="80px"/>
                    </div>
                    <NavBar tabs={tabs}/>
                </div>
            )}
        </div>
    );
}