import Contact from "../Contact/contact"
import Styles from "./about.module.css"
import Love from "./Love"

function About() {
    return (
        <>

            <section className={Styles.about}>
                <h2 id="about">About Me</h2>
                <Love />
                <div className={Styles.section}>
                    <p>
                        はじめまして、専門学校でWeb開発を学んでいる<strong>れんれん</strong>です。<br />
                        現在はフロントエンドエンジニアを目指して、Reactを中心に学習を進めています。
                    </p>
                    <p>
                        昔から「面白いものを作るのが好き」で、気になることがあるとすぐに調べて試してみるような、
                        <strong>好奇心旺盛</strong>な性格です。ちょっと天然な一面もありますが、それがきっかけで新しい発想が生まれることも多く、
                        <strong>柔軟な発想力</strong>には自信があります。
                    </p>
                    <p>
                        今後は、個人開発だけでなくチームでの開発経験も積みながら、見た目だけでなく使い心地にもこだわった
                        <strong>UIを実装できるエンジニア</strong>を目指しています。
                    </p>
                </div>
                <Contact />
            </section>
        </>
    )
}

export default About