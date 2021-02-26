import { gql } from "apollo-server-express";

export default gql`
    type seeFollowingResult{
        ok:Boolean!,
        error:String,
        Following:[User]
    }
    type Query{
        seeFollowing(userName:String!,cursor:Int!):seeFollowingResult!
    }
`