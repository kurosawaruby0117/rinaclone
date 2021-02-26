import { gql } from "apollo-server";

export default gql`

 
    
    type User{
        id:String!
        firstName:String!
        lastName:String
        userName:String!
        email:String!
        createdAt:String!
        updatedAt:String!
        bio:String
        avator:String
        followers:[User]
        following:[User]
        totalFollowing:Int!
        totalFollower:Int!
        isMe:Boolean!
        isFollowing:Boolean!,
        photo:[Photo]!
    }


`