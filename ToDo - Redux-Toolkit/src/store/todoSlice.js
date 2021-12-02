import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

export const todoAdapter = createEntityAdapter();
export const todoSelector = todoAdapter.getSelectors((state) => state.todo);

const todoSlice = createSlice({
    name: "todo",
    initialState: todoAdapter.getInitialState(),
    reducers: {
        addToDo: todoAdapter.addOne,
        removeToDo: todoAdapter.removeOne,
        clearList: todoAdapter.removeAll,
        updateToDo: todoAdapter.updateOne,
    },
});

export const { addToDo, removeToDo, clearList, updateToDo } = todoSlice.actions;
export default todoSlice.reducer;
