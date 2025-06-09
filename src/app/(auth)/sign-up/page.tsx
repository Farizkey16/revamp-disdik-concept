"use client"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRef, useState } from "react"
import { apiBackend, apiCall } from "@/utils/apiHelper"
import { useRouter } from "next/navigation"
import {Eye, EyeClosed} from 'lucide-react'
import Navbar from "@/components/Header"

export default function SignUpPage() {

    // Hooks
    const inputRefUserName = useRef<HTMLInputElement>(null)
  
    const inputRefEmail = useRef<HTMLInputElement>(null)
    const inputRefPassword= useRef<HTMLInputElement>(null)
    const inputRefConfPassword = useRef<HTMLInputElement>(null)
    const router = useRouter()
    const [showPass, setShowPass] = useState<string>("password")

    const showPassword = () => {

      if (showPass === "password") {
        setShowPass("text")
      } else {
        setShowPass("password")
      }
    }

   

    const onSubmit = async () => {

         // Variables

        const username = inputRefUserName.current?.value
        const email = inputRefEmail.current?.value
        const password = inputRefPassword.current?.value
        const confirmpassword = inputRefConfPassword.current?.value

        try {

            if (username && email && password && confirmpassword) {
                if (password === confirmpassword) {
                    await apiBackend.post("/api/data/Users", { 
                        username,
                        email,
                        password,
                    
                    },
                    {
                        headers: {
                            "Content-Type": "application/json",
                         },
                    }
                    )
                    alert(`Sign up successful, welcome ${username}!`)
                    router.replace("/sign-in")
                } else {
                    throw("Passwords don't match.")
                }
            } else {
                throw("Please fill in the fields.")
            }

        } catch (err: any) {
            console.log(err.response?.data)
            alert(err)
        }

    }

  return (
    <div>
      <Navbar/>
    <section className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-md">
        <Card className="p-8">
          <h2 className="mb-8 text-2xl font-semibold text-center">Join us, fast!</h2>
          <form className="space-y-6"
          onSubmit={e => {
            e.preventDefault();
            onSubmit();
          }}>
            <div className="flex gap-2">
            <Input
              type="text"
              placeholder="Username"
              className="w-full"
              aria-label="Username"
              required
              ref={inputRefUserName}
            />
            </div>


            <Input
              type="email"
              placeholder="Write your email"
              className="w-full"
              aria-label="Email"
              required
              ref={inputRefEmail}
            />
            <div className="flex flex-row items-center gap-3">
              <Input
                type={showPass}
                placeholder="Write your password"
                className="w-full md:flex-1"
                aria-label="Password"
                required
                ref={inputRefPassword}
              />
              <Button id="password"onClick={showPassword} className=" md:w-16">
                {showPass === "password" ? 
                (<Eye size={24}/>)
                  :
                (<EyeClosed size={24}/>)
                }
              </Button>
            </div>
            <div className="flex flex-row items-center gap-3">
              <Input
                type={showPass}
                placeholder="Confirm your password"
                className="w-full md:flex-1"
                aria-label="Confirm Password"
                required
                ref={inputRefConfPassword}
              />
              <Button id="conf-password" onClick={showPassword} className="md:w-16">
                {showPass === "password" ? 
                (<Eye size={24}/>)
                  :
                (<EyeClosed size={24}/>)
                }
              </Button>
            </div>
            <Button id="register-btn"type="submit" className="w-full">
              Register
            </Button>
          </form>
        </Card>
      </div>
    </section>
    </div>
  );
}



