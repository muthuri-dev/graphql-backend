import { Blog, PrismaClient, User } from "@prisma/client";
type Context = {
  prisma: PrismaClient;
};

interface ITrend extends User {
  blogs: Blog[];
}
