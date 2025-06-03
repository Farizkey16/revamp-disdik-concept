"use client"
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { apiAuth, apiBackend } from "@/utils/apiHelper";


export default function SignInPage() {

    const loginRefEmail = useRef<HTMLInputElement>(null)
    const loginRefPassword = useRef<HTMLInputElement>(null)

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
            localStorage.setItem("backendlessToken", token);
            console.log("Login response:", response_login.data)
            alert(`login successful!`)
            console.log(token)

       

    } catch (err:any) {
        console.error("Login error:", err.response?.data || err.message);
        alert(err)
    }
        
    }



  return (
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
            <div className="flex flex-col md:flex-row md:items-center md:gap-3">
              <Input
                type="password"
                placeholder="Write your password"
                className="w-full md:flex-1"
                aria-label="Password"
                ref={loginRefPassword}
              />
              <Button className="mt-3 md:mt-0 md:w-16">
                Show
              </Button>
            </div>
            <Button type="submit" className="w-full">
              Sign In
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
}
