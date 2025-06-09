"use client"
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { apiAuth, apiBackend } from "@/utils/apiHelper";
import Link from "next/link";
import { useState } from "react";
import {Eye, EyeClosed} from 'lucide-react'
import Navbar from "@/components/Header";
import { useAuth } from "@/app/context/AuthContext";
import { useRouter } from 'next/navigation'


export default function SignInPage() {

    const loginRefEmail = useRef<HTMLInputElement>(null)
    const loginRefPassword = useRef<HTMLInputElement>(null)
    const [showPass, setShowPass] = useState<string>("password")
    const { dispatch } = useAuth();
    const router = useRouter();

    const showPassword = () => {
      if (showPass === "password") {
        setShowPass("text")
      } else {
        setShowPass("password")
      }
    }

    const onSubmit = async () => {

         // Variables

        const email = loginRefEmail.current?.value
        const password = loginRefPassword.current?.value

        try {

            const response_login = await apiAuth.post("/users/login", {
                login: email,
                password,
            })
            

            const token = response_login.data["user-token"];
            const user = response_login.data;

            localStorage.setItem("backendlessToken", token);
            localStorage.setItem("backendlessUser", JSON.stringify(user))

            dispatch({
              type: 'LOGIN',
              payload: { user, token }
            })

            console.log("Login response:", response_login.data)
            alert(`login successful!`)

            router.push('/')
            

    } catch (err:any) {
        console.error("Login error:", err.response?.data || err.message);
        alert(err)
    }

    return <button onClick={onSubmit}>Login</button>
        
    }

  return (
    <div>
    <Navbar/>
    <section className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-md">
        <Card className="p-8">
          <h2 className="mb-8 text-2xl font-semibold text-center">Welcome back!</h2>
          <form className="space-y-6"
          onSubmit={e => {
            e.preventDefault();
            onSubmit();}}>
            <Input
              type="email"
              placeholder="Enter your email"
              className="w-full"
              aria-label="Email"
              ref={loginRefEmail}
            />
            <div className="flex flex-row items-center gap-3">
              <Input
                type={showPass}
                placeholder="Write your password"
                className="w-full md:flex-1"
                aria-label="Password"
                ref={loginRefPassword}
              />
              <Button className="mt-0 md:w-16" onClick={showPassword}>
                {showPass === "password" ? 
                (<Eye size={24}/>)
                  :
                (<EyeClosed size={24}/>)
                }
              </Button>
            </div>
            <Button type="submit" className="w-full" > 
              Sign In
            </Button>
            <h2 className="text-center text-gray-800 hover:text-gray-500 underline"><Link href="/sign-up">Not registered yet? Click here to sign up!</Link></h2>
          </form>
        </Card>
      </div>
    </section>
    </div>
  );
}
