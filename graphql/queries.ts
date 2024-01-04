import { gql } from "@apollo/client";

export const GET_TREDING_BLOGS = gql`
  query Query {
    users {
      id
      name
      blogs {
        title
        content
        updatedAt
      }
    }
  }
`;
export const GET_BLOGS = gql`
  query Query {
    blogs {
      id
      title
      content
      imageUrl
      userId
      updatedAt
      category
      likes {
        id
        like
        blogId
      }
      comments {
        id
        comment
        blogId
        updatedAt
      }
      tags {
        id
        tag
        blogId
      }
    }
  }
`;
export const GET_USERS = gql`
  query Query($id: ID!) {
    user(id: $id) {
      name
    }
  }
`;
