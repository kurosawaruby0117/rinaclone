import client from "../../client"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { protectResolver } from "../users.utils"
import {createWriteStream} from "fs"


export default {
    Mutation:{
        editProfile:protectResolver( async(_,args,{user})=>{
            let avatarUrl=null;
            if(args.avator){
                console.log("hi")                   
                const {filename,createReadStream}=await args.avator;
                const readStream=createReadStream();
                const newFileName=args.userName+Date.now()+filename;
                const writeStream=createWriteStream(process.cwd()+"/upload/"+newFileName);
                readStream.pipe(writeStream);
                avatarUrl=`http://localhost:4000/static/${newFileName}`;
            }
           
            let uglyPassword=null;
            if(args.password){
                uglyPassword=await bcrypt.hash(args.password,10)
            }
           
            const ok= await  client.user.update({where:{id:user.id},data:{
                firstName:args.firstName,
                lastName:args.lastName,
                userName:args.userName,
                bio:args.bio,
                email:args.email,
                ...(uglyPassword && {password:uglyPassword}),
                ...(avatarUrl&&{avator:avatarUrl})
            }})
            if(ok){
                return{
                    ok:true
                    
                }
            }else{
                return{
                    ok:false,
                    error:"Error"
                }
            }
        })
    }
}