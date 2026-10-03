import Link from 'next/link';
import Image from 'next/image';
import styles from './blogCard.module.css';
export default function BlogCard({blogs}){return <ul className={styles.list}>{blogs.map((blog,index)=><li key={blog.id}><Link href={`/blogs/${blog.id}`} className={styles.card}><div className={styles.image}><Image src={blog.eyecatch.url} alt="" fill sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw" style={{objectFit:'cover'}}/></div><div className={styles.content}><span className={styles.number}>ARTICLE / {String(index+1).padStart(2,'0')}</span><h3>{blog.title}</h3><span className={styles.arrow} aria-hidden="true">↗</span></div></Link></li>)}</ul>}
