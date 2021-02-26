import client from "../../client";
import { protectResolver } from "../../users/users.utils";
import { pcH } from "../makeHash";
import {createWriteStream} from "fs"
export default{
    Mutation:{
        uploadPhoto:protectResolver(async(_,args,context)=>{
            let hashtagObj=[]
            console.log(args.caption)
            hashtagObj=pcH(args.caption)
            if(args.caption){
                const newPost=await client.photo.create({
                    data:{
                        user:{
                            connect:{
                                id:context.user.id
                            }
                        },
                        file:"args.file",
                        caption:args.caption,
                        hashtags:{
                            connectOrCreate:hashtagObj
                        }
                    }
                })
                console.log(newPost)
                return newPost;
            }
            
           
        })
    }
}