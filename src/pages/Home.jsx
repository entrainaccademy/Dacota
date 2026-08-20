import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ChevronRight
} from 'lucide-react';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';
import Reveal from '../components/Reveal';

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
      <section className="relative pt-32 sm:pt-40 pb-24 md:pb-36 overflow-hidden min-h-[580px] flex items-center bg-[#09090B]">
        {/* Background Image & Layered Overlays */}
        <div className="absolute inset-0 z-0">
          <img
            src="/image/hero1.webp"
            alt="DACOTA Commercial Kitchen Equipment Background"
            className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000"
          />
          {/* Light-to-translucent gradient on left for high-contrast typography, fading into kitchen image */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF9F6] via-[#FAF9F6]/95 to-[#FAF9F6]/60 lg:via-[#FAF9F6]/85 lg:to-transparent" />
          {/* Top and bottom subtle blends */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F6]/80 via-transparent to-[#FAF9F6]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl space-y-6 text-left">

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
              <p className="text-base sm:text-lg text-zinc-700 max-w-2xl leading-relaxed font-normal pt-2">
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

          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 2. ELEVATE KITCHEN EFFICIENCY SECTION */}
      {/* ================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Paragraph, CTA */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <Reveal>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#09090B] tracking-tight leading-[1.2]">
                Elevating Commercial <br className="hidden sm:block" />
                Kitchen Performance
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                Discover high-performance commercial kitchen equipment built for efficiency, reliability, hygiene, and long-term durability. From advanced cooking solutions to complete kitchen setups, we provide quality equipment and professional solutions tailored to meet the demands of modern food businesses.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-black text-white text-sm font-semibold tracking-wide hover:bg-zinc-800 transition-all duration-300 shadow-md group"
                >
                  <span>Let’s Build Your Ideal Kitchen</span>
                  <ChevronRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Right Column: 2 Visual Image Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Reveal delay={0.15}>
              <div className="relative h-[360px] sm:h-[430px] rounded-xl overflow-hidden shadow-lg border border-zinc-200 group bg-black">
                <img
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800"
                  alt="Culinary Craft Plating & Sauce"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity" />
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="relative h-[360px] sm:h-[430px] rounded-xl overflow-hidden shadow-lg border border-zinc-200 group bg-black">
                <img
                  src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800"
                  alt="Commercial Kitchen Stainless Steel Equipment Setup"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity" />
              </div>
            </Reveal>
          </div>

        </div>
      </section>

      {/* ================================================== */}
      {/* 3. TURNKEY SOLUTIONS SECTION */}
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
      {/* 6. STATISTICS (ESTABLISHED 2021) */}
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
