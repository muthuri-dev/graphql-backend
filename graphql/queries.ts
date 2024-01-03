import { gql } from "@apollo/client";

export const GET_TREDING_BLOGS = gql`
  query Query {
    users {
      id
      name
      blogs {
        title
        updatedAt
      }
    }
  }
`;
