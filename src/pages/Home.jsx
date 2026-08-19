import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Wrench, 
  Compass, 
  Headphones, 
  MapPin, 
  ChevronRight,
  Box,
  Flame
} from 'lucide-react';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';
import CategoryCard from '../components/CategoryCard';
import ProjectCard from '../components/ProjectCard';
import Reveal from '../components/Reveal';
import { CATEGORIES } from '../data/products';
import { INDUSTRIES } from '../data/industries';
import { PROJECTS } from '../data/projects';
import { SERVICES } from '../data/services';

// 4 Core Official Services
const coreServices = [
  {
    number: "01",
    title: "Equipment Supply",
    desc: "Supply of high-performance commercial kitchen equipment, broasters, fried chicken machines, ovens & food-service machinery.",
    icon: Box
  },
  {
    number: "02",
    title: "Equipment Installation",
    desc: "Professional on-site equipment uncrating, leveling, utility connections, gas & electrical testing by certified technicians.",
    icon: Wrench
  },
  {
    number: "03",
    title: "Kitchen Setup & Solutions",
    desc: "Turnkey commercial kitchen layout setup, station workflow optimization, utility load planning & ventilation engineering.",
    icon: Compass
  },
  {
    number: "04",
    title: "Maintenance & Support",
    desc: "Comprehensive equipment maintenance, routine servicing, emergency breakdown support & genuine OEM spare parts supply.",
    icon: ShieldCheck
  }
];


