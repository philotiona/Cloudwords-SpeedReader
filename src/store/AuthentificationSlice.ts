import { createSlice} from "@reduxjs/toolkit";

interface Log {
    logged: boolean
}  
const initialState: Log = {
    logged: false 
} 
const AuthentificationSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        toggleLogged: (state) => {state.logged = !state.logged} 
    }
})
export const {toggleLogged} = AuthentificationSlice.actions
export default AuthentificationSlice.reducer