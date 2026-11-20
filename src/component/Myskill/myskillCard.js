import Styles from "./myskillCard.module.css"
import skillData from "./skillData"

const skillOrder = ["React", "Next.js", "JavaScript", "Flutter", "Laravel", "Figma", "Python"];

const featuredSkills = skillOrder.map((name) => skillData.find((skill) => skill.name === name));
const otherSkills = skillData.filter(({ name }) => !skillOrder.includes(name));

export default function MyskillCard() {
    return (
        <ul className={Styles.cardList}>
            {[...featuredSkills, ...otherSkills].map(({ name, description, icon, mark }) => (
                <li className={Styles.card} key={name} data-portfolio-motion>
                    <div className={Styles.icon} aria-hidden="true">
                        {icon ?? <span className={Styles.mark}>{mark}</span>}
                    </div>
                    <h3>{name}</h3>
                    <p>{description}</p>
                </li>
            ))}
        </ul>
    )
}