// Manufacturing Process Images Grid
const manufacturingImages = [
  { label: "Factory Workshop", image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800" },
  { label: "Stainless Steel Fabrication", image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800" },
  { label: "Precision Welding", image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800" },
  { label: "CNC Laser Cutting", image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&q=80&w=800" },
  { label: "Polishing & Grinding", image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&q=80&w=800" },
  { label: "Final Equipment Assembly", image: "https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&q=80&w=800" },
  { label: "Quality Inspection", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" },
  { label: "Finished Commercial Equipment", image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800" }
];

// Company Statistics (Est. 2021 + Placeholders)
const companyStats = [
  { value: "5+", label: "Years Experience (Est. 2021)" },
  { value: "[XXX]+", label: "Projects Completed" },
  { value: "[XXXX]+", label: "Equipment Supplied" },
  { value: "[XX]+", label: "Product Categories" },
  { value: "Pan India", label: "Service Network" }
];

const Home = () => {
  return (
    <div className="space-y-20 md:space-y-28 pb-16">
      
      {/* ================================================== */}
      {/* 1. HERO SECTION */}
      {/* ================================================== */}
      <section className="relative pt-28 sm:pt-36 pb-20 md:pb-28 overflow-hidden bg-gradient-to-b from-zinc-200/50 via-[#FAF9F6] to-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Copy & CTAs */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <Reveal>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-[#09090B] text-white text-xs font-bold tracking-widest uppercase">
                  <span className="w-2 h-2 rounded-full bg-[#D32F2F] animate-pulse"></span>
                  Est. 2021 • Commercial Kitchen Equipment & Food-Service Machinery
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#09090B] tracking-tight uppercase leading-[1.1]">
                  Engineered For <br />
                  <span className="relative inline-block text-[#09090B]">
                    Professional Kitchens
                    <svg className="absolute left-0 bottom-[-8px] w-full h-3 text-[#D32F2F]" viewBox="0 0 300 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 15 C 100 5, 200 18, 295 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                    </svg>
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={0.2}>
                <p className="text-base sm:text-lg text-zinc-600 max-w-2xl leading-relaxed font-normal pt-2">
                  Established in 2021, DACOTA specializes in commercial kitchen equipment and food-service machinery — providing fried chicken machines, broasters, commercial ovens, pizza ovens, bakery machinery, equipment installation, setup solutions, and maintenance.
                </p>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <Button to="/products" variant="primary" size="lg" icon={ArrowRight}>
                    EXPLORE PRODUCTS
                  </Button>
                  <Button to="/request-quote" variant="outline" size="lg">
                    REQUEST A QUOTE
                  </Button>
                </div>
              </Reveal>

              {/* Key Trust Signals */}
              <Reveal delay={0.4}>
                <div className="pt-8 border-t border-zinc-200 grid grid-cols-3 gap-4 text-xs font-bold text-[#09090B]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D32F2F] shrink-0" />
                    <span>Established in 2021</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D32F2F] shrink-0" />
                    <span>Turnkey Kitchen Setup</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D32F2F] shrink-0" />
                    <span>Equipment Maintenance</span>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Hero Realistic Stainless Steel Kitchen Environment */}
            <div className="lg:col-span-5 relative">
              <Reveal delay={0.2}>
                <div className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-white bg-black group">
                  <img 
                    src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=1000" 
                    alt="DACOTA Commercial Kitchen Equipment Manufacturing Environment"
                    className="w-full h-[420px] sm:h-[500px] object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                  
                  {/* Floating Industrial Badge */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-lg bg-[#09090B]/95 backdrop-blur-md border border-zinc-800 text-white flex items-center justify-between shadow-xl">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded bg-[#D32F2F] flex items-center justify-center font-extrabold text-white shrink-0">
                        2021
                      </div>
                      <div>
                        <div className="text-xs uppercase tracking-wider font-bold text-white">Est. 2021 Food-Service Machinery</div>
                        <div className="text-[11px] text-zinc-400">Fried Chicken • Broasters • Ovens • Cooking</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 2. SERVICES HIGHLIGHT SECTION */}
      {/* ================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          badge="Core Services"
          title="COMMERCIAL KITCHEN SERVICES & SOLUTIONS"
          subtitle="From equipment supply and installation to complete setup solutions and ongoing maintenance."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreServices.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.number} delay={index * 0.1}>
                <div className="bg-white border border-zinc-200 hover:border-black rounded-lg p-6 h-full flex flex-col justify-between hover:shadow-xl transition-all duration-300 group">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs font-bold text-white bg-[#09090B] px-2.5 py-1 rounded">
                        {item.number}
                      </span>
                      <Icon className="w-6 h-6 text-zinc-400 group-hover:text-[#D32F2F] transition-colors" />
                    </div>
                    <h3 className="text-base font-bold text-[#09090B] group-hover:text-[#D32F2F] transition-colors uppercase mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-zinc-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ================================================== */}
      {/* 3. PRODUCT CATEGORIES */}
      {/* ================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          badge="Product Range"
          title="COMMERCIAL KITCHEN EQUIPMENT"
          subtitle="Professional equipment engineered for demanding food-service environments."
        />


        {/* 10 Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {CATEGORIES.map((cat, idx) => (
            <Reveal key={cat.id} delay={idx * 0.05}>
              <CategoryCard category={cat} />
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button to="/products" variant="outline" size="lg" icon={ArrowRight}>
            VIEW FULL PRODUCT CATALOGUE
          </Button>
        </div>
      </section>

      {/* ================================================== */}
      {/* 4. TURNKEY SOLUTIONS SECTION */}
      {/* ================================================== */}
      <section className="bg-zinc-100/70 py-16 md:py-24 border-y border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            badge="Turnkey Capability"
            title="FROM EMPTY SPACE TO A FULLY OPERATIONAL KITCHEN"
            subtitle="We provide complete commercial kitchen solutions from initial planning and equipment selection to manufacturing, installation and commissioning."
          />

          <div className="mt-12 text-center">
            <Button to="/turnkey-solutions" variant="primary" size="lg" icon={ArrowRight}>
              LEARN ABOUT TURNKEY SOLUTIONS
            </Button>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 5. INDUSTRIES SECTION */}
      {/* ================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          badge="Industries Served"
          title="SOLUTIONS FOR EVERY PROFESSIONAL KITCHEN"
          subtitle="Engineered setups designed around specific commercial food-service workflows."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.slice(0, 6).map((ind, idx) => (
            <Reveal key={ind.id} delay={idx * 0.05}>
              <div className="bg-white border border-zinc-200 rounded-lg p-6 hover:border-black hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="relative h-40 rounded mb-4 overflow-hidden bg-black">
                    <img 
                      src={ind.image} 
                      alt={ind.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                    <span className="absolute bottom-2 left-3 text-white font-bold text-sm uppercase">
                      {ind.name}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    {ind.tagline}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-zinc-200">
                  <Link to="/industries" className="inline-flex items-center text-xs font-bold text-[#09090B] hover:text-[#D32F2F] uppercase tracking-wider group-hover:underline">
                    <span>Industry Specs</span>
                    <ChevronRight className="w-4 h-4 ml-1 text-[#D32F2F]" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================================================== */}
      {/* 6. MANUFACTURING SECTION */}
      {/* ================================================== */}
      <section className="bg-[#FAF9F6] border-y border-zinc-200 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            badge="Precision Fabrication"
            title="MANUFACTURING WITH PRECISION"
            subtitle="DACOTA combines practical engineering, precision fabrication and quality-focused manufacturing to create equipment designed for demanding commercial environments."
          />

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
            {manufacturingImages.map((imgItem, idx) => (
              <Reveal key={idx} delay={idx * 0.05}>
                <div className="group relative h-48 rounded-lg overflow-hidden border border-zinc-200 bg-black">
                  <img 
                    src={imgItem.image} 
                    alt={imgItem.label} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <div className="text-xs font-bold uppercase tracking-wider truncate">{imgItem.label}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button to="/manufacturing" variant="primary" size="lg" icon={ArrowRight}>
              EXPLORE OUR MANUFACTURING
            </Button>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 7. PROJECTS SECTION */}
      {/* ================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          badge="Track Record"
          title="COMMERCIAL KITCHENS WE HAVE BUILT"
          subtitle="Explore selected commercial kitchen projects designed and manufactured by DACOTA."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((proj, idx) => (
            <Reveal key={proj.id} delay={idx * 0.1}>
              <ProjectCard project={proj} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================================================== */}
      {/* 8. STATISTICS (ESTABLISHED 2021) */}
      {/* ================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-zinc-200 rounded-xl p-8 md:p-12 shadow-sm">
          <div className="text-center mb-8">
            <span className="text-xs font-mono font-bold text-[#09090B] uppercase tracking-widest bg-zinc-100 px-3 py-1 rounded">
              ESTABLISHED IN 2021 • AT A GLANCE
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            {companyStats.map((stat, idx) => (
              <div key={idx} className="border-r border-zinc-200 last:border-r-0 px-2">
                <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#09090B] tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 9. FINAL CTA */}
      {/* ================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#09090B] text-white rounded-2xl p-8 sm:p-14 border border-zinc-800 relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-3xl">
            <span className="inline-block px-3 py-1 bg-[#D32F2F] text-white text-xs font-bold uppercase tracking-widest rounded mb-4">
              Get Started Today
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight leading-tight">
              PLANNING YOUR NEXT <br />
              <span className="text-white border-b-4 border-[#D32F2F]">COMMERCIAL KITCHEN?</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-zinc-400 leading-relaxed">
              Tell us about your project and our team will help you plan the right equipment and kitchen solution tailored to your operational requirements.
            </p>
            
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button to="/request-quote" variant="accentRed" size="lg" icon={ArrowRight}>
                REQUEST A QUOTE
              </Button>
              <Button to="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black">
                CONTACT OUR TEAM
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
