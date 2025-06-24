import { apiPrisma } from "@/utils/apiHelper";
import { slugify } from "@/utils/slugify";

interface ArticleProps {
  params: {
    id: string;
    title: string;
  };
}

const getArticlesDetail = async (title: String, id: String) => {
  try {
    const articles = await apiPrisma.get(`/Articles/${id}/${title}`);
    console.log(articles.data.data);
    return articles.data.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export default async function ArticleDetail(props: ArticleProps) {
  const params = await props.params // Per Next.js 15 documentation recommendation, params must be awaited.
  
  const { title, id } = params
  const article_fetch = await getArticlesDetail(title, id);
  

  if (!article_fetch) {
    return <div>Article not found.</div>;
  }

  return (
     <div key={article_fetch.id} className="p-6 max-w-3xl mx-auto">
    {/* Cover Image */}
    <div className="mb-6">
      <img
        src={article_fetch.thumbnail}
        alt={`Thumbnail for ${article_fetch.title}`}
        className="w-full h-64 object-cover rounded-lg shadow"
      />
    </div>

    {/* Title & Meta */}
    <h1 className="text-3xl font-bold mb-4">{article_fetch.title}</h1>
    <p className="text-gray-600 mb-8 italic">
      Oleh <span className="font-semibold">{article_fetch.author.username}</span> –{" "}
      {article_fetch.category.category_name}
    </p>

    {/* Content */}
    <div className="prose prose-lg">{article_fetch.content}</div>
  </div>
  );
}
