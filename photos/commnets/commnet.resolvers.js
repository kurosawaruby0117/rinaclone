export default{
    Comment:{
        isMine:async({userId},_,context)=>{
            if(!context.user){
                return false;
            }
            return userId===context.user.id
        }
    }
}