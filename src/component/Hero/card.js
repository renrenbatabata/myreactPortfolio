import Image from 'next/image';
import styles from './card.module.css';

export default function Card({ image }) {
 return (
  <div className={styles.card}>
   <div className={styles.window}>
    <Image
     src={image}
     width={576}
     height={576}
     alt="Karenのイラスト"
     priority
     sizes="(max-width: 370px) 184px, (max-width: 690px) 230px, 282px"
     className={styles.avatar}
    />
    <svg className={styles.sparkles} viewBox="0 0 250 250" fill="none" aria-hidden="true">
     <path d="M43 42q0 12 12 12-12 0-12 12 0-12-12-12 12 0 12-12Z" fill="#fff"/>
     <path d="M203 42q0 8 8 8-8 0-8 8 0-8-8-8 8 0 8-8Z" fill="#fff"/>
     <path d="M211 167q0 12 12 12-12 0-12 12 0-12-12-12 12 0 12-12Z" fill="#9ea9de"/>
     <circle cx="55" cy="177" r="3" fill="#fff"/>
     <circle cx="184" cy="26" r="2" fill="#a5b2e1"/>
    </svg>
   </div>
  </div>
 );
}
