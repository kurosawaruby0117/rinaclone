import client from "../client";

export default{
    User:{
        totalFollowing:async({id})=>{
            return await client.user.count({
                where:{
                    followers:{
                        some:{
                            id
                        }
                    }
                }
            })
        },
        totalFollower:async({id})=>{
            return await client.user.count({
                where:{
                    following:{
                        some:{
                            id
                        }
                    }
                }
            })
        },
        isMe:({id},args,context)=>{
            if(!context.user){
                return false;
            }
            if(id===context.user.id){
                return true
            }else{
                return false;
            }
        },
        isFollowing:async ({id},args,context)=>{
            if(!context.user){
                return false;
            }
            const ok =await client.user.findUnique({
                where:{
                    userName:context.user.userName
                }
            }).following({
                where:{
                    id
                }
            })
            if(ok.length===0){
                return false
            }else{
                return true;
            }
        },
        photo:({id})=>{
            return client.user.findUnique({
                where:{
                    id
                }
            }).photos()
        }
    }
}