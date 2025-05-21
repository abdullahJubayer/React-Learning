type Status = "InProgress" | "Completed";

export type TodoModel = {
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  status: Status;
};

let todos: Array<TodoModel> = [];

export function getTodos(): Array<TodoModel> {
  const items = localStorage.getItem("todos");
  const todoList = items ? JSON.parse(items) : [];
  todos = todoList;
  return todoList;
}

function save() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

export function addTodo(todoName: string): Array<TodoModel> {
  const todo: TodoModel = {
    name: todoName,
    description: "",
    createdAt: Date().toLocaleString(),
    updatedAt: Date().toLocaleString(),
    status: "InProgress",
  };

  todos.push(todo);
  save();
  return todos;
}

export function updateTodo(updatedTodo: TodoModel): Array<TodoModel> {
  const dartyIndex = todos.findIndex((item) => item.name == updatedTodo.name);
  todos[dartyIndex] = updatedTodo;
  save();
  return todos;
}

export function deleteTodo(deletedTodo: TodoModel): Array<TodoModel> {
  const updatedItems = todos.filter((item) => item.name !== deletedTodo.name);
  todos = updatedItems;
  save();
  return todos;
}

export function clearTodo() {
  localStorage.removeItem("todos");
}
