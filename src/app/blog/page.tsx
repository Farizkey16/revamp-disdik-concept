"use client";

import { apiBackend } from "@/utils/apiHelper";
import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Header";
import Image from "next/image";
import { slugify } from "@/utils/slugify";
import Footer from "@/components/Footer";
import { apiPrisma } from "@/utils/apiHelper";

export default function BlogPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const blog_entries_fetch = async () => {
      try {
        // Fetch from Backendless
        // const blog_data = await apiBackend.get("/api/data/blog-posts");

        // Fetch from Prisma
        const blog_prisma = await apiPrisma.get("/Articles");
        console.log(blog_prisma.data.data);
        // console.log(blog_prisma.data.data.author.username)
        // console.log(blog_prisma.data.data.category.category_name)

        setPosts(
          blog_prisma.data.data.map((value: any) => ({
            id: value.id,
            thumbnail: value.thumbnail,
            title: value.title,
            content: value.content,
            author: value.author,
            category: value.category,
          }))
        );
      } catch (e) {
        alert("Failed to fetch blog posts.");
      }
    };
    blog_entries_fetch();
  }, []);

  return (
    <main>
      <section className="relative pt-20 w-full h-[60vh] md:h-[80vh] sm:px-6 lg:px-8 mx-auto">
        {/* Blog List Hero Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/blogcover.webp"
            alt="foto pegawai disdik Jakarta"
            quality={80}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        {/* Blog List Hero Text */}
        <div className="relative flex flex-col justify-center items-center text-left z-10 mx-auto h-full text-white px-2 md:px-0">
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-2 sm:mb-4">
            Articles
          </h1>
          <p className="px-2 sm:px-4 max-w-xl sm:max-w-2xl md:max-w-3xl text-sm sm:text-base md:text-lg text-center">
            {" "}
            Pilihan artikel tulisan tim Disdik DKI Jakarta
          </p>
        </div>
      </section>
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 pt-12">
          {posts.map((blog: any) => (
            <div
              key={blog.id}
              className="bg-white shadow rounded-lg p-6 flex flex-col justify-between"
            >
              <img src={blog.thumbnail} alt={blog.title} className="object-cover w-full h-48" />
              <div className="p-4 flex flex-col gap-2 flex-grow">
                <h3 className="text-xl font-semibold">{blog.title}</h3>
                <p className="text-gray-600 text-sm line-clamp-2 ">{blog.content}</p>
              </div>
              <div className="px-4 pb-4 text-xs text-gray-500 italic">
                Oleh{" "}
                <span className="font-semibold">{blog.author.username}</span>{" "}
                pada
                {""} <span className="font-semibold">{blog.category.category_name}</span>
              </div>
              <div className="px-4 pb-4">
              <Link
                href={`/blog/${blog.id}/${slugify(blog.title)}`}
                className="text-blue-600 font-medium hover:underline self-start"
              >
                Baca Selengkapnya
              </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
