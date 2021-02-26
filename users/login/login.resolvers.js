
import bycrpt from "bcrypt"
import jwt from "jsonwebtoken"
import client from "../../client";
require("dotenv").config();

export default{
    Mutation:{
        
        login:async(_,{userName,password})=>{
            const user=await client.user.findFirst({where:{userName}});
            if(!user){
                return{
                    ok:false,
                    error:"User not defined"
                }
            }
            const passwordOk=await bycrpt.compare(password,user.password);
            if(!passwordOk){
                return{
                    ok:false,
                    error:"Wrong password"
                }
            }
          
            const token=await jwt.sign({id:user.id},process.env.SECRET_KEY);
            return{
                ok:true,
                token
            }
        }
    }
}