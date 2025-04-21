import React, { useState, useEffect } from 'react';
import MyskillCard from './myskillCard';
import Styles from './myskill.module.css';

function Myskill() {
    const [showBubble, setShowBubble] = useState(false);

    const handleShow = () => {
        setShowBubble(true);
    };

    useEffect(() => {
        if (showBubble) {
            const timer = setTimeout(() => {
                setShowBubble(false);
            }, 4000);
            return () => clearTimeout(timer);
        }
    }, [showBubble]);

    return (
        <div className={Styles.cardContainer}>
            <div className={Styles.titleWrapper}>
                <h2 id='skill'>My Skill</h2>
                <button className={Styles.infoButton} onClick={handleShow}>？</button>
                {showBubble && (
                    <div className={Styles.bubble}>
                        <p>★☆☆☆☆ | 初心者 | 触ったことがある／学習中。実務・開発経験はまだ浅い。</p>
                        <p>★★☆☆☆ | 初級 | 基本的な使い方が分かる。簡単なコードは書ける。</p>
                        <p>★★★☆☆ | 中級 | 自分で調べながら実装できる。開発に使った経験あり。</p>
                        <p>★★★★☆ | 上級 | 実務やチーム開発で使ったことがあり、応用がきく。</p>
                        <p>★★★★★ | 熟練 | 深い理解があり、他の人に教えられるレベル。</p>
                    </div>
                )}
            </div>
            <MyskillCard />
        </div>
    );
}

export default Myskill;
