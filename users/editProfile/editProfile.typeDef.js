import { gql ,ApolloServer} from "apollo-server";

export default gql`
type EditProfileResult{
    ok:Boolean!
    error:String
}
 type Mutation{
    editProfile(firstName:String,lastName:String,userName:String,email:String,password:String,bio:String,avator:Upload):EditProfileResult!
 }
`