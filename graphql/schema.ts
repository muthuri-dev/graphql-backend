
export const typeDefs = `#graphql
type Author{
    id:ID!
    name:String
    email:String
    followers:Int
    createdAt:String
    updatedAt:String
}
type Blog{
    id:ID!
    blogTitle :String
    description:String
    imageUrl:String
    likes:Int
    createdAt:String
    updatedAt:String
}
type Query{
    authors:[Author]!
}
`