
import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ArticleCard from '@/components/ArticleCard';
import { categories, getArticlesByCategory } from '@/lib/data';

const Category = () => {
  const { slug } = useParams<{ slug: string }>();
  const currentCategory = categories.find(category => category.slug === slug);
  const articles = getArticlesByCategory(slug || '');

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <div className="bg-firmcade-navbar text-firmcade-light py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold md:text-4xl">
              {currentCategory?.name || "Category"}
            </h1>
            <p className="mt-4 text-gray-300 max-w-2xl">
              {slug === 'latest' 
                ? "Stay updated with the most recent news and developments." 
                : `Explore our latest articles and insights about ${currentCategory?.name || "this topic"}.`}
            </p>
          </div>
        </div>
        
        <section className="container mx-auto px-4 py-12">
          {articles.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {articles.map(article => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold mb-2">No Articles Found</h2>
              <p className="text-gray-600">
                There are no articles in this category yet. Please check back later.
              </p>
            </div>
          )}
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Category;
