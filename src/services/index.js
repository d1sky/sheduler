import { configureStore } from '@reduxjs/toolkit';
import activeDate from './active-date-slice';
import eventList from './event-list-slice';
import event from './event-slice';

export const store = configureStore({
  reducer: {
    event,
    eventList,
    activeDate
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  devTools: true,
})