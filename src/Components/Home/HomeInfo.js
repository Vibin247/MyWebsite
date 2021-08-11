export default function HomeInfo(props){
    return (
        <div className="home-info  flex-box align-items-center">
            <div className="home-icon-wrapper">
                <img src={props.src} alt="Vibin" width="200px" height="200px"/>
            </div>
            <div className="description-tag">
                <div className="greeting">Hi, I am Vibin Chakravarthy.</div>
                <div>A professional web developer looking to lend my expertise to a technical product that is a driving force in today's software world. </div>
            </div>
        </div>
    );
}