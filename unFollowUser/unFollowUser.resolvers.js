import client from "../client";
import { protectResolver } from "../users/users.utils";

export default{
    Mutation:{
        UnfollowUser:protectResolver(async(_,args,{user})=>{
            const amIFollowing=await client.user.findUnique({
                where:{
                    userName:user.userName
                },
                select:{
                    following:true
                }
            })
            if(!(args.userName in amIFollowing)){
                return{
                    ok:false,
                    error:"Not in"
                }
            }
            const check=await client.user.findUnique({
                where:{
                userName:args.userName
            }
            })
        if(!check){
            return{
                ok:false,
                error:"no"
            }
        }
        try{
            await client.user.update({
                where:{
                    id:user.id
                },
                data:{
                    following:{
                        disconnect:{
                            userName:args.userName
                        }
                    }
                }
                
            })
        }catch(e){
            return{
                ok:false,
                error:"NOOOO"
            }
        }
       
        return{
            ok:true,
        }
    })
}}