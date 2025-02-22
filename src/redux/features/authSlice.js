import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    isLoged: false,
    token: null,
}
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        HandelLogin: ((state, action) => {
            state.isLoged = true,
            state.token = action.payload
        }),
        HandelLoggout: ((state) => {
            state.isLoged = false
            state.token = null
        }),
    },
})

export const {HandelLogin, HandelLoggout } = authSlice.actions
export default authSlice.reducer