import { gql } from "@apollo/client";

export const GET_TREDING_BLOGS = gql`
  query Query {
    blogs {
      id
      title
      imageUrl
      category
      updatedAt
    }
  }
`;
