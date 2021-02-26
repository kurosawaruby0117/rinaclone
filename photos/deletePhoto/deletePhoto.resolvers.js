import client from "../../client"
import { protectResolver } from "../../users/users.utils"

export default{
    Mutation:{
        deletePhoto:protectResolver(async(_,args,context)=>{
            const ok=await client.photo.findUnique({
                where:{
                    id:args.photoId
                },
                select:{
                    userId:true
                }
            })
            if(!ok){
                return{
                    ok:false,
                    error:"no"
                }
            }
           
            if(ok.userId!==context.user.id){
                return{
                    ok:false,
                    error:"fuck you"
                }
            }
            await client.photo.delete({
                where:{
                    id:args.photoId,
                },
                
                
            })
            return{
                ok:true
            }
        })
    }
}