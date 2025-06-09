import { apiBackend } from "@/utils/apiHelper";
import parse from "html-react-parser"
import Navbar from "@/components/Header";


type Props = {
    params: {
        id: string;
        slug: string;
    };
}

const getBlogPostDetail = async (id:string) => {
    
    try {

    const response = await apiBackend.get(`/api/data/blog-posts/${id}`);
    return response.data;

    } catch(error) {
        console.error(error);
    }
}

export default async function BlogPostPage({params,}: Props) {
    const blog = await getBlogPostDetail(params.id);

    if (!blog) {
        return <div>Blog tidak ditemukan.</div>
    }

    return (
    <div>
    <Navbar/>
    <div className="max-w-3xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="text-sm text-gray-500 mb-2">Oleh {blog.author} • {new Date(blog.publishDate).toLocaleDateString()}</p>
      <div className="prose">{parse(blog.content)}</div>
    </div>
    </div>
  );
}