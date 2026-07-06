"use client";
import React, { ChangeEvent, useState } from "react";

import { loginUser } from "../actions/user.actions";
import { refresh } from "next/cache";
import { dbConnect } from "../libs/dbconnect";
import { useRouter } from "next/navigation";

const Page = () => {
  const [User, setUser] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    // const { name, value } = e.target;
    // console.log(e.target.name, e.target.value);
    

    // setUser({
    //   ...User,
    //   [name]: value,
    // });

    console.log(e.target.value);
    console.log(e.target.name);
    console.log(e.target);

    const { name, value } = e.target;

    setUser({
      ...User,
      [name]: value,
    });
  };
  const router = useRouter();
  const handleLogin = async () => {
    console.log(User);
    
    const response = await loginUser(User);

    console.log(response.message);
    if (response.status == 400) {
      alert(response.message);
    } else {
      router.push("/users");
    }
    // refresh()
  };
  return (
    <div className="  flex h-screen  justify-center items-center px-5 ">
      <div className="bg-gray-100 shadow-lg rounded-sm p-10 w-full md:w-1/2 xl:w-1/3  flex-col gap-4 flex justify-center /items-center">
        <h1 className="text-center text-2xl font-bold">Login Here</h1>
        <div>
          <label htmlFor="Email">Email:</label>
          <br />
          <input
            onChange={handleInputChange}
            type="text"
            name="email"
            className="border outline-1 focus:outline-green-700 p-2 w-full rounded-sm "
            autoFocus
          />
        </div>

        <div>
          <label htmlFor="Password">Password:</label>
          <br />
          <input
            onChange={handleInputChange}
            type="password"
            name="password"
            className="border outline-1 focus:outline-green-700 p-2 w-full rounded-sm"
          />
        </div>

        <button
          onClick={handleLogin}
          className="py-2 bg-black text-white rounded-sm hover:bg-green-800  sm:hover:bg-red-800 md:hover:bg-blue-800 hover:cursor-pointer hover:-translate-y-1 transition delay-150 /hover:scale-105 /animate-spin"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Page;
