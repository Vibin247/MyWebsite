export default function HomeInfo(props){
    return (
        <div className="HomeInfo">
            <div className="HomeIconWrapper">
                <img src={props.src} alt="Vibin" width="200px" height="200px"/>
            </div>
            <div className="WhoAmI">
                A professional web developer looking to lend my expertise to a technical product that is a driving force in today's software industry. 
            </div>
        </div>
    );
}