import styles from './Love.module.css';
const loves=['Bread','Music','Travel','Friends','Game','Alcohol'];
export default function Love(){return <div className={styles.loves}><span className={styles.caption}>SOME THINGS I LOVE</span><div className={styles.tags}>{loves.map(item=><span key={item}>{item==='Bread'?'🥐':item==='Music'?'♫':item==='Travel'?'✈':item==='Friends'?'♡':item==='Game'?'✦':'☕'} &nbsp;{item}</span>)}</div></div>}
