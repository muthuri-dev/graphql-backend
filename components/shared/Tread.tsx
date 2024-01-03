import React from "react";
import { useQuery } from "@apollo/client";
import { GET_TREDING_BLOGS } from "@/graphql/queries";
import LoadingSkeleton from "./LoadingSkeleton";
import { Blog } from "@prisma/client";
export default function Tread() {
  const { data, loading, error } = useQuery(GET_TREDING_BLOGS);
  const trending: Blog[] = data?.blog;
  console.log(trending);
  if (loading) return <LoadingSkeleton />;
  if (error) return <p>Server error</p>;

  return <div>Tread</div>;
}
