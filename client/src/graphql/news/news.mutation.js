import { gql } from "@apollo/client";

export const ADD_NEWS = gql`
  mutation ADD_NEWS($myInput: NewsInput!) {
    addNews(input: $myInput) {
      _id
    }
  }
`;
