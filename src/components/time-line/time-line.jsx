import { hourConvert, minuteConvert } from '../../utils/time';
import './time-line.css';



export const TimeLine = () => {

    let today = new Date();

    let getPixelFromMinute = (minute) => {
        return Math.floor(80 / 60 * minute)
    }

    return (
        <div className="time_line_hour" >
            {[...Array(24).keys()].map((hour) =>
                <div key={hour} className="time_line_row_head">
                    {`${hourConvert(hour)}:00`}
                    <div className="now" style={{ top: `${getPixelFromMinute(today.getMinutes()) - 15}px` }}>
                        {hour === today.getHours() ? `${hourConvert(today.getHours())}:${minuteConvert(today.getMinutes())}` : ''}
                    </div>
                </div>
            )}
        </div>
    )
}

