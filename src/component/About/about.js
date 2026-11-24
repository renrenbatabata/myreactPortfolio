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
                        はじめまして。
                    </p>
                    <p>
                        幼いころから「面白いものを作るのが好き」で、気になることがあるとすぐに調べて試してみるような、<strong>好奇心旺盛</strong>な性格です。
                    </p>
                    <p>
                        見た目も使い心地も大切にしながら、個人でもチームでもものづくりを続けていきたいです。
                    </p>
                </div>
                <Contact />
            </section>
        </>
    )
}

export default About