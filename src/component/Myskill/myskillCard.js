import Styles from "./myskillCard.module.css";
import skillData from "./skillData";

export default function MyskillCard() {
    return (
        <ul className={Styles.cardList}>
            {skillData.map(({ name, label, mark, description, tools }) => (
                <li className={Styles.card} key={name}>
                    <span className={Styles.icon} aria-hidden="true">{mark}</span>
                    <p className={Styles.label}>{label}</p>
                    <h3>{name}</h3>
                    <p className={Styles.description}>{description}</p>
                    <p className={Styles.tools}>{tools}</p>
                </li>
            ))}
        </ul>
    );
}
