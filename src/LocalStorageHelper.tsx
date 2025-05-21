type Status = "InProgress" | "Completed";

export type TodoModel = {
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  status: Status;
};

export function getTodos(): Array<TodoModel> {
  const items = localStorage.getItem("todos");
  return items ? JSON.parse(items) : [];
}

export function createTodo(newTodos: Array<TodoModel>) {
  localStorage.setItem("todos", JSON.stringify(newTodos));
}

// export function updateTodo(todos: Array<TodoModel>, updatedTodo: TodoModel) {
//   const dartyIndex = todos.findIndex((item) => item.name == updateTodo.name);
//   todos[dartyIndex] = updatedTodo;
//   localStorage.setItem("todos", JSON.stringify(todos));
// }

// export function deleteTodo(todos: Array<TodoModel>, deletedTodo: TodoModel) {
//   const deletedIndex = todos.findIndex((item) => item.name == deletedTodo.name);
//   localStorage.setItem("todos", JSON.stringify(todos));
// }

// export function clear() {
//   localStorage.removeItem("todos");
// }
