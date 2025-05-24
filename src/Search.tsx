import React, { useEffect, useRef, useState } from "react";
import { SearchProps } from "./Body";

export const Search: React.FC<SearchProps> = ({ searchCallback }) => {
  const [suggestion, setSuggestion] = useState<Array<string>>([]);
  const [filterSuggestion, setFilterSuggestion] = useState(suggestion);
  const [searchText, setSearchText] = useState("");
  const [isFocus, setIsFocus] = useState(false);

  const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (searchText.trim() === "") {
      searchCallback(searchText);
    } else if (event.key === "Enter") {
      event.preventDefault();
      if (searchText.trim()) {
        const isFound = suggestion.find((s) => s == searchText);
        if (!isFound) {
          setSuggestion((pre) => [...pre, searchText]);
        }
      }
      searchCallback(searchText);
    }
  };

  useEffect(() => {
    const value = searchText;
    const filterValue = suggestion.filter((item) =>
      item.toLocaleLowerCase().match(value.toLocaleLowerCase())
    );
    setFilterSuggestion(filterValue);
  }, [searchText]);

  return (
    <div className="max-w-sm mx-auto">
      <div className="flex items-center">
        <img
          className="absolute w-8 h-4 ps-4"
          src="https://static-00.iconduck.com/assets.00/search-icon-512x497-4nz4jz2p.png"
          alt="search-icon"
        />
        <input
          value={searchText}
          type="text"
          className="border text-sm rounded-md w-full py-2 ps-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          placeholder="Search..."
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          onKeyDown={handleEnter}
          onFocus={() => setIsFocus(true)}
          onBlur={() => {
            setTimeout(() => {
              setIsFocus(false);
            }, 50);
          }}
        />
      </div>
      <div className="dark:bg-gray-700 rounded-md">
        {isFocus &&
          filterSuggestion.map((item) => (
            <div key={item}>
              <hr className="h-px bg-gray-200 border-0 dark:bg-gray-600" />
              <p
                onClick={(e) => {
                  e.preventDefault();
                  setSearchText(item);
                  searchCallback(item);
                }}
                className="text-white dark:bg-gray-700 rounded-md w-full py-2 ps-10 hover:bg-gray-800 cursor-pointer"
              >
                {item}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};
