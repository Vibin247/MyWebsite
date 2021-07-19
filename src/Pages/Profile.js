import DetailsTable from "../Components/Common/DetailsTable";

export default function Profile(){
    const profileDetails = [
        {
            name: "Full name",
            value: "Vibin Chakravarthy D"
        },
        {
            name: "Age/Gender",
            value: "25/Male"
        },
        {
            name: "Date of Birth",
            value: "24.07.1996"
        },
        {
            name: "Place of Birth",
            value: "Chennai"
        },
        {
            name: "Lanugages known",
            value: "English, Tamil"
        }
    ];
    return (
        <section>
            <div className="profile-page tab-section">
                <div className="content-header">Profile</div>
                
                <div className ="content" style={{padding:"0px"}}>
                    <div className="tall-text-lines text-center-justify text-align-left">
                        Enthusiastic Software Developer eager to contribute to team success through smart work, attention to detail and excellent problem-solving skills.
                        Self-motivated and natural programmer with 3 years of professional experience in web client development.
                        Highly skilled in various programming languages, including but not limited to HTML, JavaScript, Ember.js
                    </div>
                </div>

                <div className="sub-header">Personal Info</div>
                <DetailsTable details={profileDetails}/>

                <div className="sub-header">Favourite Quote</div>
                <div className="content text-align-left tall-text-lines" style={{fontSize:"22px"}}>
                    <b>"Education is the most powerful weapon which you can use to change the world."</b> - <i>Nelson Mandela</i>
                </div>
                <div className="sub-header">Favourite Books</div>
                <div className="content text-align-left tall-text-lines" style={{fontSize:"22px"}}>
                    <div>
                        <div><b>The Godfather</b> - <i>Mario Puzo</i></div>
                        <div><b>Wiseguy: Life in a Mafia Family</b> - <i>Nicholas Pileggi</i></div>
                    </div>
                </div>
                <div className="sub-header">Things I am passionate about</div>
                <div className="content text-align-left tall-text-lines" style={{fontSize:"22px"}}>
                    <div>
                        <div><b>Video Games</b> - <i>Counter Strike Global Offensive | Withcer | Far Cry</i> <br/></div>
                        <div><b>Movies</b> - <i>Mani Ratnam | Martin Scorsese | Zack Snyder</i></div>
                    </div>
                </div>
            </div>
        </section>
    );
}