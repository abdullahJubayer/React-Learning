import { useState } from "react";
import { Form } from "./Form";
import { ListItem } from "./ListItem";
import { TodoModel } from "./TodoSlice";
import { useAppSelector } from "./ReduxStorage";

export type ListItemProps = {
  data: TodoModel;
};

export function Body() {
  const items = useAppSelector((state) => state.todos.todoList);

  return (
    <div className="bg-pink-500 h-screen">
      <div className="bg-gray-600 w-2/3 h-screen rounded-md shadow-md mx-auto">
        <Form />
        {items.map(
          (data) =>
            data.status === "Completed" && (
              <ListItem key={data.updatedAt} data={data} />
            )
        )}
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        {items.map(
          (data) =>
            data.status != "Completed" && (
              <ListItem key={data.updatedAt} data={data} />
            )
        )}
      </div>
    </div>
  );
}
