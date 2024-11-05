import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEvent, getIsEventShow, setEvent, setIsEventShow } from '../../services/event-slice';
import { addMintes, convertToInputDateValue } from '../../utils/date';
import './hour.css';


// eslint-disable-next-line react/prop-types
export const Hour = ({ index, hour, activeDate }) => {
    const dispatch = useDispatch();

    const event = useSelector(getEvent)
    const isEventShow = useSelector(getIsEventShow)

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


    // useEffect(() => {
    //     let startDate = new Date(start);
    //     startDate.setMinutes(startDate.getMinutes() - startDate.getTimezoneOffset());

    //     dispatch(setEvent({
    //         ...event,
    //         start: convertToInputDateValue(startDate),
    //         end: convertToInputDateValue(addMintes(startDate, 30)),
    //     }))
    //     // setEvent({
    //     //     ...event,
    //     //     start: convertToInputDateValue(start),
    //     //     end: convertToInputDateValue(addMintes(start, 30)),
    //     // })
    // }, [start])


    const handleClick = ({ isHalf }) => {
        let date = new Date(activeDate);
        date.setHours(hour, isHalf ? 30 : 0, 0, 0);

        console.log(date);


        dispatch(setEvent({
            ...event,
            start: convertToInputDateValue(date),
            end: convertToInputDateValue(addMintes(date, 30)),
        }))
        dispatch(setIsEventShow(true))
    }

    return (
        <div className="hour" key={index}>
            <div className="hour_row_body">
                <div className="half first_half" onClick={() => handleClick({ isHalf: false })}></div>
                <div className="half seconb_half" onClick={() => handleClick({ isHalf: true })}></div>
            </div>
        </div>)
}

