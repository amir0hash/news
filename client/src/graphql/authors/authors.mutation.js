import { gql } from "@apollo/client";

export const ADD_AUTHOR = gql`
  mutation ADD_AUTHOR($myInput: AuthorInput!) {
    addAuthor(input: $myInput) {
      _id
      firstname
      lastname
    }
  }
`;
