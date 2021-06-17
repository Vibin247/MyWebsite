import DetailsTable from "./DetailsTable";

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
    const contactDetails = [
        {
            name: "E-mail address",
            value: "vibin24796@outlook.com",
            emailto: "vibin24796@outlook.com"
        },
        {
            name: "Phone number",
            value: "+91 96778 88433"
        },
        {
            name: "LinkedIn profile",
            value: "VibinChakravarthy",
            URL: "https://www.linkedin.com/in/vibinchakravarthy/"
        },
        {
            name: "Address",
            value: "Chennai, TN 600029"
        }
    ]
    return (
        <div className="profile-page">
            <div className="content-header">Profile</div>
            
            <div className="sub-header">Profile Summary</div>
            <div className ="details-table">
                <div className="text-center-justify text-align-left">
                    Enthusiastic Software Developer eager to contribute to team success through smart work, attention to detail and excellent problem-solving skills.
                    Self-motivated and natural programmer with 3 years of professional experience in web client development.
                    Highly skilled in various programming languages, including but not limited to HTML, JavaScript, Ember.js
                </div>
            </div>

            <div className="sub-header">Personal Info</div>
            <DetailsTable details={profileDetails}/>

            <div className="sub-header">Contact Details</div>
            <DetailsTable details={contactDetails}/>
        </div>
    );
}