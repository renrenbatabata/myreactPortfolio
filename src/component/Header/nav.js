import { useState } from 'react';
import Link from 'next/link';
import styles from './nav.module.css';

const links = [
 ['トップ', '/'],
 ['自己紹介', '/#about'],
 ['スキル', '/#skill'],
 ['活動履歴', '/#journey'],
 ['作品・ブログ', '/#blog'],
];

export default function Nav() {
 const [open, setOpen] = useState(false);
 const close = () => setOpen(false);
 return (
  <nav className={styles.nav} aria-label="メインナビゲーション">
   <div className={styles.mobileBar}>
    <Link href="/" onClick={close}>トップ</Link>
    <button
     className={styles.menu}
     type="button"
     aria-expanded={open}
     aria-controls="main-links"
     onClick={() => setOpen((shown) => !shown)}
    >
     {open ? '閉じる' : 'メニュー'} <span aria-hidden="true">{open ? '×' : '☰'}</span>
    </button>
   </div>
   <div id="main-links" className={`${styles.links} ${open ? styles.open : ''}`}>
    {links.map(([name, href], index) => (
     <Link key={href} href={href} onClick={close} className={index === 0 ? styles.desktopHome : undefined}>{name}</Link>
    ))}
    <Link href="/email" className={styles.contact} onClick={close}>お問い合わせ <span aria-hidden="true">↗</span></Link>
   </div>
  </nav>
 );
}
