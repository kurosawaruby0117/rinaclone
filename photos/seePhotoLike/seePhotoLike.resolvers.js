import client from "../../client"

export default{
    Query:{
        seePhotoLikes:async(_,args)=>{
            const likes=await client.like.findMany({
                where:{
                    photoId:args.id
                },
                select:{
                    user:{
                        select:{
                            id:true
                        }
                    }
                }
            })
            return likes.map(like=>like.user)
        }
    }
}