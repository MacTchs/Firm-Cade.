
import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ArticleCard from '@/components/ArticleCard';
import { getArticlesByTag } from '@/lib/data';

const Tag = () => {
  const { tag } = useParams<{ tag: string }>();
  const articles = getArticlesByTag(tag || '');

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <div className="bg-firmcade-navbar text-firmcade-light py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold md:text-4xl">
              #{tag}
            </h1>
            <p className="mt-4 text-gray-300 max-w-2xl">
              Articles tagged with #{tag}
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
                There are no articles with this tag. Try searching for a different tag.
              </p>
            </div>
          )}
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Tag;
