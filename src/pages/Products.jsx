import React from 'react';
import './Products.css';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import { PRODUCTS, CATEGORIES } from '../data/products';

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategory = searchParams.get('category') || 'all';
  const filteredProducts = PRODUCTS.filter((product) => selectedCategory === 'all' || product.category === selectedCategory);

  const selectCategory = (category) => {
    setSearchParams(category === 'all' ? {} : { category });
  };

  return (
    <main className="products-page">
      <section className="products-intro">
        <div className="products-shell">
          <motion.div className="products-intro-grid" initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div>
              <h1>Equipment for kitchens that mean business.</h1>
            </div>
            <div className="products-intro-aside">
              <p>Commercial cooking, preparation, refrigeration, baking, and service equipment selected for demanding food-service operations.</p>
              <Link to="/request-quote">Need help choosing? <ArrowRight size={15} /></Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="products-directory products-shell">
        <div className="products-result-heading">
          <div>
            <span>Current selection</span>
            <h2>{selectedCategory === 'all' ? 'All equipment' : CATEGORIES.find((category) => category.id === selectedCategory)?.name}</h2>
          </div>
          {selectedCategory !== 'all' && <button onClick={() => selectCategory('all')}>Clear selection</button>}
        </div>

        {filteredProducts.length ? (
          <div className="products-grid">
            {filteredProducts.map((product, index) => (
              <motion.div key={product.id} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-30px' }} transition={{ duration: 0.48, delay: Math.min(index * 0.05, 0.25) }}>
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="products-empty"><span>No products in this category yet.</span><p>Return to the full equipment directory to see every available product.</p><button onClick={() => selectCategory('all')}>View all equipment</button></div>
        )}
      </section>

      <section className="products-advice products-shell">
        <div><span>Project support</span><h2>Not sure what your kitchen needs?</h2></div>
        <p>Share your menu, expected volume, and available space. We’ll help define the right equipment mix.</p>
        <Link to="/request-quote">Discuss your project <ArrowRight size={17} /></Link>
      </section>
    </main>
  );
};

export default Products;
