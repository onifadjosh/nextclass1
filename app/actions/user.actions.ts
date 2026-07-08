"use server";

import { revalidatePath } from "next/cache";
import { dbConnect } from "../libs/dbconnect";
import UserModel from "../models/User.model";
import { User } from "../types";
import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";
import { decrypt, encrypt } from "../libs/session";
import { cookies } from "next/headers";


// type Error ={
//   errorResponse:{
//     index:number,
//     code:number
//   }
// }

export const registerUser = async (form: User) => {
  try {
    console.log(form);
    // const user= {
    // firstname:String(form.get("firstname")),
    // lastname:form.get("firstname")?.toString(),
    // email:form.get("email")?.toString(),
    // password:form.get('password')?.toString()
    const firstname = form.firstname;
    const lastname = form.lastname;
    const email = form.email;
    const password = form.password;
    // }

    await dbConnect();
    const saltRound = 10;
    const hashedPassword = await bcrypt.hash(form.password, saltRound);

    const createdUser = await UserModel.create({
      firstname,
      lastname,
      email,
      password: hashedPassword,
    });

    if (!createdUser) {
      return {
        status: 400,
        message: "User creation failed",
      };
    }

    const token = await encrypt({id:createdUser._id})
    console.log(token);
    

    // redirect("/users")
    
    const expiry = await decrypt(token)
    
    const cookieStore = await cookies()
    const timeOfExp =expiry.payload?.exp ? new Date(expiry.payload?.exp *1000): undefined
    cookieStore.set("token", token, {expires:timeOfExp} )
    
    revalidatePath("/users");
     return{
      status:201,
      message:"user created successfully",
      data:createdUser,
      token
    }
    // console.log("i am workinggggg");


  } catch (error) {
    console.log(error.code);
    

    if(error.code==11000){
      return {
        status: 500,
        message: "User already exist!",
    
      };
    }else{
      return {
        status: 500,
        message: "User creation failed",

      };
    }
  }
};

export const getUser = async (id: string) => {
  await dbConnect();

  const user = await UserModel.findById(id);

  if (!user) {
    return {
      message: "user does not exist",
    };
  } else {
    return user;
  }
};

export const loginUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  await dbConnect();

  const isUser = await UserModel.findOne({ email }).select("+password");

  if (!isUser) {
    return {
      status:400,
      message: "invalid credentials",
    };
  }

  const isMatch = await bcrypt.compare(password, isUser.password);

  if (!isMatch) {
    return {
       status:400,
      message: "invalid credentials",
    };
  }

  const token = await encrypt({id:isUser._id.toString()})
    console.log("token", token);

    console.log("id from db", isUser._id.toString());
    
    

    // redirect("/users")
    
    const expiry = await decrypt(token)
    
    const cookieStore = await cookies()
    const timeOfExp =expiry.payload?.exp ? new Date(expiry.payload?.exp *1000): undefined
    const userId = expiry.payload?.id
    console.log("id from token", userId);
    
    cookieStore.set("token", token, {expires:timeOfExp} )

  return {
     status:200,
    message: "user logged in successfully",
    data: {
      firstname: isUser.firstname,
      lastname: isUser.lastname,
      email: isUser.email,
    },
  };
};
