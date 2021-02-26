import client from "../client";

export default{
    Query:{
        seeFollowing:async(_,args)=>{
            const ok=await client.user.findUnique({
                where:{
                    userName:args.userName

                },
                select:{
                    id:true
                }
            });
            if(!ok){
                return{
                    ok:false,
                    error:"No User"
                }
            }
            const following=await client.user.findUnique({
                where:{
                    id:ok.id
                }
            }).following({
                take:5,
                skip:args.cursor?1:0,
                ...(args.cursor && {cursor:{id:args.cursor}})
            });
            return{
                ok:true,
                Following:following
            }

        }
    }
}