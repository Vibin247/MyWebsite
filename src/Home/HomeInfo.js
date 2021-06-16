export default function HomeInfo(props){
    return (
        <div className="home-info">
            <div className="home-icon-wrapper">
                <img src={props.src} alt="Vibin" width="200px" height="200px"/>
            </div>
            <div className="description-tag">
                A professional web developer looking to lend my expertise to a technical product that is a driving force in today's software world. 
            </div>
        </div>
    );
}