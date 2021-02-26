import client from "../../client";
import { protectResolver } from "../../users/users.utils";

export default{
    Mutation:{
        likePhoto:protectResolver(async(_,args,context)=>{
            const ok=await client.photo.findUnique({
                where:{
                    id:args.id
                }
            })
            if(!ok){
                return{
                    ok:false,
                    error:"Photo not found"
                }
            }
            const like=await client.like.findUnique({
                where:{
                    photoId_userId:{
                        userId:context.user.id,
                        photoId:args.id
                    }
                }
            })
            if(like){
                await client.like.delete({
                    where:{
                        photoId_userId:{
                            userId:context.user.id,
                            photoId:args.id
                        }
                    }
                })
                return{
                    ok:true
                }
            }else{
                await client.like.create({
                    data:{
                        user:{
                            connect:{
                                id:context.user.id,

                            }
                        },
                        photo:{
                            connect:{
                                id:args.id
                            }
                        }
                    },
                   
                })
                return{
                    ok:true
                }
            }
        })
    }
}