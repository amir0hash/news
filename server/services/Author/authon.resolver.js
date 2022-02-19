import { NewsModel } from "../News/news.model";
import { AuthSchema } from "./author.model";

const newsResolver = {
  Query: {
    allAuthor: async (_, args) => {
      const cond = {};
      if (args.name) {
        console.log(args.name);
        cond.firstname = { $in: [args.name] };
      }

      cond.status = { $in: [0, 1] };
      return await AuthSchema.find(cond);
    },
    author: async (_, args) => {
      return await AuthSchema.findById(args.authorId);
    },
  },
  Mutation: {
    addAuthor: async (_, args) => {
      return await AuthSchema.create({ ...args.input, status: 1 });
    },
  },
  Author: {
    news: async (parent) => {
      console.log(parent._id);
      return await NewsModel.find({ authorId: parent._id });
    },
  },
};

export default newsResolver;
