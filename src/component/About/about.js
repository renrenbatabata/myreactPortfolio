import Contact from "../Contact/contact"
import Styles from "./about.module.css"
import Love from "./Love"

export default function About() {
    return (
        <section className={Styles.about} aria-labelledby="about">
            <h2 id="about">自己紹介</h2>
            <div className={Styles.section}>
                <p>はじめまして、<strong>Karen</strong>です。</p>
                <p>Reactを中心にWebアプリを作っています。気になったアイデアは、まず手を動かして試すのが好きです。</p>
                <p>個人開発では、このポートフォリオや天気検索アプリを制作しました。長期インターンでは、Figmaでの画面設計や、React・Flutter・Laravelを使った開発を経験しました。</p>
                <p>画面を開いたときに、次に何をすればいいか自然にわかる。そんな使い心地を大切にしています。</p>
            </div>
            <Love />
            <Contact />
        </section>
    )
}
