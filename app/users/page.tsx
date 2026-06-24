import React from 'react'
import { dbConnect } from '../libs/dbconnect'
import UserModel from '../models/User.model'
import { User } from '../types'

const Page = async() => {
    await dbConnect()
    const users:User[] = await UserModel.find()
  return (
    <div>
        {
            users.map((_, idx)=>(
                <div key={_._id}>{idx+1}.{_.firstname+" "+_.lastname}</div>
            ))
        }
    </div>
  )
}

export default Page

