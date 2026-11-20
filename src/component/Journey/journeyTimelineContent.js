import Styles from './journeyTimelineContent.module.css';

export default function JourneyTimelineContent({ journeys, confirmedJourneys }) {
    const combined = [...confirmedJourneys, ...journeys];

    return (
        <ul className={Styles.timeline}>
            {combined.map((journey) => (
                <li key={`${journey.date}-${journey.title}`}>
                    <p className={Styles.timelineDate}>
                        {new Date(journey.date).toLocaleDateString('ja-JP', {
                            year: 'numeric',
                            month: 'long',
                        })}
                    </p>
                    <div className={Styles.timelineContent} data-portfolio-motion>
                        <h3>{journey.title}</h3>
                        <p>{journey.timelineContent}</p>
                    </div>
                </li>
            ))}
        </ul>
    );
}
