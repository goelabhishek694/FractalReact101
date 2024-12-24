import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

const store = configureStore({
    reducer: {
        counterState: counterSlice.reducer
    }
});

export default store 