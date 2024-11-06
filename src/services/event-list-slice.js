import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    entities: [],
}

export const eventListSlice = createSlice({
    name: 'eventList',
    initialState,
    reducers: {
        addEvent: ((state, action) => {
            state.entities.push({ ...action.payload });
        }),
        getEventByDate: ((state, action) => {
            state.entities.find((event) => {
                console.log(event.start === action.payload);
                if (event.start === action.payload) {

                    return event
                }
            })
        }),
        updateEvent: ((state, action) => {
            state.entities = state.entities.map((event) => {
                if (event.id === action.payload.id) {
                    return action.payload
                }
                return event
            })
        }),
        deleteEvent: ((state, action) => {
            state.entities = state.entities.filter((event) => {
                return event.id !== action.payload
            })
        }),
    }
})

export const { addEvent, updateEvent, deleteEvent } = eventListSlice.actions;
export const getEventList = (state) => state.event.entities;

export const getEventByDate = (state, payload) => {
    if (payload) {
        return state.event.entities.find((event) => {
            return event.start === payload
        })
    }
}

export default eventListSlice.reducer