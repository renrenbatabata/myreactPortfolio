import Contact from "../Contact/contact"
import Styles from "./about.module.css"
import Love from "./Love"

export default function About() {
    return (
        <section className={Styles.about} aria-labelledby="about">
            <h2 id="about">自己紹介</h2>
            <div className={Styles.section} data-portfolio-motion>
                <p>はじめまして、<strong>Karen</strong>です。</p>
                <p>Reactを中心にWebアプリを作っています。気になったアイデアは、まず手を動かして試すのが好きです。</p>
                <p>Flutterで近くのトイレを探せるアプリを作りました。神奈川区との産学連携では、区民祭りで使うデジタルスタンプラリーの設計・開発に携わりました。</p>
                <p>長期インターンでは、Figmaでの画面設計や、React・Flutter・Laravelを使った開発を経験しました。画面を開いたときに、次に何をすればいいか自然にわかる。そんな使い心地を大切にしています。</p>
            </div>
            <Love />
            <Contact />
        </section>
    )
}
