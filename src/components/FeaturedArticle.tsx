
import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from '@/lib/data';

interface FeaturedArticleProps {
  article: Article;
}

const FeaturedArticle: React.FC<FeaturedArticleProps> = ({ article }) => {
  return (
    <div className="relative h-[500px] w-full overflow-hidden rounded-xl">
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80 z-10" />
      <img 
        src={article.image} 
        alt={article.title}
        className="h-full w-full object-cover object-center"
      />
      <div className="absolute bottom-0 left-0 right-0 z-20 p-6 md:p-10">
        <Link to={`/category/${article.category.toLowerCase()}`}>
          <span className="inline-block mb-4 rounded bg-firmcade-primary px-3 py-1 text-sm font-semibold text-white">
            {article.category}
          </span>
        </Link>
        <Link to={`/article/${article.id}`}>
          <h1 className="mb-4 text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl">
            {article.title}
          </h1>
        </Link>
        <p className="mb-6 max-w-2xl text-base text-gray-200 md:text-lg">
          {article.excerpt}
        </p>
        <div className="flex items-center">
          <img 
            src={article.authorAvatar} 
            alt={article.author} 
            className="h-10 w-10 rounded-full mr-3"
          />
          <div>
            <p className="text-sm text-white">{article.author}</p>
            <p className="text-sm text-gray-300">{article.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedArticle;
