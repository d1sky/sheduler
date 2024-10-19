import { hourConvert } from '../../utils/time';
import './time-line.css';



export const TimeLine = () => {

    return (
        <div className="time_line_hour" >
            {[...Array(24).keys()].map((hour) => <div key={hour} className="time_line_row_head">{`${hourConvert(hour)}:00`} </div>)}
        </div>

    )
}

