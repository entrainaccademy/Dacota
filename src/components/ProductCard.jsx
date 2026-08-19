import React from 'react';
import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';
import Button from './Button';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white border border-zinc-200 hover:border-black rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group">
      {/* Product Image */}
      <div className="relative h-56 overflow-hidden bg-zinc-100">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 bg-[#09090B] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
          {product.categoryName}
        </div>
      </div>

      {/* Product Body */}
      <div className="p-5 flex flex-col flex-grow justify-between">
        <div>
          <Link to={`/products/${product.slug}`}>
            <h3 className="text-lg font-extrabold text-[#09090B] group-hover:text-[#D32F2F] transition-colors duration-200 line-clamp-1 uppercase">
              {product.name}
            </h3>
          </Link>
          <p className="text-xs text-zinc-600 mt-2 line-clamp-2 leading-relaxed">
            {product.description}
          </p>

          {/* Quick Specifications */}
          {product.specs && (
            <div className="mt-4 pt-3 border-t border-zinc-200 space-y-1.5 text-xs text-[#09090B]">
              <div className="flex items-center justify-between">
                <span className="text-zinc-500 font-medium">Material:</span>
                <span className="font-semibold text-right">{product.specs.material || 'SS 304'}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-zinc-500 font-medium">Application:</span>
                <span className="font-semibold text-right truncate max-w-[150px]">{product.specs.application?.split(',')[0]}</span>
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="mt-5 pt-4 border-t border-zinc-200 flex items-center gap-2">
          <Button 
            to={`/products/${product.slug}`} 
            variant="outline" 
            size="sm" 
            className="flex-1 text-[11px]"
            icon={FileText}
          >
            Details
          </Button>
          <Button 
            to={`/request-quote?product=${encodeURIComponent(product.name)}`} 
            variant="primary" 
            size="sm" 
            className="flex-1 text-[11px]"
          >
            Get Quote
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
