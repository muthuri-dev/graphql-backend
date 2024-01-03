import { Blog, PrismaClient } from "@prisma/client";
type Context = {
  prisma: PrismaClient;
};

interface ITrend extends Blog {
  TrendBlog: Blog[];
}
