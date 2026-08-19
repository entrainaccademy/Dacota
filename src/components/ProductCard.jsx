import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const ProductCard = ({ product, index = 0 }) => {
  return (
    <article className="catalogue-card group">
      <Link to={`/products/${product.slug}`} className="catalogue-card-image">
        <img 
          src={product.image} 
          alt={product.name} 
          loading="lazy"
        />
        <span className="catalogue-card-number">{String(index + 1).padStart(2, '0')}</span>
        <span className="catalogue-card-view"><ArrowUpRight size={18} /></span>
      </Link>
      <div className="catalogue-card-body">
        <span className="catalogue-card-category">{product.categoryName}</span>
        <Link to={`/products/${product.slug}`}><h3>{product.name}</h3></Link>
        <p>{product.description}</p>
        <div className="catalogue-card-footer">
          <span>{product.specs?.powerFuel || product.specs?.capacity || 'Commercial grade'}</span>
          <Link to={`/request-quote?product=${encodeURIComponent(product.name)}`}>Request quote</Link>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
