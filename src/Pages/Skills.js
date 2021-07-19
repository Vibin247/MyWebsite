import SkillRatings from "../Components/Common/SkillRatings";
import { markUpAndStyles, frontEndSkills, otherTechSkills } from "../Configs/skillsConfig";

export default function Skills() {

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