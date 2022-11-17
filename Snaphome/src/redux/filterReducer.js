import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    query: {
        search: "",
        location: "",
        move: null,
        price: "",
        property: "",
    },
    pagination: 9,
};

export const filterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        saveQuery: (state, action) => {
            state.query = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { saveQuery } = filterSlice.actions;

export default filterSlice.reducer;
