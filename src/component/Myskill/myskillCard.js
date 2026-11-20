import Styles from "./myskillCard.module.css"
import skillGroups from "./skillData"

export default function MyskillCard() {
    return (
        <div className={Styles.groups}>
            {skillGroups.map(({ title, skills }) => (
                <section className={Styles.group} key={title}>
                    <h3>{title}</h3>
                    <dl className={Styles.skills}>
                        {skills.map(({ name, description }) => (
                            <div key={name}>
                                <dt>{name}</dt>
                                <dd>{description}</dd>
                            </div>
                        ))}
                    </dl>
                </section>
            ))}
        </div>
    )
}
