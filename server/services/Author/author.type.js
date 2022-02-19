import { gql } from "apollo-server-express";
// chage for update data base
const NewsType = gql`
  type Author {
    _id: ID
    firstname: String
    lastname: String
    news: News
  }
  input AuthorInput {
    firstname: String
    lastname: String
  }

  extend type Query {
    allAuthor(name: String): [Author]
    author(authorId: ID!): Author
  }
  extend type Mutation {
    addAuthor(input: AuthorInput!): Author
  }
`;

export default NewsType;
