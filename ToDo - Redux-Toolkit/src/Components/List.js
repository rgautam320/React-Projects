import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { todoSelector } from "../store/todoSlice";
import Item from "../Components/Item";
import { clearList } from "../store/todoSlice";

const List = () => {
    const todos = useSelector(todoSelector.selectEntities);
    const count = useSelector(todoSelector.selectTotal);

    const dispatch = useDispatch();

    let todosList = [];
    for (const id in todos) {
        if (Object.hasOwnProperty.call(todos, id)) {
            const element = todos[id];
            todosList.push(
                <Item
                    key={element.id}
                    id={element.id}
                    todo={element.todo}
                    completed={element.completed}
                />
            );
        }
    }

    const deleteAll = () => {
        dispatch(clearList(todos));
    };

    return (
        <>
            <div className="row mb-3">
                <div className="col-12">
                    <h1 className="list-header">Items in List</h1>
                    {todosList}
                    <div className="row">
                        <div className="col-6">
                            <h3 className="total-count">Count: {count}</h3>
                        </div>
                        <div className="col-6">
                            <button
                                className="btn btn-danger delete-all-btn"
                                onClick={deleteAll}
                            >
                                Delete All
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default List;
