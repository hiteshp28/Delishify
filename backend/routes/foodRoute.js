import express from "express"
import { addFood, listFood ,removeFood} from "../controllers/foodController.js"
import multer from "multer"


const foodRouter=express.Router();


//image storage engine
const storage1=multer.diskStorage({
    destination:"uploads",
    filename:(req,file,callback)=>{
        return callback(null,`${Date.now()}${file.originalname}`)
    }
})

const upload =multer({storage:storage1})

foodRouter.post("/add",upload.single("image"),addFood) //to send the data on the server
foodRouter.get("/list",listFood)
foodRouter.post("/remove",removeFood);


export default foodRouter;