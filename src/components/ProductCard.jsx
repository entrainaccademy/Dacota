import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const ProductCard = ({ product }) => {
  return (
    <article className={`catalogue-card group ${product.category === 'commercial-fryers' ? 'catalogue-card--fryer' : ''}`}>
      <Link to={`/products/${product.slug}`} className="catalogue-card-link" aria-label={`View ${product.name}`}>
        <div className="catalogue-card-image">
          <img src={product.image} alt={product.name} loading="lazy" />
        </div>
        <div className="catalogue-card-body">
          <h3>{product.name}</h3>
          <span className="catalogue-card-open">View product <ArrowUpRight size={14} /></span>
        </div>
      </Link>
    </article>
  );
};

export default ProductCard;
