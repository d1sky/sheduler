import { configureStore } from '@reduxjs/toolkit';
import event from './event-slice';



export const store = configureStore({
  reducer: {
    event,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  devTools: true,
})