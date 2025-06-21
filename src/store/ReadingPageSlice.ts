import { createSlice } from "@reduxjs/toolkit";
interface Read {
    demo: boolean,
    text: string
}
const initialState: Read = {
    demo: false,
    text: ""
};
const readingPageSlice = createSlice({
    name: "demo",
    initialState,
    reducers: {
        toggleDemo: (state) => {state.demo = !state.demo;},
        setDemo: (state, action: {payload: boolean}) => {
            state.demo = action.payload;
        },
        setText: (state, action: {payload: string}) => {
            state.text = action.payload
        }
} 
})
export const {toggleDemo, setDemo, setText} = readingPageSlice.actions
export default readingPageSlice.reducer