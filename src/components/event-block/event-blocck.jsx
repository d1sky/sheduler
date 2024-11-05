import { useSelector } from 'react-redux';
import { getTime } from '../../utils/date';
import './event-block.css';



export const EventBlock = ({ date }) => {
    const eventList = useSelector(state => state.eventList.entities);
    const event = useSelector(state => state.eventList.entities.find(event => new Date(event.start).getTime() == date.getTime()));


    if (event) {
        return (
            <div className="event-block" >
                <div className="event-time">
                    {getTime(event.start)}
                </div>
                <div className="event-summary">
                    {event.summary}
                </div>
            </div>
        )
    }

}

