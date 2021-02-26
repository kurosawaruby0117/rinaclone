import client from "../../../client"

export default{
    Query:{
        seePhotoComment:async(_,args,context)=>{
            const photo=await client.comment.findMany({
                where:{
                    photoId:args.id
                },
                orderBy:{
                    createdAt:"asc"
                }
            })
            return photo;
        }
    }
}