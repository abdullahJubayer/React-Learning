import { useEffect, useState } from "react";
import { Form } from "./Form";
import { ListItem } from "./ListItem";
import {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo,
  clearTodo,
  TodoModel,
} from "./LocalStorageHelper";

export type FormProps = {
  addCallback: (text: string) => void;
  clearCallback: () => void;
};
export type ListItemProps = {
  data: TodoModel;
  removeCallback: (todo: TodoModel) => void;
  completeCallback: (todo: TodoModel) => void;
};

export function Body() {
  const [items, setItems] = useState<Array<TodoModel>>(getTodos());

  const add = (todoName: string) => {
    const updatedItems = addTodo(todoName);
    setItems(updatedItems);
  };

  const update = (updatedTodo: TodoModel) => {
    const updatedItems = updateTodo(updatedTodo);
    setItems(updatedItems);
  };

  const deleteFromTodo = (deletedTodo: TodoModel) => {
    const updatedItems = deleteTodo(deletedTodo);
    setItems(updatedItems);
  };

  const clearAll = () => {
    clearTodo();
    setItems([]);
  };

  return (
    <div className="bg-pink-500 h-screen">
      <div className="bg-gray-600 w-2/3 h-screen rounded-md shadow-md mx-auto">
        <Form addCallback={add} clearCallback={clearAll} />
        {items.map(
          (data) =>
            data.status === "Completed" && (
              <ListItem
                key={data.updatedAt}
                data={data}
                completeCallback={update}
                removeCallback={deleteFromTodo}
              />
            )
        )}
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        {items.map(
          (data) =>
            data.status != "Completed" && (
              <ListItem
                key={data.updatedAt}
                data={data}
                completeCallback={update}
                removeCallback={deleteFromTodo}
              />
            )
        )}
      </div>
    </div>
  );
}
