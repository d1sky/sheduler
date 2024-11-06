import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    entity: {
        start: new Date().toISOString().slice(0, 16),
        end: new Date().toISOString().slice(0, 16),
        summary: '',
        description: '',
    },
    isEventShow: false
}

export const eventSlice = createSlice({
    name: 'event',
    initialState,
    reducers: {
        setEvent: ((state, action) => {
            state.entity = { ...action.payload };
        }),
        clearEvent: ((state) => {
            state.entity = { ...initialState.entity };
            state.isEventShow = false;
        }),
        setIsEventShow: ((state, action) => {
            state.isEventShow = action.payload;
        }),
    }
})

export const { setEvent, setIsEventShow, clearEvent } = eventSlice.actions;
export const getIsEventShow = (state) => state.event.isEventShow;
export const getEvent = (state) => state.event.entity;

export default eventSlice.reducer