export const typeDefs = `#graphql
type User{
    id:ID!
    name:String
    email:String
    blogs:[Blog]
    followers:[Follower]
    createdAt:String
    updatedAt:String
}
type Follower{
    id:ID!
    follower:Int
    userId:String
    createdAt:String
    updatedAt:String
}
type Blog{
    id:ID!
    title:String
    content:String
    imageUrl:String
    category:Category
    userId:String
    likes:[Like]
    tags:[Tag]
    comments:[Comment]
    createdAt:String
    updatedAt:String
}
type Like{
    id:ID!
    like:Int
    blogId:String
    createdAt:String
    updatedAt:String
}
type Tag{
    id:ID!
    tag:String
    blogId:String
    createdAt:String
    updatedAt:String
}
type Comment{
    id:ID!
    comment:String
    blogId:String
    createdAt:String
    updatedAt:String
}
enum Category {
  TECH
  ANDROID
  AI_ML
  WEB
  JOBS
  STARTUPS
  UI_UX
  BOOKS
  DATABASES
}

type Query{
    users:[User]
    blogs:[Blog]
    tags:[Tag]
    comments:[Comment]
    followers:[Follower]
    likes:[Like]
    blog(id:ID!):Blog
    user(id:ID!):User
}

`;
