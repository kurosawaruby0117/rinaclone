import client from "../../client"

export default{
    Query:{
        searchPhoto:async(_,args)=>{
            const photo=await client.photo.findMany({
                where:{
                    caption:{
                        startsWith:args.keyword
                    }
                }
            })
            return photo;
        }
    }
}