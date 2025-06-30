import { createSlice } from "@reduxjs/toolkit";
interface Types {
    focusMode: boolean    
}
const initialState: Types = {
    focusMode: false
}
const focusMode = createSlice({
    name: "focus",
    initialState,
    reducers: {
        toggleFocus: (state) => {state.focusMode = !state.focusMode}
    }
})
export const { toggleFocus } = focusMode.actions
export default focusMode.reducer