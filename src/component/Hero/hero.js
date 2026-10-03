import Card from './card';
import styles from './hero.module.css';
export default function Hero(){return <section className={styles.hero} id="top">
 <div className={styles.inner}>
  <div className={styles.copy}>
   <p className={styles.eyebrow}><span className={styles.sparkle}>✳</span> HELLO, I&apos;M RENREN</p>
   <h1>好奇心を、<br/><em>かたちにする。</em></h1>
   <p className={styles.intro}>はじめまして、れんれんです。<br/>アイデアを考えることも、使いやすい画面をつくることも好き。<br/>わくわくする体験を、Webの力で届けたいと思っています。</p>
   <div className={styles.actions}><a className={styles.primary} href="#about">私について <span aria-hidden="true">↗</span></a><a className={styles.secondary} href="#blog">つくったものを見る <span aria-hidden="true">↘</span></a></div>
   <p className={styles.note}>FRONTEND DEVELOPER / CREATIVE THINKER</p>
  </div>
  <div className={styles.visual}><div className={styles.blob}></div><Card image="/icon.png"/><span className={styles.sticker}>create<br/>with joy ✳</span></div>
 </div>
 <div className={styles.marquee} aria-hidden="true"><span>IDEAS INTO EXPERIENCES &nbsp; ✳ &nbsp; DESIGN WITH HEART &nbsp; ✳ &nbsp; IDEAS INTO EXPERIENCES &nbsp; ✳ &nbsp; DESIGN WITH HEART</span></div>
 </section>}
