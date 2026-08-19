import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import Reveal from '../components/Reveal';
import { CheckCircle2, ArrowRight, Building2, Utensils, Coffee, Cloud, Wheat, Cross, Hotel, GraduationCap } from 'lucide-react';
import { INDUSTRIES } from '../data/industries';

const Industries = () => {
  return (
    <div className="pt-28 pb-20 space-y-16">
      
      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-[#E6E4DF]/60 to-[#F5F3EF] py-16 border-b border-[#E6E4DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <span className="text-xs font-mono font-bold text-[#D32F2F] uppercase tracking-widest bg-[#D32F2F]/10 px-3 py-1 rounded">
              Tailored Commercial Solutions
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#2A2D33] tracking-tight uppercase mt-4">
              SOLUTIONS FOR EVERY <br />
              <span className="text-[#D32F2F]">PROFESSIONAL KITCHEN</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-4 text-base text-[#7A7D85] max-w-2xl mx-auto leading-relaxed">
              Every food-service sector operates under distinct volume, spatial, menu, and hygiene demands. DACOTA engineers custom equipment suites to suit each industry's specific workflow.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Industries Detailed Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {INDUSTRIES.map((ind, idx) => (
            <Reveal key={ind.id} delay={idx * 0.05}>
              <div id={ind.id} className="bg-[#FCFBF8] border border-[#E6E4DF] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  
                  {/* Left Column: Photography & Title */}
                  <div className="lg:col-span-5 relative bg-[#2A2D33] min-h-[260px]">
                    <img 
                      src={ind.image} 
                      alt={ind.name} 
                      className="w-full h-full object-cover opacity-85"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2A2D33] via-transparent to-transparent opacity-90" />
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <span className="text-[10px] font-mono font-bold text-[#D32F2F] uppercase tracking-widest bg-white px-2 py-0.5 rounded">
                        INDUSTRY VERTICAL
                      </span>
                      <h2 className="text-2xl font-bold uppercase mt-2">{ind.name}</h2>
                      <p className="text-xs text-[#A0A3AB] mt-1 leading-snug">{ind.tagline}</p>
                    </div>
                  </div>

                  {/* Right Column: Detailed Breakdown */}
                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    <div>
                      <p className="text-xs sm:text-sm text-[#7A7D85] leading-relaxed">
                        {ind.description}
                      </p>

                      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        
                        {/* Key Operational Requirements */}
                        <div>
                          <h4 className="text-xs font-bold text-[#2A2D33] uppercase tracking-wider mb-2 border-b border-[#E6E4DF] pb-1">
                            Key Operational Requirements
                          </h4>
                          <ul className="space-y-1.5 text-xs text-[#7A7D85]">
                            {ind.keyRequirements.map((req, rIdx) => (
                              <li key={rIdx} className="flex items-start space-x-2">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#D32F2F] shrink-0 mt-0.5" />
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Recommended Equipment */}
                        <div>
                          <h4 className="text-xs font-bold text-[#2A2D33] uppercase tracking-wider mb-2 border-b border-[#E6E4DF] pb-1">
                            Recommended Equipment
                          </h4>
                          <ul className="space-y-1.5 text-xs text-[#7A7D85]">
                            {ind.recommendedEquipment.map((eq, eIdx) => (
                              <li key={eIdx} className="flex items-start space-x-2">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#2A2D33] shrink-0 mt-0.5" />
                                <span>{eq}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                      </div>
                    </div>

                    <div className="pt-4 border-t border-[#E6E4DF] flex items-center justify-between">
                      <span className="text-xs text-[#7A7D85]">Planning a {ind.name} Kitchen?</span>
                      <Button to={`/request-quote?industry=${encodeURIComponent(ind.name)}`} variant="primary" size="sm">
                        REQUEST INDUSTRY SOLUTION
                      </Button>
                    </div>

                  </div>

                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Quote Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-[#2A2D33] text-white rounded-xl p-8 sm:p-12">
          <h2 className="text-2xl font-bold uppercase">NEED HELP CHOOSING EQUIPMENT FOR YOUR INDUSTRY?</h2>
          <p className="text-xs sm:text-sm text-[#A0A3AB] mt-2 max-w-xl mx-auto">Our kitchen layout specialists are available to review your architectural plans and menu requirements.</p>
          <div className="mt-6">
            <Button to="/request-quote" variant="primary" size="lg">TALK TO OUR KITCHEN ENGINEERS</Button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Industries;
