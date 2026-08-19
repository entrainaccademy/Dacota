import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter, RefreshCw, SlidersHorizontal } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import ProductCard from '../components/ProductCard';
import Reveal from '../components/Reveal';
import Button from '../components/Button';
import { PRODUCTS, CATEGORIES } from '../data/products';

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      setSelectedCategory(cat);
    }
  }, [searchParams]);

  const handleCategoryChange = (catId) => {
    setSelectedCategory(catId);
    if (catId === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: catId });
    }
  };

  // Filter products based on search and category
  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.categoryName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-28 pb-20 space-y-12">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#E6E4DF]/60 to-[#F5F3EF] py-12 border-b border-[#E6E4DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            badge="Product Catalogue"
            title="COMMERCIAL KITCHEN EQUIPMENT"
            subtitle="Browse heavy-duty equipment designed and manufactured for commercial food-service operations."
            align="left"
            className="mb-0"
          />
        </div>
      </section>

      {/* Main Filter & Catalogue */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Search & Category Filter Controls */}
        <div className="bg-[#FCFBF8] border border-[#E6E4DF] rounded-xl p-4 sm:p-6 shadow-sm mb-8 space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 absolute left-3.5 top-3 text-[#7A7D85]" />
              <input 
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search equipment..."
                className="w-full pl-10 pr-4 py-2 bg-[#F5F3EF] border border-[#E6E4DF] rounded text-sm text-[#2A2D33] focus:outline-none focus:ring-2 focus:ring-[#D32F2F] focus:bg-white"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')} 
                  className="absolute right-3 top-2.5 text-xs text-[#7A7D85] hover:text-[#2A2D33]"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Results Count & Reset */}
            <div className="flex items-center space-x-4 text-xs font-semibold text-[#7A7D85]">
              <span>Showing {filteredProducts.length} items</span>
              {(selectedCategory !== 'all' || searchQuery) && (
                <button 
                  onClick={() => {
                    setSelectedCategory('all');
                    setSearchQuery('');
                    setSearchParams({});
                  }}
                  className="inline-flex items-center text-[#D32F2F] hover:underline"
                >
                  <RefreshCw className="w-3 h-3 mr-1" />
                  Reset Filters
                </button>
              )}
            </div>

          </div>

          {/* Category Tabs */}
          <div className="pt-4 border-t border-[#E6E4DF] flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <button
              onClick={() => handleCategoryChange('all')}
              className={`px-3.5 py-1.5 rounded text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-[#D32F2F] text-white'
                  : 'bg-[#F5F3EF] text-[#2A2D33] hover:bg-[#E6E4DF]'
              }`}
            >
              All Categories
            </button>

            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-3.5 py-1.5 rounded text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-colors ${
                  selectedCategory === cat.id
                    ? 'bg-[#D32F2F] text-white'
                    : 'bg-[#F5F3EF] text-[#2A2D33] hover:bg-[#E6E4DF]'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, idx) => (
              <Reveal key={product.id} delay={idx * 0.05}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="bg-[#FCFBF8] border border-[#E6E4DF] rounded-xl p-12 text-center my-8">
            <SlidersHorizontal className="w-10 h-10 text-[#7A7D85] mx-auto mb-3" />
            <h3 className="text-lg font-bold text-[#2A2D33] uppercase">No Equipment Found</h3>
            <p className="text-xs text-[#7A7D85] mt-1">Try adjusting your search terms or category selection.</p>
            <div className="mt-4">
              <Button onClick={() => { setSelectedCategory('all'); setSearchQuery(''); setSearchParams({}); }} variant="outline" size="sm">
                View All Products
              </Button>
            </div>
          </div>
        )}

      </section>

      {/* Quote Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#2A2D33] text-white rounded-xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#3A3E46]">
          <div>
            <h3 className="text-xl font-bold uppercase">NEED CUSTOM EQUIPMENT OR A BULK QUOTATION?</h3>
            <p className="text-xs text-[#A0A3AB] mt-1">Our engineering team can fabricate equipment to your exact dimensional & technical specs.</p>
          </div>
          <Button to="/request-quote" variant="primary" size="md" className="shrink-0">
            REQUEST CUSTOM QUOTE
          </Button>
        </div>
      </section>

    </div>
  );
};

export default Products;
