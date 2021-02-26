import client from "../../client"
import { protectResolver } from "../../users/users.utils"
import { pcH } from "../makeHash"

export default{
    Mutation:{
    editPhoto:protectResolver(async(_,args,{user})=>{
        
        const photo=await client.photo.findFirst({
            where:{
                id:args.id,
                userId:user.id
            },
            include:{
                hashtags:{
                    select:{
                        hashtag:true
                    }
                    
                }
            }
        })

        if(!photo){
            return{
                ok:false,
                error:"Fuck"
            }
        }
        await client.photo.update({
            where:{
                id:args.id
            },
            data:{
                caption:args.caption,
                hashtags:{
                    disconnect:photo.hashtags,
                    connectOrCreate:pcH(args.caption)
                },
            }
        });

        return{
            ok:true
        }
    })}
}