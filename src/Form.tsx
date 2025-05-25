import { useRef } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./ReduxStorage";
import { addTodo, clear } from "./TodoSlice";

export const Form: React.FC = () => {
  const text = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch<AppDispatch>();

  const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const value = text.current?.value.trim();
      if (value) {
        dispatch(addTodo(value));
        text.current!.value = "";
      }
    }
  };

  return (
    <form className="max-w-sm mx-auto pt-12">
      <div className="relative flex">
        <div className="absolute inset-y-0 start-0 flex items-center ps-4">
          <img
            src="https://static-00.iconduck.com/assets.00/task-icon-512x455-65114hdn.png"
            alt="more-btn"
            className="w-4 h-4"
          />
        </div>
        <input
          ref={text}
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          placeholder="Add a task..."
          onKeyDown={handleEnter}
        />
        <button
          className="text-white px-6 bg-gray-700 rounded-md ms-2 whitespace-nowrap"
          onClick={(e) => {
            e.preventDefault();
            dispatch(clear());
          }}
        >
          Clear all
        </button>
      </div>
    </form>
  );
};
