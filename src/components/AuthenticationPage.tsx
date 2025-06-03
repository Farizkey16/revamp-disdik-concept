"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function AuthPage({ children }: { children: React.ReactNode }) {

    // Hooks
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("backendlessToken");
        if (!token) {
            router.push("/sign-in")
        }
    }, [router])


    return <>{children}</>
}