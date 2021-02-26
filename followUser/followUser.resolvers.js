import client from "../client";
import { protectResolver } from "../users/users.utils";

export default {
    Mutation:{
        followUser:protectResolver(async(_,args,{user})=>{
            const check=await client.user.findUnique({where:{
                userName:args.userName
            }})
            console.log(args)
            if(!check){
                return{
                    ok:false,
                    error:"no"
                }
            }
            await client.user.update(
                {where:{id:user.id},
                data:{
                    following:{
                        connect:{
                            userName:args.userName
                        }
                    }
                }
            
            })
            return {
                ok:true,
            };
        })
    }
}