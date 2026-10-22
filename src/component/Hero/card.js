import Image from 'next/image';
import styles from './card.module.css';
export default function Card({image}){return <div className={styles.card}><div className={styles.corner}>01 / KAREN</div><Image src={image} width={520} height={520} alt="Karenのイラスト" priority className={styles.avatar}/><div className={styles.label}><strong>Karen</strong><span>frontend & a little bit of magic ✦</span></div></div>}
