import DetailsTable from "../Common/DetailsTable";
import Stars from "../Common/Stars";

export default function Skills() {
    
    const frontEndSkills = [
        {
            name: "Javascript",
            component: Stars,
            props : { stars: 4 }
        },
        {
            name: "HTML",
            component: Stars,
            props : { stars: 4 }
        },
        {
            name: "CSS, LESS, SASS",
            component: Stars,
            props : { stars: 4 }
        },
        {
            name: "Ember.js",
            component: Stars,
            props : { stars: 4 }
        },
        {
            name: "JQuery",
            component: Stars,
            props : { stars: 3 }
        },
        {
            name: "React",
            component: Stars,
            props : { stars: 2 }
        }
    ];

    const otherTechSkills = [
        {
            name: "OOPS & DataStructures",
            component: Stars,
            props : { stars: 4 }
        },
        {
            name: "C++",
            component: Stars,
            props : { stars: 3 }
        },
        {
            name: "Java",
            component: Stars,
            props : { stars: 3 }
        },
        {
            name: "SQL (PostgreSQL)",
            component: Stars,
            props : { stars: 3 }
        },
        {
            name: "Unity",
            component: Stars,
            props : { stars: 3 }
        },
        {
            name: "C#",
            component: Stars,
            props : { stars: 2 }
        }
    ];

    return (
        <section>
            <div className="skills-page">
                <div className="content-header">Skills</div>
                
                
                <div className="table">
                    <div className="table-col" style={{"width":"75%"}}>
                        <DetailsTable details={frontEndSkills}/>
                    {/* </div>
                    <div className="table-col"> */}
                        <DetailsTable details={otherTechSkills}/>
                    </div>
                </div>
            </div>
        </section>
    );
}