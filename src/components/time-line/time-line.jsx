import { useState } from 'react';
import { hourConvert, minuteConvert } from '../../utils/time';
import styles from './time-line.module.css';


export const TimeLine = () => {
    let [nowMinutes, setNowMinutes] = useState(new Date().getMinutes());

    let today = new Date();

    const startOfNextMinute = new Date().setSeconds(0, 0) + 60000;
    const timeToNextMinute = startOfNextMinute - today;

    setTimeout(() => {
        setInterval(setNowMinutes(new Date().getMinutes()), 60000);
    }, timeToNextMinute);

    let getPixelFromMinute = (minute) => {
        return Math.floor(80 / 60 * minute)
    }

    return (
        <div className={styles.hours_сontainer} >
            {[...Array(24).keys()].map((hour) =>
                <div key={hour} className={styles.hour_block}>
                    <div className={styles.time}>
                        {/* {`${hourConvert(hour)}:00`} */}
                        {hour != '0' && `${hourConvert(hour)}:00`}
                    </div>
                    {hour === today.getHours() &&
                        <div className={styles.now} style={{ top: `${getPixelFromMinute(nowMinutes) - 15}px` }}>
                            {`${hourConvert(today.getHours())}:${minuteConvert(today.getMinutes())}`}
                        </div>
                    }
                </div>
            )}
        </div>
    )
}

