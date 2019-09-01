const Cat =  require("./models/Cat");

const resolvers = {
  Query: {
    cats: () => Cat.find()
  },
  Mutation: {
    createCat: async (_, { name }) => {
      const kitty = new Cat({ name });
      await kitty.save();
      return kitty;
    }
  }
};

module.exports = {
    resolvers
};