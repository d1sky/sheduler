import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEvent, getIsEventShow, setEvent, setIsEventShow } from '../../services/event-slice';
import { addMintes, convertToInputDateValue } from '../../utils/date';
import { EventBlock } from '../event-block/event-blocck';
import './hour.css';

let getPixelFromMinute = (minute) => {
    return Math.floor(80 / 60 * minute)
}

// eslint-disable-next-line react/prop-types
export const Hour = ({ index, hour, activeDate }) => {
    const dispatch = useDispatch();

    const event = useSelector(getEvent)
    const isEventShow = useSelector(getIsEventShow)

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
            end: convertToInputDateValue(addMintes(date, 30)),
        }))
        dispatch(setIsEventShow(true))
    }

    return (
        <div className="hour" key={index}>
            <div className="hour_row_body">
                <div className="half first_half" onClick={() => handleClick({ isHalf: false })}>
                    <EventBlock date={date} />
                </div>
                <div className="half seconb_half" onClick={() => handleClick({ isHalf: true })}>
                    <EventBlock date={addMintes(date, 30)} />
                </div>
            </div>
        </div>)
}

