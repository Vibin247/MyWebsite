import NavBar from "./NavBar";

export default function Header(props){
    const tabs=props.tabs;
    return (
        <div id="page-header" className="page-header">
            {props.headerState && (
                <div className="nav-bar-row" id="nav-bar-row">
                    <div className="logo">
                        <img src="./images/MyFace.png" alt="Vibin" width="60px" height="60px"/>
                    </div>
                    <NavBar tabs={tabs}/>
                </div>
            )}
        </div>
    );
}