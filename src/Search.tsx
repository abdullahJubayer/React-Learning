import React, { useRef } from "react";
import { SearchProps } from "./Body";

export const Search: React.FC<SearchProps> = ({ searchCallback }) => {
  const searchText = useRef<HTMLInputElement>(null);
  const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const value = searchText.current?.value.trim();
      searchCallback(!value ? "" : value);
    }
  };
  return (
    <div className="max-w-sm mx-auto">
      <div className="flex items-center">
        <img
          className="absolute w-8 h-4 ps-4"
          src="https://static-00.iconduck.com/assets.00/search-icon-512x497-4nz4jz2p.png"
          alt="search-icon"
        />
        <input
          ref={searchText}
          type="text"
          className="border text-sm rounded-md w-full py-2 ps-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          placeholder="Search..."
          onKeyDown={handleEnter}
        />
      </div>
    </div>
  );
};
