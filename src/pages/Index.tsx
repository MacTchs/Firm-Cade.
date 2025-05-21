
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeaturedArticle from '@/components/FeaturedArticle';
import ArticleCard from '@/components/ArticleCard';
import { 
  getFeaturedArticles, 
  getTrendingArticles, 
  getLatestArticles
} from '@/lib/data';

const Index = () => {
  const featuredArticles = getFeaturedArticles();
  const trendingArticles = getTrendingArticles();
  const latestArticles = getLatestArticles();
  
  // State to control how many storyline articles to show
  const [storyLimit, setStoryLimit] = useState(3);
  
  // Get the main featured article and the rest
  const mainFeatured = featuredArticles[0];
  const secondaryFeatured = featuredArticles.slice(1);
  
  const handleShowMoreStories = () => {
    setStoryLimit(prev => prev + 3);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section with Featured Article */}
        <section className="container mx-auto px-4 pt-6 pb-12">
          <FeaturedArticle article={mainFeatured} />
        </section>
        
        {/* Secondary Featured Articles */}
        <section className="container mx-auto px-4 py-8">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-bold">Featured Stories</h2>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {secondaryFeatured.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </section>
        
        {/* Storyline */}
        <section className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-2xl font-bold">Storyline</h2>
              <Link 
                to="/category/latest" 
                className="flex items-center text-sm font-medium text-firmcade-primary hover:underline"
              >
                See all stories
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {trendingArticles.slice(0, storyLimit).map(article => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
            
            {storyLimit < trendingArticles.length && (
              <div className="mt-8 text-center">
                <button
                  onClick={handleShowMoreStories}
                  className="rounded-md bg-firmcade-primary px-6 py-2 text-white hover:bg-blue-600 transition-colors"
                >
                  Show More Stories
                </button>
              </div>
            )}
          </div>
        </section>
        
        {/* Latest News */}
        <section className="container mx-auto px-4 py-12">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-bold">Latest News</h2>
            <Link 
              to="/category/latest" 
              className="flex items-center text-sm font-medium text-firmcade-primary hover:underline"
            >
              View all
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              {latestArticles[0] && (
                <ArticleCard article={latestArticles[0]} variant="featured" />
              )}
            </div>
            
            <div className="flex flex-col space-y-6">
              {latestArticles.slice(1, 5).map(article => (
                <ArticleCard key={article.id} article={article} variant="small" />
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
