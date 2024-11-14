import { Day } from '../day/day';
import { TimeLine } from '../time-line/time-line';
import { WeekHeader } from '../week-header/week-header';
import styles from './week.module.css';




export const Week = () => {
    return (
        <>
            <WeekHeader />
            <div className={styles.timeline}>
                <TimeLine />
                {[...Array(7).keys()].map((it, index) =>
                    <Day index={index} day={it + 1} key={index} />
                )}
            </div>
        </>

    )
}

