import { useState } from 'react';
import Link from 'next/link';
import styles from './nav.module.css';
const links=[['About','/#about'],['Skills','/#skill'],['Journey','/#journey'],['Blog','/#blog']];
export default function Nav(){
 const [open,setOpen]=useState(false);
 return <nav className={styles.nav} aria-label="メインナビゲーション">
  <Link href="/" className={styles.logo} onClick={()=>setOpen(false)}>renren<span className={styles.dot}>.</span></Link>
  <button className={styles.menu} aria-label={open?'メニューを閉じる':'メニューを開く'} aria-expanded={open} aria-controls="main-links" onClick={()=>setOpen(!open)}>{open?'閉じる ☓':'メニュー ☰'}</button>
  <div id="main-links" className={`${styles.links} ${open?styles.open:''}`}>
   {links.map(([name,href])=><Link key={name} href={href} onClick={()=>setOpen(false)}>{name}</Link>)}
   <Link href="/email" className={styles.contact} onClick={()=>setOpen(false)}>Contact <span aria-hidden="true">↗</span></Link>
  </div>
 </nav>
}
