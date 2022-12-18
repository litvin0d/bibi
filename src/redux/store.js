import { configureStore } from "@reduxjs/toolkit";

import initialStartReducer from "./initialStartSlice";
import addCarReducer from "./addCarSlice";

export const store = configureStore({
    reducer: {
        initialStartReducer,
        addCarReducer,
    },
});