import React from "react";
import { useQuery } from "@apollo/client";
import { GET_USER } from "@/graphql/queries";

export default function User({ userId }: { userId: string }) {
  const { data } = useQuery(GET_USER, { variables: { id: userId } });
  return (
    <>
      <h3>{data?.user.name}</h3>
    </>
  );
}
