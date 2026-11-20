import Card from './card';
import styles from './hero.module.css';

export default function Hero() {
 return (
  <section className={styles.hero} id="top" aria-labelledby="portfolio-title">
   <div className={styles.sheet} data-portfolio-motion>
    <div className={styles.visual}>
     <Card image="/icon.png" />
    </div>
    <div className={styles.copy}>
     <p className={styles.kind}>ポートフォリオ</p>
     <h1 id="portfolio-title">Karen</h1>
     <p className={styles.intro}>
      はじめまして。アイデアを考えることも、使いやすい画面をつくることも好きです。
     </p>
     <div className={styles.actions}>
      <a className={styles.primary} href="#blog">つくったものを見る <span aria-hidden="true">↘</span></a>
      <a className={styles.secondary} href="#about">私について <span aria-hidden="true">↓</span></a>
     </div>
    </div>
   </div>
  </section>
 );
}
