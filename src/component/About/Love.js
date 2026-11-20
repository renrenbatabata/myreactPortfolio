import styles from './Love.module.css';

const interests = [
    ['🥐', 'パン'],
    ['♫', '音楽'],
    ['✈', '旅行'],
    ['♡', '友達と遊ぶこと'],
    ['✦', 'ゲーム'],
    ['☕', 'お酒'],
];

export default function Love() {
    return (
        <div className={styles.loves}>
            <span className={styles.caption}>好きなこと</span>
            <div className={styles.tags}>
                {interests.map(([icon, label]) => (
                    <span key={label}><i aria-hidden="true">{icon}</i> {label}</span>
                ))}
            </div>
        </div>
    );
}
