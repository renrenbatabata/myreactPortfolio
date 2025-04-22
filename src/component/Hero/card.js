import React, { useRef, useState, useEffect } from "react";
import styles from "./card.module.css"

export default function Card({ image, children }) {
    const cardRef = useRef(null);
    const [mouse, setMouse] = useState({ x: 0, y: 0 });
    const [size, setSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        if (cardRef.current) {
            setSize({
                width: cardRef.current.offsetWidth,
                height: cardRef.current.offsetHeight
            });
        }
    }, []);

    const handleMouseMove = (e) => {
        const rect = cardRef.current.getBoundingClientRect();
        setMouse({
            x: e.clientX - rect.left - size.width / 2,
            y: e.clientY - rect.top - size.height / 2
        });
    };

    const handleMouseLeave = () => {
        setMouse({ x: 0, y: 0 });
    };

    const mousePX = mouse.x / size.width;
    const mousePY = mouse.y / size.height;

    const cardStyle = {
        transform: `rotateY(${mousePX * 30}deg) rotateX(${mousePY * -30}deg)`
    };

    const bgStyle = {
        backgroundImage: `url(${image})`,
        transform: `translateX(${mousePX * -40}px) translateY(${mousePY * -40}px)`
    };

    return (
        <div
            className={styles.cardwrap}
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div className={styles.card} style={cardStyle}>
                <div className={styles.cardbg} style={bgStyle}></div>
                <div className={styles.cardinfo}>
                    <h1>RenRen</h1>
                    <p>Frontend magic with a touch of kawaii💕</p>
                </div>
            </div>
        </div>
    );
}
