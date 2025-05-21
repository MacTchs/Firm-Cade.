
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ArticleCard from '@/components/ArticleCard';
import ShareButtons from '@/components/ShareButtons';
import { articles, getRelatedArticles } from '@/lib/data';

const Article = () => {
  const { id } = useParams<{ id: string }>();
  const article = articles.find(article => article.id === id);
  const relatedArticles = getRelatedArticles(id || '');
  
  useEffect(() => {
    if (article) {
      window.scrollTo(0, 0);
    }
  }, [article]);
  
  if (!article) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
            <p className="text-gray-600 mb-4">The article you're looking for doesn't exist or has been removed.</p>
            <Link to="/" className="text-firmcade-primary hover:underline">
              Return to Homepage
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const pageUrl = window.location.href;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <article className="container mx-auto px-4 py-8">
          {/* Article Header */}
          <div className="mb-8">
            <div className="mb-4 flex items-center gap-2">
              <Link
                to={`/category/${article.category.toLowerCase()}`}
                className="text-firmcade-primary hover:underline text-sm font-medium"
              >
                {article.category}
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-500 text-sm">
                {article.date}
              </span>
            </div>
            
            <h1 className="text-3xl font-bold leading-tight md:text-4xl lg:text-5xl mb-6">
              {article.title}
            </h1>
            
            <p className="text-xl text-gray-600 mb-6">
              {article.excerpt}
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  src={article.authorAvatar}
                  alt={article.author}
                  className="h-10 w-10 rounded-full mr-3"
                />
                <div>
                  <p className="font-medium">{article.author}</p>
                </div>
              </div>
              
              <ShareButtons 
                title={article.title} 
                url={pageUrl}
                image={article.image} 
              />
            </div>
          </div>
          
          {/* Article Featured Image */}
          <div className="mb-8">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-auto rounded-lg object-cover"
              style={{ maxHeight: "600px" }}
            />
          </div>
          
          {/* Article Content */}
          <div 
            className="article-content mb-12"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
          
          {/* Tags */}
          <div className="mb-10">
            <h4 className="text-lg font-semibold mb-3">Tags:</h4>
            <div className="flex flex-wrap">
              {article.tags.map(tag => (
                <Link
                  key={tag}
                  to={`/tag/${tag.toLowerCase()}`}
                  className="article-tag"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Share Again */}
          <div className="border-t border-gray-200 pt-6 mb-12">
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-semibold">Share this article:</h4>
              <ShareButtons 
                title={article.title} 
                url={pageUrl}
                image={article.image} 
              />
            </div>
          </div>
        </article>
        
        {/* Related Articles */}
        <section className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedArticles.map(article => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Article;
