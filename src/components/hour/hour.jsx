import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEvent, getIsEventShow, setEvent, setIsEventShow } from '../../services/event-slice';
import { addMinutes, compareDates, convertToInputDateValue } from '../../utils/date';
import { EventBlock } from '../event-block/event-block';
import './hour.css';

let getPixelFromMinute = (minute) => {
    return Math.floor(80 / 60 * minute)
}

// eslint-disable-next-line react/prop-types
export const Hour = ({ index, hour, activeDate }) => {
    const dispatch = useDispatch();

    let hourElement = useRef(null);

    const event = useSelector(getEvent)
    const isEventShow = useSelector(getIsEventShow)

    let eventList = useSelector(state => state.eventList.entities.filter(event => {
        let date = new Date(activeDate);
        date.setHours(hour, 0, 0, 0);

        let startPeriod = new Date(date);
        let endPeriod = addMinutes(date, 60);

        return new Date(event.start).getTime() >= startPeriod.getTime() && new Date(event.start).getTime() < endPeriod.getTime()
    }));

    let today = new Date();

    let date = new Date(activeDate);
    date.setHours(hour, 0, 0, 0);

    useEffect(() => {
        if (isEventShow) {
            document.body.style.height = '100vh';
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.height = 'none';
            document.body.style.overflowY = 'auto';
        }
    }, [isEventShow])

    const handleClick = ({ isHalf }) => {
        let date = new Date(activeDate);
        date.setHours(hour, isHalf ? 30 : 0, 0, 0);

        dispatch(setEvent({
            ...event,
            start: convertToInputDateValue(date),
            end: convertToInputDateValue(addMinutes(date, 30)),
        }))
        dispatch(setIsEventShow(true))
    }

    return (
        <div className="hour" key={index} ref={hourElement}>
            <div className="hour_row_body">

                <div className="half half_first"
                    onClick={() => handleClick({ isHalf: false })}>
                    {/* <EventBlock date={date} /> */}
                </div>

                <div className="half half_second" onClick={() => handleClick({ isHalf: true })}>
                    {/* <EventBlock date={addMinutes(date, 30)} half={true} /> */}
                </div>


                <div className="hour_now-line">
                    <div className="half-now" style={{ top: `${getPixelFromMinute(today.getMinutes())}px` }}>
                        {(compareDates(today, activeDate) && (hour == today.getHours())) ? <div className="hour-line"></div> : ''}
                    </div>
                </div>

                {eventList.map(event => <EventBlock date={date} event={event} hourElement={hourElement} />)}

            </div>
        </div>)
}

