import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addEvent } from '../../services/event-list-slice';
import { getEvent, setEvent, setIsEventShow } from '../../services/event-slice';
import './event.css';



export const Event = () => {
    const dispatch = useDispatch();
    const event = useSelector(getEvent)


    const escFunction = useCallback((event) => {
        if (event.key === "Escape") {
            dispatch(setIsEventShow(false))
        }
    }, []);

    useEffect(() => {
        document.addEventListener("keydown", escFunction, false);
        return () => {
            document.removeEventListener("keydown", escFunction, false);
        };
    }, [escFunction]);

    const handleSave = () => {
        dispatch(addEvent(event))
        dispatch(setIsEventShow(false))
    }

    const handleChangeForm = (e) => {
        dispatch(setEvent({
            ...event,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <div className="" >
            <div className="event_form">

                <div className="event_summary">
                    <label htmlFor="summary">Summary:</label>
                    <input
                        type="text"
                        id="summary"
                        name="summary"
                        value={event?.summary}
                        onChange={handleChangeForm}
                    />
                </div>

                <div className="event_description">
                    <label htmlFor="description">Descriptiom:</label>
                    <textarea
                        type="text"
                        id="description"
                        name="description"
                        value={event?.description}
                        multiple
                        onChange={handleChangeForm}
                    />
                </div>

                <div className="input_container event_date_start">
                    <label htmlFor="start">Start:</label>
                    <input
                        type="datetime-local"
                        id="start"
                        name="start"
                        value={event?.start}
                        onChange={handleChangeForm}
                    // min="2018-01-01"
                    // max="2018-12-31"
                    />
                </div>

                <div className="input_container event_date_end">
                    <label htmlFor="start">End:</label>
                    <input
                        type="datetime-local"
                        id="end"
                        name="end"
                        value={event?.end}
                        onChange={handleChangeForm}
                        min={event?.start}
                    // max="2018-12-31"
                    />
                </div>

                <div className="footer">
                    <button
                        onClick={() => dispatch(setIsEventShow(false))}
                    >Cancel</button>
                    <button
                        onClick={handleSave}
                    >Save</button>
                </div>
            </div>
        </div>
    )
}

