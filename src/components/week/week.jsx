import { hourConvert } from '../../utils/time'
import { Day } from '../day/day'
import { TimeLine } from '../time-line/time-line'
import { WeekHeader } from '../week-header/week-header'
import './week.css'



// eslint-disable-next-line react/prop-types
export const Week = ({ activeDate }) => {
    return (
        <>
            <WeekHeader activeDate={activeDate} />
            <div className="week_container">
                <TimeLine />
                {[...Array(7).keys()].map((it, index) =>
                    <Day
                        activeDate={activeDate}
                        index={index}
                        day={it + 1}
                        hour={hourConvert(it)}
                        key={index} />
                )}
            </div>
        </>

    )
}

