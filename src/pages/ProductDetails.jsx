import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle2, FileText, ChevronRight, Shield, PhoneCall } from 'lucide-react';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';
import ProductCard from '../components/ProductCard';
import Reveal from '../components/Reveal';
import { PRODUCTS } from '../data/products';

const ProductDetails = () => {
  const { slug } = useParams();
  // Find product by slug or default to first product
  const product = PRODUCTS.find((p) => p.slug === slug) || PRODUCTS[0];

  // Related products from same category
  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.slug !== product.slug
  ).slice(0, 3);

  return (
    <div className="pt-28 pb-20 space-y-16">
      
      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2 text-xs font-semibold text-[#7A7D85]">
          <Link to="/" className="hover:text-[#2A2D33]">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/products" className="hover:text-[#2A2D33]">Products</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[#D32F2F] font-bold uppercase truncate max-w-[200px] sm:max-w-none">
            {product.name}
          </span>
        </div>
      </div>

      {/* Product Hero & Details */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Product Photography & Spec Cards */}
          <div className="lg:col-span-6 space-y-4">
            <Reveal>
              <div className="bg-[#FCFBF8] border border-[#E6E4DF] rounded-xl overflow-hidden shadow-lg p-2">
                <div className="relative h-[380px] sm:h-[480px] rounded-lg overflow-hidden bg-white">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-contain object-center p-5"
                  />
                  <div className="absolute top-4 left-4 bg-[#D32F2F] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded">
                    {product.categoryName}
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Quality Guarantee Note */}
            <div className="bg-[#FCFBF8] border border-[#E6E4DF] rounded-lg p-4 flex items-center space-x-3 text-xs text-[#7A7D85]">
              <Shield className="w-5 h-5 text-[#D32F2F] shrink-0" />
              <span>Product specifications are based on DACOTA's supplied technical catalogue. Configuration may vary by model.</span>
            </div>
          </div>

          {/* Right Column: Title, Features, Specs & Quote CTA */}
          <div className="lg:col-span-6 space-y-6">
            <Reveal>
              <div>
                <h1 className="text-2xl sm:text-4xl font-extrabold text-[#2A2D33] uppercase tracking-tight leading-tight">
                  {product.name}
                </h1>
                <p className="text-sm sm:text-base text-[#7A7D85] leading-relaxed mt-4">
                  {product.description}
                </p>
              </div>
            </Reveal>

            {/* Key Features List */}
            <Reveal delay={0.1}>
              <div className="bg-[#FCFBF8] border border-[#E6E4DF] rounded-lg p-5">
                <h3 className="text-xs font-bold text-[#2A2D33] uppercase tracking-wider mb-3">
                  Key Technical Features
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-[#2A2D33]">
                  {product.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-[#D32F2F] shrink-0 mt-0.5" />
                      <span className="leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Technical Specifications Matrix */}
            <Reveal delay={0.2}>
              <div className="border border-[#E6E4DF] rounded-lg overflow-hidden bg-[#FCFBF8]">
                <div className="bg-[#2A2D33] text-white px-4 py-2.5 text-xs font-bold uppercase tracking-wider">
                  Technical Specifications
                </div>
                <div className="divide-y divide-[#E6E4DF] text-xs">
                  {Object.entries(product.specs).map(([key, val]) => (
                    <div key={key} className="grid grid-cols-3 px-4 py-2.5">
                      <span className="font-semibold text-[#7A7D85] uppercase tracking-wider col-span-1">
                        {key.replace(/([A-Z])/g, ' $1')}
                      </span>
                      <span className="font-bold text-[#2A2D33] col-span-2">{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Request Quote Actions */}
            <Reveal delay={0.3}>
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
                <Button 
                  to={`/request-quote?product=${encodeURIComponent(product.name)}`}
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto flex-1"
                  icon={FileText}
                >
                  REQUEST PRODUCT QUOTE
                </Button>
                
                <Button 
                  to="/contact"
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                  icon={PhoneCall}
                >
                  ENQUIRE
                </Button>
              </div>
            </Reveal>

          </div>

        </div>
      </section>

      {/* Related Equipment Section */}
      {relatedProducts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 border-t border-[#E6E4DF]">
          <SectionTitle 
            badge="Category Lineup"
            title="RELATED COMMERCIAL EQUIPMENT"
            subtitle="Explore additional equipment engineered for similar food-service applications."
            align="left"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((rel) => (
              <ProductCard key={rel.id} product={rel} />
            ))}
          </div>
        </section>
      )}

    </div>
  );
};

export default ProductDetails;
