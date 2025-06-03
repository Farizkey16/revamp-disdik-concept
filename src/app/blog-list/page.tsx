"use client"

import { apiCall } from "@/utils/apiHelper"
import { useState, useEffect } from "react"
import Link from "next/link"
import Navbar from "@/components/Header"
import Image from "next/image"





export default function BlogPage() {
    const [posts, setPosts] = useState([])

    function textExtract(value: any) {
        if (!value || !Array.isArray(value)) return "";
        return value.map(value => {
            if(!value.children) return "";
            return value.children.map((child: { text: string }) => child.text).join("");
    }).join("\n");
    }
    
useEffect(() => {
  const blog_entries_fetch = async () => {
    try {
      const blog_data = await apiCall.get("/api/blog-posts");
      
      setPosts(blog_data.data.data.map((value: any) => ({
        title: value.title,
        author: value.author,
        publishDate: value.publishDate,
        summary: textExtract(value.summary),
        content: textExtract(value.content),
        slug: value.slug,
        id: value.id
      })));
    } catch (e) {
      alert("Failed to fetch blog posts.");
    }
  }
  blog_entries_fetch();
}, []);

   
    return (
        <div>
         <Navbar/>
        <section className="relative py-12 w-full h-[60vh] md:h-[80vh] sm:px-6 lg:px-8 mx-auto">
            {/* Blog List Hero Image */}
                <div className="absolute inset-0 z-0">
                        <Image
                        src="/assets/blogcover.webp"
                        alt="foto pegawai disdik Jakarta"
                        quality={80}
                        fill
                        priority
                        className="object-cover"/>
                        <div className="absolute inset-0 bg-black/50"></div>
                </div>
                {/* Blog List Hero Text */}
                <div className="relative flex flex-col justify-center items-center text-left z-10 mx-auto h-full text-white px-2 md:px-0">
                        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-2 sm:mb-4">Articles</h1>
                        <p className="px-2 sm:px-4 max-w-xl sm:max-w-2xl md:max-w-3xl text-sm sm:text-base md:text-lg text-center"> Pilihan artikel tulisan tim Disdik DKI Jakarta</p>
                </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 pt-12">
            {posts.map((blog: any) => ( 
                <div key={blog.id} className="bg-white shadow rounded-lg p-6 flex flex-col justify-between">
                    <div>
                        <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                        <p className="text-gray-600 text-sm mb-4 ">{blog.summary}</p>
                    </div>
                    <div className="text-sm text-gray-500 mb-4 italic">
                        Oleh <span className="font-semibold">{blog.author}</span> pada {new Date(blog.publishDate).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric'})}
                    </div>
                    <Link
                    href={`/blog-list/${blog.slug}`} className="text-blue-600 font-medium hover:underline self-start"
                    >
                        Baca Selengkapnya
                    </Link>        
                </div>
            ))}
            </div>
        </section>
        </div>
    )
}