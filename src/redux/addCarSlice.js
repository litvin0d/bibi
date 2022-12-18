import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    brand: "",
    model: "",
    year: "",
    fuel: "",
};

export const addCarSlice = createSlice({
    name: "isInitialStart",
    initialState,
    reducers: {
        setStatusCar(state) {
            state = true;
        },
        setBrandCar(state, action) {
            state.brand = action.payload;
        },
        setModelCar(state, action) {
            state.model = action.payload;
        },
        setYearCar(state, action) {
            state.year = action.payload;
        },
        setFuelCar(state, action) {
            state.fuel = action.payload;
        },
    },
});

export const { setStatusCar, setBrandCar, setModelCar, setYearCar, setFuelCar } = addCarSlice.actions;

export default addCarSlice.reducer;