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
    category:Category
    createdAt:String
    updatedAt:String
}
type Tag{
    id:ID!
    tagName:String
    createdAt:String
    updatedAt:String
}
type Comment{
    id:ID!
    comment:String
    createdAt:String
    updatedAt:String
}
enum Category{
   TECHNOLOGY
  ANDROID
  ARTIFICIAL_INTELLIGENCE
  WEB
  JOBS
  BOOKS
  UI_UX
  STARTUPS
  RELATIONSHIPS
  DATABASES
}
type Query{
    users:[User]!
    blogs:[Blog]!
    tags:[Tag]!
    comments:[Comment]!
}
`;
