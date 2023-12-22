export const resolvers = {
  Query: {
    users: async (parent: any, args: any, context: Context) => {
      return await context.prisma.user.findMany();
    },
    blogs: async (parent: any, args: any, context: Context) => {
      return await context.prisma.blog.findMany();
    },
    tags: async (parent: any, args: any, context: Context) => {
      return await context.prisma.tag.findMany();
    },
    comments: async (parent: any, args: any, context: Context) => {
      return await context.prisma.comment.findMany();
    },
  },
};
