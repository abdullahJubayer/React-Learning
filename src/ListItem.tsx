import React from "react";
import { ListItemProps } from "./Body";

export const ListItem: React.FC<ListItemProps> = ({
  data,
  removeCallback,
  completeCallback,
}) => {
  return (
    <div className="max-w-sm mx-auto my-4 flex justify-between it items-baseline">
      <input
        type="checkbox"
        name="isComplete"
        checked={data.status === "Completed" ? true : false}
        onChange={(e) => {
          const updated = data;
          updated.status = e.target.checked ? "Completed" : "InProgress";
          completeCallback(updated);
        }}
      />
      <div className="mx-4">
        <p
          className={`text-md text-gray-300 ${
            data.status === "Completed" ? "line-through" : ""
          }`}
        >
          {data.name}
        </p>
        <p className="text-xs text-gray-400">{data.createdAt}</p>
      </div>
      <img
        src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png"
        alt="more-btn"
        className="w-5 h-4"
        onClick={() => {
          removeCallback(data);
        }}
      />
    </div>
  );
};
