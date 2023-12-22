export const typeDefs = `#graphql
type User{
    id:ID!
    name:String
    email:String
    followers:Int
    isAuthor:Boolean
    createdAt:String
    updatedAt:String
}
type Blog{
    id:ID!
    title:String
    description:String
    imageUrl:String
    likes:Int
    createdAt:String
    updatedAt:String
}
type Query{
    users:[User]!
}
`;
