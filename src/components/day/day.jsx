import { hourConvert } from '../../utils/time';
import { Hour } from '../hour/hour';
import './day.css';



// eslint-disable-next-line react/prop-types
export const Day = ({ key, day }) => {

    return (
        <div className={`day_container ${(day === 6 || day === 7) ? 'weekend' : ''}`} key={key}>
            {[...Array(24).keys()].map(i => <Hour key={i} day={day} hour={hourConvert(i)} />)}
        </div>
    )
}

