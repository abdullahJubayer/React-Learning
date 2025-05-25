import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./TodoSlice";
import { useSelector } from "react-redux";

const ReduxStorage = configureStore({
  reducer: {
    todos: todoSlice,
  },
});

export type AppDispatch = typeof ReduxStorage.dispatch;
export default ReduxStorage;

export type RootState = ReturnType<typeof ReduxStorage.getState>;
export const useAppSelector = useSelector.withTypes<RootState>();
