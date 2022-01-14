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
                    <div className="tall-text-lines text-center-justify">
                        Enthusiastic Software Developer eager to contribute to team success through smart work, attention to detail and excellent problem-solving skills.
                        Self-motivated and natural programmer with 3 years of professional experience in web client development.
                        Highly skilled in various programming languages, including but not limited to HTML, JavaScript, React.js
                    </div>
                </div>

                <div className="v-padding-sm">
                    <div className="profile-sub-header">Personal Info</div>
                    <div className="padding-m">
                        <DetailsTable details={profileDetails}/>
                    </div>
                </div>

                <div className="v-padding-sm">
                    <div className="profile-sub-header">Favourite Quote</div>
                    <div className="font-m padding-m tall-text-lines">
                        <strong>"Education is the most powerful weapon which you can use to change the world."</strong> - <em>Nelson Mandela</em>
                    </div>
                </div>
                
                <div className="v-padding-sm">
                    <div className="profile-sub-header">Favourite Books</div>
                    <div className="font-m padding-m tall-text-lines">
                        <div>
                            <div><strong>The Godfather</strong> - <em>Mario Puzo</em></div>
                            <div><strong>Wiseguy: Life in a Mafia Family</strong> - <em>Nicholas Pileggi</em></div>
                        </div>
                    </div>
                </div>

                
                <div className="v-padding-sm">
                    <div className="profile-sub-header">Things I am passionate about</div>
                    <div className="font-m padding-m tall-text-lines">
                        <div>
                            <div><strong>Video Games</strong> - <em>Counter Strike Global Offensive | Withcer | Far Cry</em> <br/></div>
                            <div><strong>Movies</strong> - <em>Mani Ratnam | Martin Scorsese | Zack Snyder</em></div>
                        </div>
                    </div>
                </div>
            
            </div>
        </section>
    );
}
