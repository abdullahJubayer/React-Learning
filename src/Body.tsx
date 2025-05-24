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
import { Search } from "./Search";

export type FormProps = {
  addCallback: (text: string) => void;
  clearCallback: () => void;
};
export type ListItemProps = {
  data: TodoModel;
  removeCallback: (todo: TodoModel) => void;
  completeCallback: (todo: TodoModel) => void;
};

export type SearchProps = {
  searchCallback: (text: string) => void;
};

export function Body() {
  const [originalItems, setOriginalItems] = useState<Array<TodoModel>>(
    getTodos()
  );
  const [items, setItems] = useState<Array<TodoModel>>(originalItems);

  useEffect(() => {
    setItems(originalItems);
  }, [originalItems]);

  const add = (todoName: string) => {
    const updatedItems = addTodo(todoName);
    setOriginalItems(updatedItems);
  };

  const update = (updatedTodo: TodoModel) => {
    const updatedItems = updateTodo(updatedTodo);
    setOriginalItems(updatedItems);
  };

  const deleteFromTodo = (deletedTodo: TodoModel) => {
    const updatedItems = deleteTodo(deletedTodo);
    setOriginalItems(updatedItems);
  };

  const clearAll = () => {
    clearTodo();
    setOriginalItems([]);
  };

  const filterItems = (search: string) => {
    const filter = originalItems.filter((item) => item.name.match(search));
    setItems(filter);
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
        <Search searchCallback={filterItems} />
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
