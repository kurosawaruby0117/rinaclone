import { gql } from "apollo-server-express";

export default gql `
    type seeFollowerResult{
        ok:Boolean!
        error:String
        followers:[User]
        totalPages:Int
    }
    type Query{
        seeFollower(userName:String!,page:Int!):seeFollowerResult!
    }
`