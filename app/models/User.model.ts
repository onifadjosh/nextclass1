import mongoose, { Schema } from "mongoose";
import { User } from "../types";

const UserSchema = new mongoose.Schema<User>({
    firstname:{type:String, required:true},
    lastname:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true, select:false}
}, {timestamps:true})

// const UserSchema = new Schema<User>({
//     firstname:{type:String, required:true},
//     lastname:{type:String, required:true},
//     email:{type:String, required:true},
//     password:{type:String, required:true, select:false}
// }, {timestamps:true})

const UserModel= mongoose.model<User>("user", UserSchema)
// const UserModel= mongoose.models.User

export default UserModel;