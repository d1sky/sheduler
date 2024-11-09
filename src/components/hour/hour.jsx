import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEvent, getIsEventShow, setEvent, setIsEventShow } from '../../services/event-slice';
import { addMinutes, convertToInputDateValue } from '../../utils/date';
import { EventBlock } from '../event-block/event-block';
import styles from './hour.module.css';

let getPixelFromMinute = (minute) => {
    return Math.floor(80 / 60 * minute)
}

// eslint-disable-next-line react/prop-types
export const Hour = ({ index, day, hour, activeDate }) => {
    const dispatch = useDispatch();

    let eventList = useSelector(state => state.eventList.entities);

    const getHourEventList = () => eventList.filter(event => {
        return new Date(event.start).getTime() >= startPeriod.getTime() && new Date(event.start).getTime() < endPeriod.getTime()
    })

    let hourElement = useRef(null);

    const event = useSelector(getEvent)
    const isEventShow = useSelector(getIsEventShow)

    let [nowMinutes, setNowMinutes] = useState(new Date().getMinutes());

    let today = new Date();

    const startOfNextMinute = new Date().setSeconds(0, 0) + 60000;
    const timeToNextMinute = startOfNextMinute - today;

    setTimeout(() => {
        setInterval(setNowMinutes(new Date().getMinutes()), 60000);
    }, timeToNextMinute);

    let date = new Date(activeDate);
    date.setHours(hour, 0, 0, 0);

    let startPeriod = new Date(date);
    let endPeriod = addMinutes(date, 60);



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

    let className = `${styles.hour}  ${(day === 6 || day === 7) && styles.weekend} ${activeDate && activeDate.getDate() === new Date().getDate() && styles.today}`

    return (
        <div
            className={className}
            key={index}
            ref={hourElement}>
            <div className={styles.hour_block}>

                <div className={`${styles.half} ${styles.half_first}`} onClick={() => handleClick({ isHalf: false })} />

                <div className={`${styles.half} ${styles.half_second}`} onClick={() => handleClick({ isHalf: true })} />

                <div
                    className={styles.line_container}>
                    <div
                        className={styles.now_line}
                        style={{ top: `${getPixelFromMinute(nowMinutes)}px` }}>
                        {(hour == today.getHours()) ? <div className={styles.line}></div> : ''}
                    </div>
                </div>

                {getHourEventList().map(event => <EventBlock date={date} event={event} hourElement={hourElement} />)}

            </div>
        </div >)
}

