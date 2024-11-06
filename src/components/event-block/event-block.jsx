import { useDispatch, useSelector } from 'react-redux';
import { setEvent, setIsEventShow } from '../../services/event-slice';
import { getDiffInMinutes, getTime } from '../../utils/date';
import './event-block.css';


let eventMinHeight = '18px'

function dateRangeOverlaps(a, b) {
    if (a.start <= b.start && b.start < a.end) return true; // b starts in a
    if (a.start < b.end && b.end <= a.end) return true; // b ends in a
    if (b.start < a.start && a.end < b.end) return true; // a in b
    return false;
}

let getPixelFromMinute = (minute) => {
    if (minute == 0) {
        return 1
    }

    return Math.floor(4 / 3 * minute) - 1
}


let eventHeight = (date1, date2) => {
    let diff = getDiffInMinutes(date1, date2);

    if (diff <= 15) {
        return eventMinHeight;
    } else {
        return getPixelFromMinute(diff) + 'px'
    }
}

let eventTop = ({ start }) => {
    let startMinutes = new Date(start).getMinutes();

    return getPixelFromMinute(startMinutes) + 'px'
}


export const EventBlock = ({ date, event, hourElement }) => {
    const dispatch = useDispatch();

    let eventList = useSelector(state => state.eventList.entities.filter(ev => dateRangeOverlaps(event, ev)))
    let eventWidth = hourElement?.current?.offsetWidth - 15

    if (eventList.length > 1) {
        eventWidth = hourElement?.current?.offsetWidth / eventList.length
    }

    let handleEventClick = (e) => {
        e.stopPropagation();

        dispatch(setEvent(event))
        dispatch(setIsEventShow(true))
    }

    if (event) {
        return (
            <div className="event-block" style={{
                height: eventHeight(event?.start, event?.end),
                top: eventTop({ start: event?.start }),
                left: eventList.map((ev, index) => ({ ...ev, index })).find(it => it.id == event.id)?.index * eventWidth,
                width: eventWidth
            }} >
                <div className="event-block-container" style={{ height: eventHeight(event?.start, event?.end) }} onClick={handleEventClick}  >
                    <div className="event-time">
                        {getTime(event?.start)}
                    </div>
                    <div className="event-summary">
                        {event?.summary}
                    </div>
                </div>
            </div >
        )
    }

}

