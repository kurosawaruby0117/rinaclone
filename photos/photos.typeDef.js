import { gql } from "apollo-server-express";

export default gql`
    type Photo{
        id:Int!
        user:User
        createdAt:String!
        updateAt:String!
        file:String!
        caption:String
        hashtag:[Hashtag]
        likes:Int!
        isMine:Boolean!
        commentNumber:Int!
    }
    type Hashtag{
        id:Int!
        createdAt:String!
        updateAt:String!
        hashtag:String!
        photo(page:Int!):[Photo]
        totalPhotos:Int!
    }
    type Like{
        id:Int!
        photo:Photo!
        createdAt:String!
        updatedAt:String!
    }
`