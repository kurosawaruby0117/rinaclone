import client from "../../client"

export default {
    Query:{
        seeHashtag:async(_,{hashtag})=>{
            return await client.hashtag.findUnique({
                where:{
                    hashtag
                }
            })
        }
    }
}