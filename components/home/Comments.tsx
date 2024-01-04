import React from "react";
import { IoPersonCircle } from "react-icons/io5";
import { useQuery } from "@apollo/client";
import { GET_COMMENTS } from "@/graphql/queries";

export default function Comments({ blogId }: { blogId: string }) {
  const { data } = useQuery(GET_COMMENTS, { variables: { blogId } });
  // console.log(data?.comments);
  console.log(blogId);
  return (
    <div>
      <div className="w-full bg-white rounded-lg border p-2 my-4 mx-6">
        <h3 className="font-bold">Comments</h3>

        <form>
          <div className="flex flex-col">
            <div className="border rounded-md p-3 ml-3 my-3">
              <div className="flex gap-3 items-center">
                <IoPersonCircle
                  className="object-cover w-8 h-8 rounded-full 
                            border-2 border-emerald-400  shadow-emerald-400
                            "
                />
                <h3 className="font-bold">User name</h3>
              </div>

              <p className="text-gray-600 mt-2">this is sample commnent</p>
            </div>
            <div className="border rounded-md p-3 ml-3 my-3">
              <div className="flex gap-3 items-center">
                <IoPersonCircle
                  className="object-cover w-8 h-8 rounded-full 
                            border-2 border-emerald-400  shadow-emerald-400"
                />
                <h3 className="font-bold">User name</h3>
              </div>
              <p className="text-gray-600 mt-2">this is sample commnent</p>
            </div>
          </div>
          <div className="w-full px-3 my-2">
            <textarea
              className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
              name="body"
              placeholder="Type Your Comment"
              required
            ></textarea>
          </div>
          <div className="w-full flex justify-end px-3">
            <input
              type="submit"
              className="px-2.5 py-1.5 rounded-md text-white text-sm bg-indigo-500"
              value="Post Comment"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
