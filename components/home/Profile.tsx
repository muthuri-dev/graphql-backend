import React from "react";

export default function Profile() {
  return (
    <div>
      <div className="fixed top-0 right-0 bottom-0 left-0 bg-gray-800 bg-opacity-50 items-center justify-center transition-all duration-300 ease-in-out">
        <div className="bg-white p-8 w-96 max-w-full h-full overflow-y-auto transform translate-x-full">
          <p className="text-lg font-semibold mb-4">This is a popup!</p>
          <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
