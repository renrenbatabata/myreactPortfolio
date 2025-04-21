import Header from "@/component/Header/header";
import { client } from "../../../libs/client";
import styles from './id.module.scss';
import Footer from "@/component/Footer/footer";
import Image from "next/image";

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const data = await client.get({ endpoint: "blogs", contentId: id })

    return {
        props: {
            blog: data,
        }
    }
}

export const getStaticPaths = async () => {
    const data = await client.get({ endpoint: "blogs" })

    const paths = data.contents.map((content) => ({
        params: { id: content.id },
    }))

    return {
        paths,
        fallback: false,
    }
}


function BlogId({ blog }) {
    return (
        <>
            <Header />
            <div className={styles.main}>
                <div className={styles.imageWrapper}>
                    <Image
                        src={blog.eyecatch.url}
                        alt="eyecatch"
                        layout="responsive"
                        width={100}
                        height={50}
                    />
                </div>
                <h1 className={styles.title}>{blog.title}</h1>
                <p className={styles.publishedAt}> {new Date(blog.publishedAt).toLocaleDateString('ja-JP', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                })}
                </p>
                <div
                    dangerouslySetInnerHTML={{
                        __html: `${blog.content}`,
                    }}
                    className={styles.post}
                />
            </div>
            <Footer />
        </>
    )
}

export default BlogId