import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Status = "InProgress" | "Completed";

export type TodoModel = {
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  status: Status;
};

const initialState: Array<TodoModel> = [];

const TodoSlice = createSlice({
  name: "todo",
  initialState: {
    todoList: initialState,
  },
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const todo: TodoModel = {
        name: action.payload,
        description: "",
        createdAt: Date().toLocaleString(),
        updatedAt: Date().toLocaleString(),
        status: "InProgress",
      };
      state.todoList = [...state.todoList, todo];
    },
    updateTodo: (state, action: PayloadAction<TodoModel>) => {
      const dartyIndex = state.todoList.findIndex(
        (item) => item.name == action.payload.name
      );
      state.todoList[dartyIndex] = action.payload;
    },
    deleteTodo: (state, action: PayloadAction<TodoModel>) => {
      const filterItems = state.todoList.filter(
        (item) => item.name !== action.payload.name
      );
      state.todoList = filterItems;
    },

    clear: (state) => {
      state.todoList = [];
    },
  },
});

export const { addTodo, updateTodo, deleteTodo, clear } = TodoSlice.actions;
export default TodoSlice.reducer;
