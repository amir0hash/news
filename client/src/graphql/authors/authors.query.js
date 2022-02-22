import { gql } from "@apollo/client";

export const GET_AUTHORS = gql`
  query GET_AUTHORS($name: String) {
    allAuthor(name: $name) {
      _id
      firstname
      lastname
    }
  }
`;
