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

export const GET_AUTHOR = gql`
  query GET_AUTHOR($id: ID!) {
    author(authorId: $id) {
      _id
      firstname
      lastname
      news {
        title
      }
    }
  }
`;
export const GET_AUTHOR_NEWS = gql`
  query GET_AUTHOR($id: ID!) {
    author(authorId: $id) {
      _id
      firstname
      lastname
      news {
        _id
        type
        title
      }
    }
  }
`;
