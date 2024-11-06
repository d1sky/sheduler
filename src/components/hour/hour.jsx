import { useEffect } from 'react';
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

    const event = useSelector(getEvent)
    const isEventShow = useSelector(getIsEventShow)



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
        <div className="hour" key={index}>
            <div className="hour_row_body">
                <div className="hour_now-line">
                    <div className="half-now" style={{ top: `${getPixelFromMinute(today.getMinutes())}px` }}>
                        {(compareDates(today, activeDate) && (hour == today.getHours())) ? <div className="hour-line"></div> : ''}
                    </div>
                </div>
                <div className="half first_half"
                    // onMouseEnter={ }
                    onClick={() => handleClick({ isHalf: false })}>
                    <EventBlock date={date} />
                </div>
                <div className="half seconb_half" onClick={() => handleClick({ isHalf: true })}>
                    <EventBlock date={addMinutes(date, 30)} half={true} />
                </div>
            </div>
        </div>)
}

