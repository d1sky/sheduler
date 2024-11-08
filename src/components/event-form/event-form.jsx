import { useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addEvent, deleteEvent, updateEvent } from '../../services/event-list-slice';
import { clearEvent, getEvent, setEvent } from '../../services/event-slice';
import './event-form.css';



export const EventForm = () => {
    const dispatch = useDispatch();
    const event = useSelector(getEvent)

    const summaryRef = useRef(null);


    const keyDownFunction = useCallback((e) => {
        if (e.key === "Escape") {
            summaryRef.current.blur()
            dispatch(clearEvent())
        }

        if (e.key === "Enter") {
            summaryRef.current.blur()
            handleSave()
        }
    }, [event]);


    useEffect(() => {
        document.addEventListener("keydown", keyDownFunction, false);
        return () => {
            document.removeEventListener("keydown", keyDownFunction, false);
        };
    }, [keyDownFunction]);


    const handleSave = () => {
        if (checkDate()) {
            return
        }

        if (event.id) {
            dispatch(updateEvent(event))
        } else {
            dispatch(addEvent(event))
        }
        dispatch(clearEvent())
    }

    const handleDelete = () => {
        if (event.id) {
            dispatch(deleteEvent(event?.id))
        }
        dispatch(clearEvent())
    }

    const handleChangeForm = (e) => {
        dispatch(setEvent({
            ...event,
            [e.target.name]: e.target.value
        }))
    }

    const checkDate = () => {
        return (event?.start >= event?.end && event?.end <= event?.start)
    }

    return (
        <div className="" >
            <div className="event_form">

                <div className="event_summary">
                    <label htmlFor="summary">Название:</label>
                    <input
                        autoFocus
                        type="text"
                        id="summary"
                        name="summary"
                        value={event?.summary}
                        onChange={handleChangeForm}
                        ref={summaryRef}
                    />
                </div>

                <div className="event_description">
                    <label htmlFor="description">Описание:</label>
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
                    <label htmlFor="start">Начало:</label>
                    <input
                        type="datetime-local"
                        id="start"
                        name="start"
                        value={event?.start}
                        onChange={handleChangeForm}
                    />
                </div>

                <div className="input_container event_date_end">
                    <label htmlFor="start">Окончание:</label>
                    <input
                        type="datetime-local"
                        id="end"
                        name="end"
                        value={event?.end}
                        onChange={handleChangeForm}
                        min={event?.start}
                    />
                </div>

                {checkDate() &&
                    <div className="event-error">
                        Дата начала не может быть больше чем дата окончания!
                    </div>
                }

                <div className="footer">
                    {event?.id &&
                        <button
                            onClick={handleDelete}>
                            Удалить
                        </button>
                    }
                    <button
                        onClick={() => dispatch(clearEvent())}>
                        Отмена
                    </button>
                    <button
                        // disabled={checkDate()}
                        onClick={handleSave}>
                        Сохранить
                    </button>
                </div>
            </div>
        </div>
    )
}

