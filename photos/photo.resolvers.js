import client from "../client"
import { pcH } from "./makeHash";

export default{
    Photo:{
        user:async(parent)=>{
            console.log(parent)
            const user=await client.user.findUnique({
                where:{
                    id:parent.userId
                }
            })
            console.log(user);
            return user;
        },
        hashtag:async({id})=>{
            const hash=await client.hashtag.findMany({
                where:{
                    photos:{
                        some:{
                            id
                        }
                    }
                }
            })
            return hash;
        },
        likes:async({id})=>{
            const likesCount=await client.like.count({
                where:{
                    photoId:id
                }
            })
            return likesCount;
        },
        commentNumber:async({id})=>{
            const commentsNumber=await client.comment.count({
                where:{
                    photoId:id
                }
            })
            return commentsNumber
        },
        isMine:async({userId},_,context)=>{
            if(!context.user){
                return false;
            }
            return userId===context.user.id
        }
        
    },
    Hashtag:{
        totalPhotos:async(parent)=>{
            const hashtag=await client.hashtag.count({
                where:{
                    id:parent.id
                }
            })
            return hashtag;
        },
        photo:async(parent,{page})=>{
         
            const photo=await client.hashtag.findUnique({
                where:{
                    
                        id:parent.id
                    
                }
            }).photos({
                take:5,
                skip:(page-1)*5
            })
            return photo
        }
    }
}