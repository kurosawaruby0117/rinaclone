import client from "../../client"

export default{
    Query:{
        seePhoto:async(_,args)=>{
            const photo=await client.photo.findUnique(
                {where:{
                    id:args.id
                }}
            )
            return photo;
        }
    }
}