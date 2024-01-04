import { Blog, Comment, Like, PrismaClient, Tag, User } from "@prisma/client";
type Context = {
  prisma: PrismaClient;
};

interface ITrend extends User {
  blogs: Blog[];
}

type TParams = {
  params: {
    id: string;
  };
};
interface IBlogs extends Blog {
  likes: Like[];
  comments: Comment[];
  tags: Tag[];
}
