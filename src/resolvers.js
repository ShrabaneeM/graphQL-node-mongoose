const Cat =  require("./models/Cat");
const Tests = require('./models/Tests');

const resolvers = {
  Query: {
    cats: () => Cat.find(),
    tests: () => Tests.find()
  },
  Mutation: {
    createCat: async (_, { name }) => {
      const kitty = new Cat({ name });
      await kitty.save();
      return kitty;
    },

    createTests : async (_, { name, positive, catId}) => {
      const tests = new Tests({ name, positive });
      const newTest = await tests.save();

      await Cat.findOneAndUpdate({_id : catId},{$push:{tests : {id : newTest._id, positive}}});
      
      return tests;
    }
  }
};

module.exports = {
    resolvers
};