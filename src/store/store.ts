import { configureStore } from "@reduxjs/toolkit";
import demoReducer from "./ReadingPageSlice"
import focusReducer from "./FocusMode"

export const store = configureStore({
    reducer: {
        demo: demoReducer,
        focus: focusReducer
    }
})
export type AppStore = typeof store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;