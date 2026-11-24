import MyskillCard from './myskillCard';
import Styles from './myskill.module.css';

export default function Myskill() {
    return (
        <section className={Styles.cardContainer} aria-labelledby="skill">
            <div className={Styles.titleWrapper}>
                <h2 id="skill">My Skill</h2>
            </div>
            <MyskillCard />
        </section>
    );
}
