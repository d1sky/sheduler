import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getActiveDate } from '../../services/active-date-slice';
import { getFirstDateOfCurrentWeek } from '../../utils/date';
import { hourConvert } from '../../utils/time';
import { Hour } from '../hour/hour';
import './day.css';



// eslint-disable-next-line react/prop-types
export const Day = ({ index, day }) => {
    const activeDate = useSelector(getActiveDate)

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
            className={`day_container ${(day === 6 || day === 7) ? 'weekend' : ''} ${currentDate && currentDate.getDate() === new Date().getDate() ? 'today-active' : ''}`}
            key={index}>
            {[...Array(24).keys()].map((i, index) =>
                <Hour
                    key={index}
                    day={day}
                    activeDate={currentDate}
                    index={i}
                    hour={hourConvert(i)} />)}
        </div>
    )
}

