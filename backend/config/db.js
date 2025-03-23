import mongoose from "mongoose"
 export const connectDB=async()=>{
    await mongoose.connect(process.env.DBLink).then(()=>console.log("DB Connected"))
}
