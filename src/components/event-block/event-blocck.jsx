import { useDispatch, useSelector } from 'react-redux';
import { setEvent } from '../../services/event-slice';
import { addMinutes, getDiffInMinutes, getTime } from '../../utils/date';
import './event-block.css';


let eventMinHeight = '18px'

let getPixelFromMinute = (minute) => {
    if (minute == 0) {
        return 1
    }

    return Math.floor(4 / 3 * minute) - 2
}


let eventHeight = (date1, date2) => {
    let diff = getDiffInMinutes(date1, date2);

    if (diff <= 15) {
        return eventMinHeight;
    } else {
        return getPixelFromMinute(diff) + 'px'
    }
}

let eventTop = ({ start, half }) => {
    let startMinutes = new Date(start).getMinutes();

    startMinutes = half ? startMinutes - 30 : startMinutes

    return getPixelFromMinute(startMinutes) + 'px'
}


export const EventBlock = ({ date, half = false }) => {
    const dispatch = useDispatch();
    let event = useSelector(state => state.eventList.entities.find(event => {
        let startPeriod = new Date(date);
        let endPeriod = addMinutes(date, 30);

        return new Date(event.start).getTime() >= startPeriod.getTime() && new Date(event.start).getTime() < endPeriod.getTime()
    }));

    let handleEventClick = (e) => {
        e.preventDefault();

        dispatch(setEvent(event))
        // dispatch(setIsEventShow(true))
    }

    if (event) {
        return (
            <div className="event-block" style={{ height: eventHeight(event?.start, event?.end) }} onClick={handleEventClick}>
                <div className="event-block-container" style={{ top: eventTop({ start: event?.start, half }) }}>
                    <div className="event-time">
                        {getTime(event.start)}
                    </div>
                    <div className="event-summary">
                        {event.summary}
                    </div>
                </div>
            </div >
        )
    }

}

