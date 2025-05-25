import React from "react";
import { ListItemProps } from "./Body";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./ReduxStorage";
import { updateTodo, deleteTodo, TodoModel } from "./TodoSlice";

export const ListItem: React.FC<ListItemProps> = ({ data }) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="max-w-sm mx-auto my-4 flex justify-between it items-baseline">
      <input
        type="checkbox"
        name="isComplete"
        checked={data.status === "Completed" ? true : false}
        onChange={(e) => {
          const updated: TodoModel = {
            ...data,
            status: e.target.checked ? "Completed" : "InProgress",
          };
          dispatch(updateTodo(updated));
        }}
      />
      <div className="mx-4">
        <p
          className={`text-md text-gray-300 ${
            data.status === "Completed" ? "line-through" : ""
          }`}
        >
          {data.name}
        </p>
        <p className="text-xs text-gray-400">{data.createdAt}</p>
      </div>
      <img
        src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png"
        alt="more-btn"
        className="w-5 h-4"
        onClick={() => {
          dispatch(deleteTodo(data));
        }}
      />
    </div>
  );
};
