import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    date: new Date(),
}

export const activeDateSlice = createSlice({
    name: 'activeDate',
    initialState,
    reducers: {
        setAсtiveDate: ((state, action) => {
            state.date = action.payload;
        }),
    }
})

export const { setAсtiveDate } = activeDateSlice.actions;
export const getActiveDate = (state) => state.activeDate.date;

export default activeDateSlice.reducer