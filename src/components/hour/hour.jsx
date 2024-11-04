import { useEffect, useState } from 'react';
import { Event } from '../event/event';
import './hour.css';


// eslint-disable-next-line react/prop-types
export const Hour = ({ index, hour, activeDate }) => {
    const [activeHour, setActiveHour] = useState()
    const [isEventShow, setIsEventShow] = useState(false)

    useEffect(() => {

        if (isEventShow) {
            // When the modal is shown, we want a fixed body
            // document.body.style.position = 'fixed';
            // document.body.style.top = `-${window.scrollY}px`;


            document.body.style.height = '100vh';
            document.body.style.overflowY = 'hidden';

            //height: 100vh;
            //   overflow-y: hidden;
            //   padding-right: 15px; /* Avoid width reflow */
        } else {
            // When the modal is hidden, we want to remain at the top of the scroll position
            // document.body.style.position = '';
            // document.body.style.top = '';

            document.body.style.height = 'none';
            document.body.style.overflowY = 'auto';
        }


    }, [isEventShow])


    const handleClick = ({ isHalf }) => {
        console.log('click');

        let date = new Date(activeDate);
        date.setHours(hour, isHalf ? 30 : 0, 0, 0);

        setActiveHour(date)
        setIsEventShow(true)
    }

    return (
        <div className="hour" key={index}>
            <div className="hour_row_body">
                <div className="half first_half" onClick={() => handleClick({ isHalf: false })}></div>
                <div className="half seconb_half" onClick={() => handleClick({ isHalf: true })}></div>
            </div>

            {isEventShow && <Event start={activeHour} setIsEventShow={setIsEventShow} />}
        </div>)
}

