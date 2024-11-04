import { useEffect, useState } from 'react';
import { getFirstDateOfCurrentWeek } from '../../utils/date';
import { hourConvert } from '../../utils/time';
import { Hour } from '../hour/hour';
import './day.css';



// eslint-disable-next-line react/prop-types
export const Day = ({ index, day, activeDate }) => {

    const [currentDate, setCurrentDate] = useState()

    useEffect(() => {
        if (activeDate) {
            let date = getFirstDateOfCurrentWeek(activeDate);
            date.setDate(date.getDate() + index)

            setCurrentDate(date)
        }

    }, [activeDate])

    return (
        <div
            className={`day_container ${(day === 6 || day === 7) ? 'weekend' : ''}`}
            key={index}>
            {[...Array(24).keys()].map(i =>

                <Hour
                    activeDate={currentDate}
                    index={i}
                    day={day}
                    hour={hourConvert(i)}
                    key={i} />)}
        </div>
    )
}

