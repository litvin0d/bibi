import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isInitial: true,
};

export const initialStartSlice = createSlice({
    name: "isInitialStart",
    initialState,
    reducers: {
        setInitialState(state) {
            state.isInitial = false;
        }
    },
});

export const { setInitialState } = initialStartSlice.actions;

export default initialStartSlice.reducer;