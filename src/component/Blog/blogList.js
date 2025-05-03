import BlogCard from './blogCard';
import Styles from './blogList.module.css'
function BlogList({ blogs }) {
    return (

        <div className={Styles.blog}>
            <h2 className={Styles.title} id='blog'>Blog</h2>
            <div className={Styles.ListSide}>
                <BlogCard blogs={blogs} />
            </div>
        </div>

    )
}

export default BlogList