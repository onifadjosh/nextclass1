import { dbConnect } from "@/app/libs/dbconnect"
import UserModel from "@/app/models/User.model"
import { NextRequest } from "next/server"

export const GET=async(request:NextRequest, ctx:RouteContext<'/api/users/[id]'>)=>{
    await dbConnect()
    
  
    
    const {id}=await ctx.params
    console.log(id);
    

    const user = await UserModel.findById(id)

    return Response.json({
        message:"user fetched successfully",
        data:user
    })


}