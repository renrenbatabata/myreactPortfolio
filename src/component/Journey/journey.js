import Styles from "./journey.module.css"
import JourneyTimelineContent from "./journeyTimelineContent"
import confirmedJourneys from "./journeysData"

function Journey({ journeys }) {
  return (
    <div className={Styles.journeyContainer}>
      <h2 className={Styles.title} id="journey">活動履歴</h2>
      <JourneyTimelineContent journeys={journeys} confirmedJourneys={confirmedJourneys} className={Styles.Journey} />
    </div>
  )
}

export default Journey