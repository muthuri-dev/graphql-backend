import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query Author {
    users {
      id
      name
      email
      followers
      isAuthor
      createdAt
      updatedAt
    }
  }
`;
