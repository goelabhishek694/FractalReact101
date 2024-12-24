import {createSlice} from "@reduxjs/toolkit";
const counterSlice = createSlice({
    name: "counterSlice",
    initialState:{
        count:0,
        msg:"hello"
    }
});

export default counterSlice;