"use server"

import { revalidatePath } from "next/cache";
import { dbConnect } from "../libs/dbconnect";
import UserModel from "../models/User.model";
import { User } from "../types";
import { redirect } from "next/navigation";

export const registerUser = async(form:User)=>{
    console.log(form);
    const user= {
        // firstname:String(form.get("firstname")),
        // lastname:form.get("firstname")?.toString(),
        // email:form.get("email")?.toString(),
        // password:form.get('password')?.toString()
        firstname:form.firstname,
        lastname:form.lastname,
        email:form.email,
        password:form.password
    }

    await dbConnect()
   await UserModel.create(user)
    
    console.log("i am workinggggg");

    revalidatePath("/users")
    redirect("/users")
    
}

export const getUser=async(id:string)=>{
    await dbConnect()

  const user=  await UserModel.findById(id)

  if(!user){
    
    return {
        message:"user does not exist"
    };
  }else{

      return user;
  }

}