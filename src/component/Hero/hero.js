import React from "react";
import Card from "./card";
import "./hero.scss";
import Style from "../../styles/utils.module.css"
export default function Hero() {
    return (
        <div className="container">
            <div id="app" className={Style.sideBySide} >
                <div className="testimonial">
                    <h1 >Welcome to RenRen’s World</h1>
                    <p>フロントエンドエンジニアを目指して、日々コーディング中！
                        <br />
                        見た目だけじゃなく、「使いやすさ」も大切にしたUIづくりを心がけています。
                        <br />
                        面白いものや、ワクワクするようなものを作るのが好きです。
                        <br />
                        このサイトにも、そんな“私らしさ”をぎゅっと詰めこみました。</p>
                </div>
                <Card image="/icon.png" />
            </div>
        </div>
    );
}
