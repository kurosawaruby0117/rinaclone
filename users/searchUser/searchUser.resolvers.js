import client from "../../client"

export default{
    Query:{
        searchUser:async(_,args)=>{
            if(args.keyword.length<3){
                return{
                    ok:false,
                    error:"pls"
                }
            }
            const user=await client.user.findMany({
                where:{
                    userName:{
                        startsWith:args.keyword
                    }
                }
            })
            return{
                ok:true,
                Searched:user
            }
        }
    }
}