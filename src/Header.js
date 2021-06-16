import NavBar from "./NavBar/NavBar";

export default function Header(props){
    const tabs=props.tabs;
    return (
        <div id="page-header" className="page-header">
            {!props.pageState && (
            <div className="logo-row">
                <div className="logo">
                    VC
                </div>
            </div>)}
            
            <div className="nav-bar-row">
                <div className="my-name">
                    Vibin Chakravarthy
                </div>
                <NavBar tabs={tabs}/>
            </div>
        </div>
    );
}