import { dbConnect } from "@/app/libs/dbconnect"
import UserModel from "@/app/models/User.model"

export const GET=async()=>{
 await dbConnect()
 const users = await UserModel.find()
 
 return Response.json({
    message:"users fetched successfully",
    data:users
 })
}