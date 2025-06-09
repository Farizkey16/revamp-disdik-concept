"use client"
import AuthPage from "@/components/AuthenticationPage";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { apiBackend, apiCall } from "@/utils/apiHelper";


export default function BlogCreationPage() {

    return (
        <AuthPage>
        <BlogForm/>
        </AuthPage>
    )
}


function BlogForm() {

    const [title, setTitle] = useState("")
    const [summary, setSummary] = useState("")
    const [content, setContent] = useState("")

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const token = localStorage.getItem("backendlessToken");

        // Fetching author name
        const response = await apiBackend.get("/api/data/Users")
        const user_data = response.data
        const author = user_data.username
        console.log(author)

        try {
        const post_blog = await apiCall.post("/api/blog-posts", {
            "data": {
            title,
            summary,
            content,
            author,
            // publishDate: new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric'})
            }
        }, {
            headers: {
                "user-token": token,
            },
        })

        alert("Successfully posted the blog!")

        } catch(err) {
            console.error(err);
            console.log(err)
            alert("There's an error in posting the blog.")
        }

    }


   return <section className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-md">
        <Card className="p-8 shadow-xl border rounded-2xl">
          <h2 className="mb-8 text-3xl font-bold text-center text-gray-800">Write your Blog Post:</h2>
          <form className="space-y-6"
          onSubmit={onSubmit}>
             <label className="text-sm font-medium">Title</label>
            <Input placeholder="Write your post title here" value={title} onChange={e => setTitle(e.target.value)}/>
            <div className="flex flex-col py-3 gap-3">
                <div className="flex flex-col">
                    <label className="text-sm font-medium">Summary</label>
                    <textarea className="border-2 rounded-md p-2"rows={3} placeholder="Write a summary of your post here" value={summary} onChange={e => setSummary(e.target.value)}/>
                </div>
                <div  className="flex flex-col">
                    <label className="text-sm font-medium">Content</label>
                    <textarea className="border-2 rounded-md p-2" rows={8} placeholder="Write the content of your post here" value={content} onChange={e => setContent(e.target.value)}/>
                </div>
            </div>
            <Button id="submit-post" type="submit">Post Blog</Button>
          </form>
        </Card>
      </div>
    </section>




}