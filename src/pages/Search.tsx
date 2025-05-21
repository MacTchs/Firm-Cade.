
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ArticleCard from '@/components/ArticleCard';
import { articles, Article } from '@/lib/data';

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState<Article[]>([]);
  
  useEffect(() => {
    if (query) {
      const searchResults = articles.filter(article => {
        const searchableContent = [
          article.title,
          article.excerpt,
          article.content,
          article.author,
          article.category,
          ...article.tags
        ].join(' ').toLowerCase();
        
        return searchableContent.includes(query.toLowerCase());
      });
      
      setResults(searchResults);
    } else {
      setResults([]);
    }
  }, [query]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <div className="bg-firmcade-navbar text-firmcade-light py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold md:text-4xl">
              Search Results
            </h1>
            <p className="mt-4 text-gray-300 max-w-2xl">
              {results.length} results found for "{query}"
            </p>
          </div>
        </div>
        
        <section className="container mx-auto px-4 py-12">
          {results.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {results.map(article => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold mb-2">No Results Found</h2>
              <p className="text-gray-600">
                We couldn't find any articles matching your search query. Please try different keywords.
              </p>
            </div>
          )}
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Search;
