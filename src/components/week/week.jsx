import { Day } from '../day/day'
import { TimeLine } from '../time-line/time-line'
import { WeekHeader } from '../week-header/week-header'
import './week.css'




export const Week = () => {
    return (
        <>
            <WeekHeader />
            <div className="week_container">
                <TimeLine />
                {[...Array(7).keys()].map((it, index) =>
                    // eslint-disable-next-line react/jsx-key
                    <Day index={index} day={it + 1} />
                )}
            </div>
        </>

    )
}

