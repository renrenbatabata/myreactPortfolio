import Link from 'next/link'
import Image from "next/image";
import Styles from "./blogCard.module.css"

function BlogCard({ blogs }) {
    return (
        <ul className={Styles.ul}>
            {blogs.map((blog) => (
                <li key={blog.id} >

                    <Link href={`/blogs/${blog.id}`} className={Styles.link}>
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
                    </Link>
                </li>
            ))}

        </ul>

    )
}

export default BlogCard