import Image from 'next/image';
import styles from './card.module.css';
export default function Card({image}){return <div className={styles.card}><div className={styles.corner}>01 / RENREN</div><Image src={image} width={520} height={520} alt="れんれんのイラスト" priority className={styles.avatar}/><div className={styles.label}><strong>RenRen</strong><span>frontend & a little bit of magic ✦</span></div></div>}
