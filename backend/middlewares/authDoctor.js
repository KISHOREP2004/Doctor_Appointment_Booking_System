import jwt from 'jsonwebtoken'

// doctor authentication middleware
const authDoctor=async(req,res,next)=>{
    try {
        
        const {dtoken}=req.headers
        if(!dtoken){
            return res.json({sucess:false,message:'Not Authorized Login Again'})
        }
        const token_decode=jwt.verify(dtoken,process.env.JWT_SECRET)
    
       req.body.docId=token_decode.id

         next()

    } catch (error) {
        console.log(error)
        res.json({sucess:false,message:error.message})
    }
}
export default authDoctor;