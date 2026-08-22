import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Flame, Wheat, Utensils, Snowflake, Layers, Droplets, Wind, Box, Coffee, Truck } from 'lucide-react';

const iconMap = {
  Flame,
  Wheat,
  Utensils,
  Snowflake,
  Layers,
  Droplets,
  Wind,
  Box,
  Coffee,
  Truck
};

const CategoryCard = ({ category }) => {
  const IconComponent = iconMap[category.icon] || Flame;

  return (
    <Link 
      to={`/products?category=${category.id}`}
      className="group bg-white border border-zinc-200 hover:border-black rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full relative"
    >
      {/* Image container with hover zoom */}
      <div className="relative h-48 overflow-hidden bg-black">
        <img 
          src={category.image} 
          alt={category.name}
          className="w-full h-full object-cover object-center opacity-90 group-hover:opacity-100 transition-opacity duration-300" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
        
        {/* Number badge */}
        <div className="absolute top-3 left-3 bg-black/80 backdrop-blur border border-zinc-700 text-white text-xs font-mono font-bold px-2.5 py-1 rounded">
          {category.number}
        </div>

        {/* Category Icon */}
        <div className="absolute bottom-3 right-3 w-10 h-10 rounded bg-[#09090B] border border-zinc-700 text-white flex items-center justify-center shadow-lg group-hover:bg-[#D32F2F] group-hover:border-[#D32F2F] transition-all duration-300">
          <IconComponent className="w-5 h-5" />
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="text-lg font-bold text-[#09090B] group-hover:text-[#D32F2F] transition-colors duration-300 uppercase tracking-tight">
            {category.name}
          </h3>
          <p className="text-xs text-zinc-600 mt-2 line-clamp-2 leading-relaxed">
            {category.shortDesc}
          </p>
        </div>

        {/* Footer link */}
        <div className="mt-4 pt-3 border-t border-zinc-200 flex items-center justify-between text-xs font-bold text-[#09090B] group-hover:text-[#D32F2F]">
          <span className="uppercase tracking-wider">VIEW PRODUCTS</span>
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300 text-[#D32F2F]" />
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
