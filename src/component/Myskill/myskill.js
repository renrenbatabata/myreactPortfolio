import MyskillCard from './myskillCard';
import Styles from './myskill.module.css';

export default function Myskill() {
    return (
        <section className={Styles.cardContainer} aria-labelledby="skill">
            <h2 id="skill" className={Styles.title}>スキル</h2>
            <MyskillCard />
        </section>
    );
}
