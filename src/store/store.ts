import { configureStore } from "@reduxjs/toolkit";
import demoReducer from "./ReadingPageSlice"
export const store = configureStore({
    reducer: {
        demo: demoReducer,
    }
})
export type AppStore = typeof store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;