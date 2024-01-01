import { Context } from "@/types";
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
    followers: async (parent: any, args: any, context: Context) => {
      return await context.prisma.follower.findMany();
    },
    likes: async (parent: any, args: any, context: Context) => {
      return await context.prisma.like.findMany();
    },
    blog: async (parent: any, args: any, context: Context) => {
      return await context.prisma.blog.findUnique({
        where: {
          id: args.id,
        },
      });
    },
    user: async (parent: any, args: any, context: Context) => {
      return await context.prisma.user.findUnique({
        where: {
          id: args.id,
        },
      });
    },
  },
  Blog: {
    likes: async (parent: any, args: any, context: Context) => {
      return await context.prisma.like.findMany({
        where: {
          blogId: parent.id,
        },
      });
    },
    tags: async (parent: any, args: any, context: Context) => {
      return await context.prisma.tag.findMany({
        where: {
          blogId: parent.id,
        },
      });
    },
    comments: async (parent: any, args: any, context: Context) => {
      return await context.prisma.comment.findMany({
        where: {
          blogId: parent.id,
        },
      });
    },
  },
  User: {
    blogs: async (parent: any, args: any, context: Context) => {
      return await context.prisma.blog.findMany({
        where: {
          userId: parent.id,
        },
      });
    },
    followers: async (parent: any, args: any, content: Context) => {
      return await content.prisma.follower.findMany({
        where: {
          userId: parent.id,
        },
      });
    },
  },
};
