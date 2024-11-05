import { useSelector } from 'react-redux';
import { getActiveDate } from '../../services/active-date-slice';
import { getFirstDateOfCurrentWeek, getFullDayNameOfWeek } from '../../utils/date';
import './week-header.css';


export const WeekHeader = () => {
    const activeDate = useSelector(getActiveDate)

    return (
        <div className="week_header_container">
            <div className="week_header_hour">
                <div className="week_header_hour_content">
                    {` `}
                </div>
            </div>

            {[...Array(7).keys()].map(i => {
                let currentDate = getFirstDateOfCurrentWeek(activeDate);
                currentDate.setDate(currentDate.getDate() + i)

                return (
                    <div key={i} className="week_header_day">
                        {`${getFullDayNameOfWeek(currentDate)} ${currentDate.getDate()}`}
                    </div>
                )
            }
            )}

        </div>
    )
}

