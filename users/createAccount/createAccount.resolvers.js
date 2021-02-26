import client from "../../client";
import bycrpt from "bcrypt"
export default{
    Mutation:{
    createAccount:async(_,args)=>{
    try{
        const existingUser=await client.user.findFirst(
            {
                where:{
                    OR:[
                        {
                            userName:args.userName
                        },{
                            email:args.email
                        }
                    ]
                }
            }
            );
           
            if(existingUser){
                throw Error("Already Taken")

                
            }else{
                const  uglyPassworld=await bycrpt.hash(args.password,10);
                const user= await client.user.create({data:{
                    userName:args.userName,email:args.email,firstName:args.firstName,lastName:args.lastName,password:uglyPassworld
                }})
                return{
                    ok:true
                }
            
            }
          
    }catch(e){
        console.log(e)
        return{
            ok:false,
            error:e
        }
    }
}
},}