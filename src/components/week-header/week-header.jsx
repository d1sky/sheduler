import { useSelector } from 'react-redux';
import { getActiveDate } from '../../services/active-date-slice';
import { getFirstDateOfCurrentWeek, getShortDayNameOfWeek } from '../../utils/date';
import styles from './week-header.module.css';

Date.prototype.getWeek = function () {
    let onejan = new Date(this.getFullYear(), 0, 1);
    let weekNumber = Math.ceil((((this - onejan) / 86400000) + onejan.getDay() + 1) / 7);

    return weekNumber === 53 ? 1 : weekNumber
}



export const WeekHeader = () => {
    const activeDate = useSelector(getActiveDate)



    return (
        <div className={styles.container}>
            <div className={styles.week_number}>
                {`${(new Date(getFirstDateOfCurrentWeek(activeDate))).getWeek()} нед.`}
            </div>

            {[...Array(7).keys()].map(i => {
                let currentDate = getFirstDateOfCurrentWeek(activeDate);
                currentDate.setDate(currentDate.getDate() + i)

                return (
                    <div key={i} className={styles.week_day}>
                        <div className={styles.day_number}>
                            {currentDate.getDate()}
                        </div>
                        <div className={styles.day_name}>
                            {`${getShortDayNameOfWeek(currentDate)} `}
                        </div>
                    </div>
                )
            }
            )}

        </div>
    )
}

