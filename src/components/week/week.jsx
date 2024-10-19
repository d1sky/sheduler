import { hourConvert } from '../../utils/time'
import { Day } from '../day/day'
import { TimeLine } from '../time-line/time-line'
import { WeekHeader } from '../week-header/week-header'
import './week.css'



export const Week = ({ activeDate }) => {
    return (
        <>
            <WeekHeader activeDate={activeDate} />
            <div className="week_container">
                <TimeLine />
                {[...Array(7).keys()].map(i =>
                    <Day key={i} day={i + 1} hour={hourConvert(i)} />
                )}
            </div>
        </>

    )
}

