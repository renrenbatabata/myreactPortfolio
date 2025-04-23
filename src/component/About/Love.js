import { useEffect, useRef, useState, } from "react";
import styles from "./Love.module.css";
import Image from "next/image";

const loves = [
  "Bread",
  "Spicy Food",
  "Music",
  "Travel",
  "Friends",
  "Game",
  "Alcohol",
];

function Love() {
  const [index, setIndex] = useState(1);
  const [transitioning, setTransitioning] = useState(true);
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
      setTransitioning(true);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (index === loves.length + 1) {
      const timer = setTimeout(() => {
        setTransitioning(false);
        setIndex(1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [index]);


  const slideItems = [loves[loves.length - 1], ...loves, loves[0]];

  return (
    <div className={styles.slider}>
      <div className={styles.bubbles}>
        {[...Array(10)].map((_, i) => (
          <span key={i} className={styles.bubble}></span>
        ))}
      </div>

      <div
        ref={sliderRef}
        className={styles.sliderInner}
        style={{
          transform: `translateX(-${index * 100}%)`,
          transition: transitioning ? "transform 1s ease-in-out" : "none",
        }}
      >
        {slideItems.map((item, i) => (
          <div className={styles.slide} key={i}>
            <Image
              src={`/${item}.png`}
              alt={item}
              width={100}
              height={100}
              className={styles.imgitem}
            />
            <p>{`I LOVE ${item}`}</p>
          </div>
        ))}
      </div>
    </div>
  );

}

export default Love;
