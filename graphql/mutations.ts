import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation Mutation($name: String, $email: String, $image: String) {
    createUser(name: $name, email: $email, image: $image) {
      id
      name
      image
      email
    }
  }
`;
