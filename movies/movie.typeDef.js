import { gql } from "apollo-server";

export default gql`
    type Movie{
        id:Int!
        title:String!
        year:Int!
        genre:String
        createdAt:String!
        updatedAt:String!
    }
    type Query{
        movies:[Movie]
        movie(id:Int!):Movie
    }
    type Mutation{
        createMovie(title:String!,genre:String!,year:Int!):Movie
        deleteMovie(id:Int!):Movie
        updateMovie(id:Int!,year:Int!):Movie

}


`
