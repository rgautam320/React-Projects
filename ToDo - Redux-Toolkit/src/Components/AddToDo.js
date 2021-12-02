import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDo } from "../store/todoSlice";
import { nanoid } from "@reduxjs/toolkit";

const AddToDo = () => {
    const dispacth = useDispatch();
    const [todo, setToDo] = useState("");

    const submitToDo = () => {
        if (todo.length > 0) {
            dispacth(addToDo({ id: nanoid(), todo: todo, completed: false }));
        }
        setToDo("");
    };
    return (
        <>
            <div className="col-9">
                <input
                    className="form-control py-3 px-4 todo-input"
                    placeholder="Write Anything to Add"
                    type="text"
                    value={todo}
                    onChange={(e) => setToDo(e.target.value)}
                />
            </div>
            <div className="col-3">
                <button
                    onClick={submitToDo}
                    className="btn btn-primary add-btn"
                >
                    Add
                </button>
            </div>
        </>
    );
};

export default AddToDo;
