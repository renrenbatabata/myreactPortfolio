import React, { useEffect, useRef } from 'react';
import Styles from './journeyTimelineContent.module.css';

function JourneyTimelineContent({ journeys, confirmedJourneys }) {
    const contentRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(Styles.slideInRight);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        contentRefs.current.forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);


    const combined = [...confirmedJourneys, ...journeys]
    return (
        <ul className={Styles.timeline}>
            {combined.map((journey, index) => (
                <li key={`${journey.date}-${journey.title}`}>
                    <p className={Styles.timelineDate}>

                        {new Date(journey.date).toLocaleDateString('ja-JP', {
                            year: 'numeric',
                            month: 'long',
                            data: "data"
                        })}
                    </p>
                    <div
                        className={Styles.timelineContent}
                        ref={(el) => (contentRefs.current[index] = el)}
                    >
                        <h3>{journey.title}</h3>
                        <p>{journey.timelineContent}</p>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default JourneyTimelineContent;
