import { gql } from "apollo-server-express";

const NewsType = gql`
  type News {
    _id: ID
    author: Author
    type: Int
    title: String
    newsText: String
    newsTime: String
  }
  input NewsInput {
    type: Int
    title: String
    authorId: ID
    newsText: String
  }
  extend type Query {
    allNews(name: Int): [News]
    findNews(name: Int): [News]
    news(newsId: ID!): News
  }
  extend type Mutation {
    addNews(input: NewsInput!): News
    updateNews(id: ID!, input: NewsInput!): News
    deleteNews(id: ID!): Boolean
  }
`;

export default NewsType;
