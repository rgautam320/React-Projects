import React from "react";
import { useDispatch } from "react-redux";
import { removeToDo, updateToDo } from "../store/todoSlice";

import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

const Item = ({ id, todo, completed }) => {
    const dispatch = useDispatch();
    const strikeItem = () => {
        dispatch(
            updateToDo({
                id: id,
                changes: { completed: !completed },
            })
        );
    };

    const deleteItem = () => {
        dispatch(removeToDo(id));
    };

    return (
        <>
            <div className="each-todo row my-3 py-2" key={id}>
                <div className="col-md-10 col-12 py-1">
                    {completed ? (
                        <h3>
                            <strike>{todo}</strike>
                        </h3>
                    ) : (
                        <h3>{todo}</h3>
                    )}
                </div>
                <div className="col-md-1 col-4 d-flex flex-row align-items-center mx-auto">
                    <button
                        type="button"
                        className="btn btn-sm btn-success"
                        onClick={() => strikeItem()}
                        data-toggle="tooltip"
                        data-placement="right"
                        title="Completed"
                    >
                        <CheckCircleIcon />
                    </button>
                </div>

                <div className="col-md-1 col-4 d-flex flex-row align-items-center mx-auto">
                    <button
                        type="button"
                        className="btn btn-sm btn-danger"
                        onClick={() => deleteItem()}
                        data-toggle="tooltip"
                        data-placement="right"
                        title="Delete"
                    >
                        <HighlightOffIcon />
                    </button>
                </div>
            </div>
        </>
    );
};

export default Item;
