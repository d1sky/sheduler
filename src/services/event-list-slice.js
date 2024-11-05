import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    entity: {
        start: new Date().toISOString().slice(0, 16),
        end: new Date().toISOString().slice(0, 16),
        summery: '',
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
        setIsEventShow: ((state, action) => {
            state.isEventShow = action.payload;
        }),
    }
})

export const { setEvent, setIsEventShow } = eventSlice.actions;
export const getIsEventShow = (state) => state.event.isEventShow;
export const getEvent = (state) => state.event.entity;

export default eventSlice.reducer