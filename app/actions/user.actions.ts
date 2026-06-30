"use server"

import { revalidatePath } from "next/cache";
import { dbConnect } from "../libs/dbconnect";
import UserModel from "../models/User.model";
import { User } from "../types";
import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";

export const registerUser = async(form:User)=>{
    console.log(form);
    // const user= {
        // firstname:String(form.get("firstname")),
        // lastname:form.get("firstname")?.toString(),
        // email:form.get("email")?.toString(),
        // password:form.get('password')?.toString()
       const firstname=form.firstname
       const lastname=form.lastname
      const  email=form.email
       const password=form.password
    // }

    await dbConnect()
    const saltRound = 10
    const hashedPassword = await bcrypt.hash(form.password, saltRound)

   await UserModel.create({firstname, lastname, email , password:hashedPassword})
    
    console.log("i am workinggggg");

    revalidatePath("/users")
    // redirect("/users")
    
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