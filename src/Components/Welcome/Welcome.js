export default function Welcome(props){
    return (
        <div className="welcome-info flex-box align-items-center justify-content-space-between">
            <div className="welcome-icon-wrapper">
                <img src={props.src} alt="Vibin" width="200px" height="200px"/>
            </div>
            <div className="description-tag disable-text-select">
                <div className="greeting">Hi, I am Vibin Chakravarthy. And if you are not me, you are not supposed to see this. </div>
                <div>A professional web developer looking to lend my expertise to a technical product that is a driving force in today's software world. </div>
            </div>
        </div>
    );
}
