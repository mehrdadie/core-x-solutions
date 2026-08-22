import TrackClicks from "./TrackClicks"
import TrackScroll from "./TrackScroll"

/**
 * Mounted once in the root layout. Renders nothing — every part of it is a
 * listener. The SDK itself is started by importing "@/lib/analytics", not by a
 * provider component; see the note there for why the ordering matters.
 */
export default function Analytics() {
  return (
    <>
      <TrackClicks />
      <TrackScroll />
    </>
  )
}
