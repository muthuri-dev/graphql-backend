import React from "react";
import { auth } from "@/auth";
import Button from "../shared/Button";
export default async function Profile() {
  //pop up

  //authenticating user
  const session = await auth();
  if (!session)
    return (
      <>
        <Button
          children="Get Started"
          type="outline"
          method={() => console.log("not logged in")}
        />
      </>
    );
  return (
    <div>
      <Button
        children={session.user?.name}
        type="outline"
        method={() => console.log("not logged in")}
      />
      <div className="fixed top-0 right-0 bottom-0 left-0 bg-gray-800 bg-opacity-50 items-center justify-center transition-all duration-300 ease-in-out">
        <div className="bg-white p-8 w-96 max-w-full h-full overflow-y-auto transform translate-x-full">
          <p className="text-lg font-semibold mb-4">This is a popup!</p>
          <button
            // onClick={handleClose}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

//  <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center h-screen">
//       <div className="bg-white p-8 rounded shadow-md">
//         <p className="text-lg font-semibold mb-4">This is a nice popup!</p>

//         <button
//           //   onClick={onClose}
//           className="bg-red-500 text-white px-4 py-2 rounded  focus:outline-none focus:ring focus:border-red-300"
//         >
//           logout
//         </button>
//       </div>
//     </div>
