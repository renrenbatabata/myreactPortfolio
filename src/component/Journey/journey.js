import Styles from "./journey.module.css"
import JourneyTimelineContent from "./journeyTimelineContent"
import confirmedJourneys from "./journeysData"

function Journey({ journeys }) {
  return (
    <div className={Styles.journeyContainer}>
      <h2 className={Styles.title} id="journey">My Journey</h2>
      <JourneyTimelineContent journeys={journeys} confirmedJourneys={confirmedJourneys} className={Styles.Journey} />
    </div>
  )
}

export default Journey