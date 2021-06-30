import SkillRatings from "../Common/SkillRatings";

export default function Skills() {
    
    const markUpAndStyles = [
        {
            name: "HTML",
            component: SkillRatings,
            props : { 
                stars: 4,
                imagename:"HTML5.png" 
            }
        },
        {
            name: "CSS",
            component: SkillRatings,
            props : { 
                stars:4,
                imagename:"CSS3.png"
            }
        },
        {
            name: "LESS",
            component: SkillRatings,
            props : { 
                stars:4,
                imagename:"LESS.svg"
            }
        },
        {
            name: "SASS",
            component: SkillRatings,
            props : { 
                stars:4,
                imagename:"SASS.svg"
            }
        }

    ];

    const frontEndSkills = [
        {
            name: "Javascript",
            component: SkillRatings,
            props : { 
                stars: 4,
                imagename:"JS.svg" 
            }
        },
        {
            name: "Ember.js",
            component: SkillRatings,
            props : { 
                stars:4,
                imagename:"Ember.svg"
            }
        },
        {
            name: "JQuery",
            component: SkillRatings,
            props : { 
                stars:3,
                imagename:"JQuery.png"
            }
        },
        {
            name: "React",
            component: SkillRatings,
            props : { 
                stars:2 ,
                imagename:"React.png"
            }
        }
    ];

    const otherTechSkills = [
        {
            name: "C++",
            component: SkillRatings,
            props : { 
                stars:3 ,
                imagename:"C++.png"
            }
        },
        {
            name: "Java",
            component: SkillRatings,
            props : { 
                stars:3 ,
                imagename:"Java.png"
            }
        },
        {
            name: "PostgreSQL (SQL)",
            component: SkillRatings,
            props : { 
                stars:3 ,
                imagename:"PGSQL.jpg"
            }
        },
        {
            name: "Unity",
            component: SkillRatings,
            props : { 
                stars:3 ,
                imagename:"unity.png"
            }
        },
        {
            name: "C#",
            component: SkillRatings,
            props : { 
                stars:2 ,
                imagename:"Csharp.png"
            }
        }
    ];

    return (
        <section>   
            <div className="skills-page tab-section">
                <div className="content-header">Technical Skills</div>
                
                
                <div className="content">
                    <div className="skill-ratings-collection">
                        <div className="collection-heading">
                            Markup language and Style sheets
                        </div>
                        <div className="skill-ratings-wrapper">
                            {markUpAndStyles.map((skill) => (
                                <SkillRatings key={skill.name} data={skill}/>
                            ))}
                        </div>
                    </div>
                    <div className="skill-ratings-collection">
                        <div className="collection-heading">
                            Javascript and JS frameworks
                        </div>
                        <div className="skill-ratings-wrapper">
                        {frontEndSkills.map((skill) => (
                            <SkillRatings key={skill.name} data={skill}/>
                        ))}
                        </div>
                    </div>
                    <div className="skill-ratings-collection">
                        <div className="collection-heading">
                            Programming languages and Packages
                        </div>
                        <div className="skill-ratings-wrapper">
                            {otherTechSkills.map((skill) => (
                                <SkillRatings key={skill.name} data={skill}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}