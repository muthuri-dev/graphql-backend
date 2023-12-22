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

export const GET_BLOGS = gql`
  query Blog {
    blogs {
      id
      title
      description
      imageUrl
      likes
      category
      createdAt
      updatedAt
    }
  }
`;
export const GET_TAGS = gql`
  query Tag {
    tags {
      id
      tagName
      createdAt
      updatedAt
    }
  }
`;
export const GET_COMMENTS = gql`
  query Comment {
    comments {
      id
      comment
      createdAt
      updatedAt
    }
  }
`;
