import { gql } from "apollo-server-express";

export default gql`
    type searchUserResult{
        ok:Boolean!
        error:String
        Searched:[User]
    }
    type Query{
        searchUser(keyword:String!):searchUserResult!
    }
`