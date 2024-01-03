import React from "react";

interface IUserButton {
  children: String;
  type: "outline" | "solid";
  method: () => void;
}
export default function Button({ children, method, type }: IUserButton) {
  return (
    <div>
      <button
        onClick={method}
        className={
          type === "outline"
            ? "bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            : "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        }
      >
        {children}
      </button>
    </div>
  );
}
