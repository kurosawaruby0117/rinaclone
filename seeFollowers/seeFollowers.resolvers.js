import client from "../client"

export default {
    Query:{
        seeFollower:async(_,args,{user})=>{
            const ok=await client.user.findUnique({
                where:{
                    userName:args.userName
                }
            });
            if(!ok){
                return{
                    ok:false,
                    error:"No User"
                }
            }
            const followers=await client.user.findUnique({
                where:{
                    userName:args.userName
                }
            }).followers({
                take:5,
                skip:(args.page-1)*5
            });
            const totalFollower=await client.user.count({
                where:{
                    following:{
                        some:{
                            userName:args.userName
                        }
                    }
                }
            })
           return{
               ok:true,
               followers:followers,
               totalPages:Math.ceil(totalFollower/5)
           }
        }
    }
}