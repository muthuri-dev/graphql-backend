export const resolvers = {
  Query: {
    users: async (parent: any, args: any, context: Context) => {
      return await context.prisma.user.findMany();
    },
  },
};
