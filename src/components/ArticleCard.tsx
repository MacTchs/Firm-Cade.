
import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from '@/lib/data';

interface ArticleCardProps {
  article: Article;
  variant?: 'default' | 'small' | 'featured';
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, variant = 'default' }) => {
  if (variant === 'featured') {
    return (
      <div className="group relative h-full w-full overflow-hidden rounded-lg bg-gray-100 shadow-lg transition-all duration-300 hover:shadow-xl">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent opacity-80 z-10" />
        <img 
          src={article.image} 
          alt={article.title}
          className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 right-0 z-20 p-5">
          <Link to={`/category/${article.category.toLowerCase()}`}>
            <span className="inline-block mb-2 rounded bg-firmcade-primary px-2 py-1 text-xs font-semibold text-white">
              {article.category}
            </span>
          </Link>
          <Link to={`/article/${article.id}`}>
            <h3 className="mb-2 text-xl font-bold text-white md:text-2xl lg:text-3xl">
              {article.title}
            </h3>
          </Link>
          <p className="mb-3 line-clamp-2 text-sm text-gray-200">
            {article.excerpt}
          </p>
          <div className="flex items-center">
            <img 
              src={article.authorAvatar} 
              alt={article.author} 
              className="h-8 w-8 rounded-full mr-2"
            />
            <div>
              <p className="text-xs text-white">{article.author}</p>
              <p className="text-xs text-gray-300">{article.date}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  if (variant === 'small') {
    return (
      <div className="group flex h-full gap-4 rounded-lg transition-all hover:bg-gray-50 p-2">
        <div className="flex-shrink-0 w-24 h-24 overflow-hidden rounded-md">
          <Link to={`/article/${article.id}`}>
            <img 
              src={article.image} 
              alt={article.title}
              className="h-full w-full object-cover object-center" 
            />
          </Link>
        </div>
        <div className="flex flex-col">
          <div className="flex-grow">
            <Link to={`/article/${article.id}`}>
              <h3 className="text-sm font-bold leading-tight mb-1 group-hover:text-firmcade-primary">
                {article.title}
              </h3>
            </Link>
            <div className="flex gap-2 mb-2">
              {article.tags.slice(0, 1).map(tag => (
                <Link 
                  key={tag} 
                  to={`/tag/${tag.toLowerCase()}`}
                  className="text-xs text-gray-500 hover:text-gray-700"
                >
                  #{tag}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <p className="text-xs text-gray-500">{article.date}</p>
          </div>
        </div>
      </div>
    );
  }
  
  // Default variant
  return (
    <div className="group h-full overflow-hidden rounded-lg bg-white shadow transition-all duration-300 hover:shadow-lg">
      <div className="relative overflow-hidden h-48">
        <Link to={`/article/${article.id}`}>
          <img 
            src={article.image} 
            alt={article.title}
            className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105" 
          />
        </Link>
        <div className="absolute top-2 left-2">
          <Link to={`/category/${article.category.toLowerCase()}`}>
            <span className="inline-block rounded bg-firmcade-primary px-2 py-1 text-xs font-semibold text-white">
              {article.category}
            </span>
          </Link>
        </div>
      </div>
      <div className="p-4">
        <Link to={`/article/${article.id}`}>
          <h3 className="mb-2 text-lg font-bold leading-snug group-hover:text-firmcade-primary">
            {article.title}
          </h3>
        </Link>
        <p className="mb-3 line-clamp-2 text-sm text-gray-600">
          {article.excerpt}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src={article.authorAvatar} 
              alt={article.author} 
              className="h-6 w-6 rounded-full mr-2"
            />
            <p className="text-xs text-gray-500">{article.author}</p>
          </div>
          <p className="text-xs text-gray-500">{article.date}</p>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
