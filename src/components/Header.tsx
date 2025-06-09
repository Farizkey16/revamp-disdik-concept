"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import {Menu, X} from "lucide-react"
import { Button } from "./ui/button"
import { useAuth } from "@/app/context/AuthContext"

interface HeaderTypes{
    name: string,
    href: string
}


const navItems: HeaderTypes[] = [
    { name: 'Home', href: '/'},
    { name: 'About Us', href: '/about-us' },
    { name: 'Services', href: '/services'},
    { name: 'Teams', href: '/teams'},
    { name: 'Blog', href: '/blog'},
    { name: 'Create Blog', href: '/create-blog'}
]

export default function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false)
    const { state, dispatch } = useAuth();

    return <nav className="bg-white shadow w-full sticky top-0 z-50   ">
        <div className="flex items-center px-4 justify-between  max-w-7xl mx-auto">

            {/* Logo */}
            <div className="flex items-center">
            <Image className="w-25 h-25 object-contain" width={300} height={300} src="/assets/logo-disdik.png" alt="logo dinas pendidikan DKI Jakarta" />
            <span className="text-md font-bold md:hidden lg:block">Halo, {state.user?.email || "tamu" + "!"}</span>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-12 text-sm md:gap-7 xl:gap-12 font-medium items-center">
                {navItems.map((value, index) => 
                <li key={index}>
                <Link className="hover:text-blue-600 hover:underline font-bold" href={value.href}> {value.name}</Link>  
                </li>
                )}
                <li>{state.isAuthenticated === true ? (
                            <Button onClick={() => dispatch({type: 'LOGOUT'})} className="cursor-pointer font-bold bg-red-500 hover:bg-red-700">
                                Keluar
                            </Button>
                            ) : (
                            <Button className="cursor-pointer font-bold bg-blue-500 hover:bg-blue-700">
                                <Link href={"/sign-in"}>Masuk</Link>
                            </Button>
                            )}</li>
            </ul>

            {/* Mobile Menu */}
            <button
                onClick = {() => setMenuOpen(!menuOpen)}
                className="md:hidden focus:outline-none"
            >
                {menuOpen ? <X size={30}/> : <Menu size={30}/>}
            </button>

            {menuOpen && (
                <div className="md:hidden px-4 pb-4">
                <ul className="flex flex-col gap-2 text-sm font-medium">
                    {navItems.map((value) => (
                        <li key={value.href}>
                            <Link
                            href= {value.href}
                            className="block py-2 border-gray-200 hover:text-blue-600"
                            onClick = {() => setMenuOpen(false)}>
                            {value.name}
                            </Link>
                        </li>
                    ))}
                    <li>
                        {state.isAuthenticated === true ? (
                            <Button onClick={() => dispatch({type: 'LOGOUT'})} className="cursor-pointer font-bold bg-red-500 hover:bg-red-700">
                                Keluar
                            </Button>
                            ) : (
                            <Button className="cursor-pointer font-bold bg-blue-500 hover:bg-blue-700">
                                <Link href={"/sign-in"}>Masuk</Link>
                            </Button>
                            )}
                    </li>
                </ul>
                </div>
            )}
        </div>
    </nav>
}