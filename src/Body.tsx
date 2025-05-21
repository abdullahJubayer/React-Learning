import { useEffect, useState } from "react";
import { Form } from "./Form";
import { ListItem } from "./ListItem";
import { getTodos, createTodo, TodoModel } from "./LocalStorageHelper";

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
  const [items, setItems] = useState<Array<TodoModel>>(getTodos);
  useEffect(() => {
    createTodo(items);
  }, [items]);

  const addTodo = (todoName: string) => {
    const todo: TodoModel = {
      name: todoName,
      description: "",
      createdAt: Date().toLocaleString(),
      updatedAt: Date().toLocaleString(),
      status: "InProgress",
    };
    setItems([...items, todo]);
  };

  const updateTodo = (updateTodo: TodoModel) => {
    const dartyIndex = items.findIndex((item) => item.name == updateTodo.name);
    items[dartyIndex] = updateTodo;
    setItems([...items]);
  };

  const deleteFromTodo = (deletedTodo: TodoModel) => {
    const updatedItems = items.filter((item) => item.name !== deletedTodo.name);
    setItems([...updatedItems]);
  };

  const clearAllTodos = () => {
    const updatedItems = items.filter((item) => item.name === "");
    setItems([...updatedItems]);
  };

  return (
    <div className="bg-pink-500 h-screen">
      <div className="bg-gray-600 w-2/3 h-screen rounded-md shadow-md mx-auto">
        <Form addCallback={addTodo} clearCallback={clearAllTodos} />
        {items.map(
          (data) =>
            data.status === "Completed" && (
              <ListItem
                key={data.updatedAt}
                data={data}
                completeCallback={updateTodo}
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
                completeCallback={updateTodo}
                removeCallback={deleteFromTodo}
              />
            )
        )}
      </div>
    </div>
  );
}
