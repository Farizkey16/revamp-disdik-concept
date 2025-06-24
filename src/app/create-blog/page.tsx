"use client";
import AuthPage from "@/components/AuthenticationPage";
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { apiBackend, apiCall, apiPrisma } from "@/utils/apiHelper";
import { supabase } from "@/utils/supabaseClient";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";

async function uploadThumbnail(file: File) {
  const fileName = `${Date.now()}-${file.name}`;
  

  const { data, error } = await supabase.storage
    .from("blog-thumbnails")
    .upload(fileName, file, {
      cacheControl: "3600",
      upsert: false,
    });
  if (error) {
    throw error;
  }

  const { data: publicUrlData } = supabase.storage
    .from("blog-thumbnails")
    .getPublicUrl(fileName);

  return publicUrlData?.publicUrl;
}

export default function BlogCreationPage() {
  return (
    <AuthPage>
      <BlogForm />
    </AuthPage>
  );
}

function BlogForm() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState<number>(1);
  const [content, setContent] = useState("");
  const [thumbnail, setThumbnail] = useState<string | File>("");
  const router = useRouter();
  const { state } = useAuth();
  useEffect(() => {
    const fetchCategories = async () => {
      fetch("http://localhost:2077/Category")
        .then((res) => res.json())
        .then((data) => setCategory(data));
    };
    fetchCategories();
  }, []);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const token = localStorage.getItem("backendlessToken");

    let thumbnailUrl = "";

    if (thumbnail && typeof thumbnail !== "string") {
      thumbnailUrl = await uploadThumbnail(thumbnail);
    }

    try {
      // Posting to Backendless
      //   const post_blog = await apiCall.post(
      //     "/api/blog-posts",
      //     {
      //       data: {
      //         title,
      //         content,
      //         author,
      //       },
      //     },
      //     {
      //       headers: {
      //         "user-token": token,
      //       },
      //     }
      //   );

      // Posting to Prisma
      const article = await apiPrisma.post(
        "/create-blog",
        {
          data: {
            title,
            content,
            thumbnail: thumbnailUrl,
            author: state.user?.email,
            category: selectedCategory,
          },
        },
        {
          headers: {
            "user-token": token,
          },
        }
      );

      alert("Successfully posted the blog!");
      router.replace("/blog")
      //Reset fields
      setTitle("");
      setContent("");
      setThumbnail("");
      setSelectedCategory(1);
    } catch (err) {
      console.error(err);
      console.log(err);
      alert("There's an error in posting the blog.");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-md">
        <Card className="p-8 shadow-xl border rounded-2xl">
          <h2 className="mb-8 text-3xl font-bold text-center text-gray-800">
            Write your Blog Post, {state.user?.email}:
          </h2>
          <form className="space-y-6" onSubmit={onSubmit}>
            {/* Image Thumbnail */}
            <div className="flex flex-col mb-4">
              <label htmlFor="thumbnail" className="text-sm font-medium mb-2">
                Upload thumbnail picture
              </label>
              <label
                htmlFor="thumbnail"
                className="inline-block bg-black text-white px-3 py-2 rounded-md cursor-pointer w-fit"
              >
                Choose File
                <input
                  type="file"
                  id="thumbnail"
                  accept="image/png, image/jpeg"
                  className="hidden"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      setThumbnail(e.target.files[0]);
                    }
                  }}
                />
              </label>
              {thumbnail && typeof thumbnail !== "string" && (
                <span className="mt-2 text-xs text-gray-600">
                  {thumbnail.name}
                </span>
              )}
            </div>

            {/* Title */}
            <label className="text-sm font-medium">Title</label>
            <Input
              placeholder="Write your post title here"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <div className="flex flex-col py-3 gap-3">
              {/* Content */}
              <div className="flex flex-col">
                <label className="text-sm font-medium">Content</label>
                <textarea
                  className="border-2 rounded-md p-2"
                  rows={8}
                  placeholder="Write the content of your post here"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              </div>

              {/* Category */}
              <div className="flex flex-col">
                <label className="text-sm font-medium">Category</label>
                <select
                  className="border-2 rounded-md p-2"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(Number(e.target.value))}
                >
                  {category.map((cat: any) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.category_name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <Button
              role="button"
              id="submit-post"
              type="submit"
              className="cursor-pointer"
            >
              Post Blog
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
}
