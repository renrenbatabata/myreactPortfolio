import Link from 'next/link'
import Image from "next/image";
import Styles from "./blogCard.module.css"

function BlogCard({ blogs }) {
    return (
        <ul className={Styles.ul}>
            {blogs.map((blog) => (
                <>
                    <Link href={`/blogs/${blog.id}`} className={Styles.link}>
                        <li key={blog.id} >
                            <div className={Styles.imageWrapper}>
                                <Image
                                    src={blog.eyecatch.url}
                                    alt="eyecatch"
                                    layout="responsive"
                                    width={80}
                                    height={50}
                                />
                            </div>
                            {blog.title}
                        </li>
                    </Link>
                </>
            ))}

        </ul>

    )
}

export default BlogCard