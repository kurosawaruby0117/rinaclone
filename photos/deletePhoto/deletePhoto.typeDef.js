import { gql } from "apollo-server-express";

export default gql`
    type deleteResult{
        ok:Boolean!,
        error:String
    }
    type Mutation{
        deletePhoto(photoId:Int!):deleteResult
    }
`