import client from "../../client"

export default{
    Query:{
        seeFeed:async(_,__,context)=>{
            const photos=await client.photo.findMany({
                
                    where:{
                        OR:{
                            user:{
                                followers:{
                                    some:{
                                        id:context.user.id
                                    }
                                }
                            },
                            user:{
                                id:context.user.id
                            }
                        }
                       


                    
                },
                
                orderBy:{
                    createdAt:"desc"
                }
            
               
            })
         
            return photos
        }
    }
}