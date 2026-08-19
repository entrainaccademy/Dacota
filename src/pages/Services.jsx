import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import Reveal from '../components/Reveal';
import { ArrowRight, Wrench, Compass, Settings, RefreshCw, ShieldCheck, Headphones } from 'lucide-react';
import { SERVICES } from '../data/services';

const Services = () => {
  return (
    <div className="pt-28 pb-20 space-y-16">
      
      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-[#E6E4DF]/60 to-[#F5F3EF] py-16 border-b border-[#E6E4DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <span className="text-xs font-mono font-bold text-[#D32F2F] uppercase tracking-widest bg-[#D32F2F]/10 px-3 py-1 rounded">
              Comprehensive Lifecycle Services
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#2A2D33] tracking-tight uppercase mt-4">
              COMMERCIAL KITCHEN <br />
              <span className="text-[#D32F2F]">SERVICES & MAINTENANCE</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-4 text-base text-[#7A7D85] max-w-3xl mx-auto leading-relaxed">
              DACOTA provides end-to-end services — from CAD layout planning and custom SS fabrication to professional installation, preventive maintenance, and annual service contracts (AMC).
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((srv, idx) => (
            <Reveal key={srv.id} delay={idx * 0.05}>
              <div className="bg-[#FCFBF8] border border-[#E6E4DF] rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full group">
                <div className="relative h-48 overflow-hidden bg-[#2A2D33]">
                  <img 
                    src={srv.image} 
                    alt={srv.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2A2D33] via-transparent to-transparent" />
                </div>

                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-[#2A2D33] uppercase group-hover:text-[#D32F2F] transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-xs text-[#7A7D85] leading-relaxed mt-2">
                      {srv.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#E6E4DF]">
                    <Button 
                      to={`/request-quote?service=${encodeURIComponent(srv.title)}`}
                      variant="outline"
                      size="sm"
                      className="w-full justify-between"
                      icon={ArrowRight}
                    >
                      REQUEST THIS SERVICE
                    </Button>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Annual Maintenance Contract (AMC) Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#2A2D33] text-white rounded-xl p-8 sm:p-12 border border-[#3A3E46]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-mono font-bold text-[#D32F2F] uppercase tracking-widest">
                PREVENTIVE CARE & BREAKDOWN SUPPORT
              </span>
              <h2 className="text-2xl font-bold uppercase">ANNUAL MAINTENANCE CONTRACTS (AMC)</h2>
              <p className="text-xs sm:text-sm text-[#A0A3AB] leading-relaxed">
                Protect your kitchen investment with DACOTA AMC plans. Includes scheduled quarterly burner inspections, thermostat calibration, gas leak testing, gasket replacement, and emergency technician dispatch.
              </p>
            </div>
            <div className="lg:col-span-4 text-left lg:text-right">
              <Button to="/contact" variant="primary" size="lg">
                ENQUIRE ABOUT AMC
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;
