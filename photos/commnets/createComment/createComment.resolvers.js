import client from "../../../client";
import { protectResolver } from "../../../users/users.utils";

export default{
    Mutation:{
        createComment:protectResolver(async(_,args,context)=>{
            const ok=await client.photo.findUnique({
                where:{
                    id:args.photoId
                },
                select:{
                    id:true
                }
            });
            if(!ok){
                return{
                    ok:false,
                    error:"Not Found"
                }
            }
            try{
                await client.comment.create({
                    data:{
                        payload:args.payload,
                        photo:{
                            connect:{
                                id:args.photoId
                            }
                        },
                        user:{
                            connect:{
                                id:context.user.id
                            }
                        }
                    },
                    
                })
                return{
                    ok:true
                }
            }catch(e){
                return{
                    ok:false,
                    error:e
                }
            }
            

        })
    }
}