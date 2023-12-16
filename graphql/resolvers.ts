

export const resolvers = {
       Query:{
           authors:async (parent:any, args:any,context:Context)=>{
               return await context.prisma.author.findMany();
           }
       } 
}