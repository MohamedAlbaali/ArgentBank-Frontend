import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    isEdit: false,
}
export const editSlice = createSlice({
    name: 'edit',
    initialState,
    reducers: {
        HandelEdit: ((state) => {
            state.isEdit = true
        }),
        HandelCancelEdit: ((state) => {
            state.isEdit = false
        }),
    },
})

export const {HandelEdit, HandelCancelEdit } = editSlice.actions
export default editSlice.reducer