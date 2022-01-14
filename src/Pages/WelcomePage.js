import Welcome from "../Components/Welcome/Welcome";
import navigator from "../js/Navigation";

export default function WelcomePage(props){

    const scrollToPage = () => {
        navigator.scrollToPage(props.tabs[1].name);
    };

    return (
        <section className="welcome-page">
            <div className="tab-section">
                <Welcome src="./images/MyFace.png"/>
                <div className="scroll-buttons" style={{marginTop:"75px"}}>
                    <div className="scroll scroll-down disable-text-select" onClick={scrollToPage}></div>
                    <div className="scroll scroll-down disable-text-select" onClick={scrollToPage}></div>
                </div>
            </div>
        </section>
    );
}