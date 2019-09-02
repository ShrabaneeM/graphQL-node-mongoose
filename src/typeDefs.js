
const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    cats: [Cat!]!
    tests : [Tests]
  }
  type Cat {
    id: ID!
    name: String!
    tests : [Tests]
  }

  type Tests {
    id: ID!
    name: String!
    positive : Boolean!
  }

  type Mutation {
    createCat(name: String!): Cat!
    createTests(name : String!, positive : Boolean!, catId : String!) : Tests!
  }
`;

module.exports = {
    typeDefs
};