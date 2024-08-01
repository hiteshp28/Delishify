import mongoose from "mongoose"
 export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://pawarhitesh321:9421440332@cluster0.ot3o8an.mongodb.net/Food_Delivery').then(()=>console.log("DB Connected"))
}


// 'mongodb+srv://pawarhitesh321:9421440332@cluster0.ot3o8an.mongodb.net/Food_Delivery'

