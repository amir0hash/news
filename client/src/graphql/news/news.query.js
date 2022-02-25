import { gql } from "@apollo/client";

export const GET_ALL_NEWS = gql`
  query GET_ALL_NEWS($name: Int) {
    allNews(name: $name) {
      _id
      type
      title
      newsText
      newsTime
    }
  }
`;
export const GET_NEWS = gql`
  query GET_NEWS($id: ID!) {
    news(newsId: $id) {
      _id
      type
      title
      newsText
      newsTime
      author {
        _id
        firstname
        lastname
      }
    }
  }
`;
