import { createSlice } from '@reduxjs/toolkit';

function compareFn(a, b) {
    if (a.start < b.start) {
        return -1;
    } else if (a.start > b.start) {
        return 1;
    }
    // a must be equal to b
    return 0;
}

const initialState = {
    entities: [],
}

export const eventListSlice = createSlice({
    name: 'eventList',
    initialState,
    reducers: {
        addEvent: ((state, action) => {
            state.entities.push({ ...action.payload, id: new Date().getTime() });

            state.entities = state.entities.sort(compareFn)
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

            state.entities = state.entities.sort(compareFn)
        }),
        deleteEvent: ((state, action) => {
            state.entities = state.entities.filter((event) => {
                return event.id !== action.payload.id
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