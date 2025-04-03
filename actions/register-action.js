"use server"

import { redirect } from "next/navigation";
import { RegisterService } from "../Service/RegisterService";


export const RegisterAction=async(formData)=>{
    const username = formData.get('username')
    const email = formData.get('email')
    const password=formData.get('password');

    const res = await RegisterService(username,email,password);
    redirect("/login");
}