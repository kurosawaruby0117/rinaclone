import { gql } from "apollo-server-express";

export default gql`

    type editResult{
        ok:Boolean!,
        error:String
    }
    type Mutation{
        editPhoto(id:Int!,caption:String!):editResult
    }
`