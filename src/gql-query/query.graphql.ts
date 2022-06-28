import { gql } from "@apollo/client";

export const getAllUsers = gql`
  query getAllUsers {
    users {
      id
      name
      username
      email
    }
}

`;