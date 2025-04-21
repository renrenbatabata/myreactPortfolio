import Styles from "./myskillCard.module.css"
import skillData from "./skillData"

function MyskillCard() {
    return (
        <>
            <ul className={Styles.cardList}>
                {skillData.map((skill, index) => (
                    <li className={Styles.card} key={index}>
                        <div className={Styles.icon}>{skill.icon}</div>
                        <h2>{skill.name}</h2>
                        <p>{skill.level}</p>
                        <p>{skill.description}</p>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default MyskillCard