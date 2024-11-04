import { useCallback, useEffect, useState } from 'react';
import { addMintes, convertToInputDateValue } from '../../utils/date';
import Outside from '../outside/outside';
import './event.css';


// eslint-disable-next-line react/prop-types
export const Event = ({ start, setIsEventShow }) => {
    const [event, setEvent] = useState({
        start: new Date().toISOString().slice(0, 16),
        end: new Date().toISOString().slice(0, 16),
        summery: '',
        description: ''
    })

    const escFunction = useCallback((event) => {
        if (event.key === "Escape") {
            setIsEventShow(false)
        }
    }, []);

    useEffect(() => {
        document.addEventListener("keydown", escFunction, false);
        return () => {
            document.removeEventListener("keydown", escFunction, false);
        };
    }, [escFunction]);

    useEffect(() => {
        event.start = new Date(start);
        event.start.setMinutes(event.start.getMinutes() - event.start.getTimezoneOffset());
        setEvent({
            ...event,
            start: convertToInputDateValue(start),
            end: convertToInputDateValue(addMintes(start, 30)),
        })
    }, [start])

    const handleSave = () => {

        setIsEventShow(false)
    }


    return (
        <>
            <div className="overlay">

            </div>
            <Outside
                onClick={() => setIsEventShow(false)} >
                <div className="overlay-box">
                    <div className="event_container" >
                        <div className="event_form">

                            <div className="event_summary">
                                <label htmlFor="summary">Summary:</label>
                                <input
                                    type="text"
                                    id="summary"
                                    name="event-summary"
                                    value={event.summery}
                                    onChange={(e) => {
                                        alert(e.target.value)
                                    }}
                                />
                            </div>

                            <div className="event_description">
                                <label htmlFor="description">Descriptiom:</label>
                                <textarea
                                    type="text"
                                    id="summary"
                                    name="event-summary"
                                    value={event.summery}
                                    multiple
                                    onChange={(e) => {
                                        alert(e.target.value)
                                    }}
                                />
                            </div>

                            <div className="input_container event_date_start ">
                                <label htmlFor="start">Start:</label>
                                <input
                                    type="datetime-local"
                                    id="start"
                                    name="event-start"
                                    value={event.start}
                                    onChange={(e) => {
                                        alert(e.target.value)
                                    }}
                                // min="2018-01-01"
                                // max="2018-12-31"
                                />
                            </div>
                            <div className="input_container event_date_end">
                                <label htmlFor="start">End:</label>
                                <input
                                    type="datetime-local"
                                    id="end"
                                    name="event-end"
                                    value={event.end}
                                    onChange={(e) => {
                                        alert(e.target.value)
                                    }}
                                // min="2018-01-01"
                                // max="2018-12-31"
                                />
                            </div>

                            <div className="footer">
                                <button
                                    onClick={() => setIsEventShow(false)}
                                >Cancel</button>
                                <button
                                    onClick={() => setIsEventShow(false)}
                                >Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Outside>
        </>
    )
}

