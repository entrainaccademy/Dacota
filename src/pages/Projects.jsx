import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import Reveal from '../components/Reveal';
import { MapPin, CheckCircle2, Building, ArrowRight, Layers, Wrench } from 'lucide-react';
import { PROJECTS } from '../data/projects';

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filterOptions = ['All', 'Hotel Kitchen', 'Restaurant Kitchen', 'Bakery Kitchen', 'Cloud Kitchen', 'Hospital Kitchen', 'Industrial Canteen'];

  const filteredProjects = selectedFilter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.type === selectedFilter);

  return (
    <div className="pt-28 pb-20 space-y-16">
      
      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-[#E6E4DF]/60 to-[#F5F3EF] py-16 border-b border-[#E6E4DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <span className="text-xs font-mono font-bold text-[#D32F2F] uppercase tracking-widest bg-[#D32F2F]/10 px-3 py-1 rounded">
              Project Portfolio & Case Studies
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#2A2D33] tracking-tight uppercase mt-4">
              COMMERCIAL KITCHENS <br />
              <span className="text-[#D32F2F]">WE HAVE BUILT</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-4 text-base text-[#7A7D85] max-w-3xl mx-auto leading-relaxed">
              Explore selected commercial kitchen projects designed, manufactured, installed, and commissioned by DACOTA across hospitality, institutional, and healthcare sectors.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
          {filterOptions.map((opt) => (
            <button
              key={opt}
              onClick={() => setSelectedFilter(opt)}
              className={`px-4 py-2 rounded text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-colors ${
                selectedFilter === opt
                  ? 'bg-[#D32F2F] text-white'
                  : 'bg-[#FCFBF8] border border-[#E6E4DF] text-[#2A2D33] hover:bg-[#E6E4DF]'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>

        {/* Project Case Studies Grid */}
        <div className="space-y-12">
          {filteredProjects.map((proj, idx) => (
            <Reveal key={proj.id} delay={idx * 0.05}>
              <div className="bg-[#FCFBF8] border border-[#E6E4DF] rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all">
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  
                  {/* Left Column: Case Study Image */}
                  <div className="lg:col-span-5 relative bg-[#2A2D33] min-h-[300px]">
                    <img 
                      src={proj.image} 
                      alt={proj.title} 
                      className="w-full h-full object-cover opacity-90"
                    />
                    <div className="absolute top-4 left-4 bg-[#D32F2F] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded">
                      {proj.type}
                    </div>
                  </div>

                  {/* Right Column: Case Study Details */}
                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    <div>
                      <div className="flex items-center space-x-2 text-xs text-[#7A7D85]">
                        <MapPin className="w-3.5 h-3.5 text-[#D32F2F]" />
                        <span>{proj.location}</span>
                      </div>

                      <h2 className="text-xl sm:text-2xl font-bold text-[#2A2D33] uppercase mt-2">
                        {proj.title}
                      </h2>

                      <p className="text-xs sm:text-sm text-[#7A7D85] leading-relaxed mt-3">
                        {proj.details}
                      </p>

                      <div className="mt-6 space-y-3">
                        <div>
                          <span className="text-xs font-bold text-[#2A2D33] uppercase tracking-wider block">Scope of Work:</span>
                          <p className="text-xs text-[#7A7D85] bg-[#F5F3EF] p-3 rounded border border-[#E6E4DF] mt-1">
                            {proj.scope}
                          </p>
                        </div>

                        <div>
                          <span className="text-xs font-bold text-[#2A2D33] uppercase tracking-wider block">Equipment Supplied:</span>
                          <p className="text-xs text-[#2A2D33] font-semibold mt-1">
                            {proj.equipmentSupplied}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[#E6E4DF] flex items-center justify-between">
                      <span className="text-xs text-[#7A7D85] font-mono">Status: Successfully Commissioned</span>
                      <Button to={`/request-quote?project=${encodeURIComponent(proj.title)}`} variant="primary" size="sm">
                        REQUEST SIMILAR KITCHEN
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
          <h2 className="text-2xl font-bold uppercase">HAVE A COMMERCIAL KITCHEN PROJECT TO DISCUSS?</h2>
          <p className="text-xs sm:text-sm text-[#A0A3AB] mt-2 max-w-xl mx-auto">Get in touch with our commercial kitchen design engineers to schedule a preliminary layout consultation.</p>
          <div className="mt-6">
            <Button to="/request-quote" variant="primary" size="lg">START A CASE CONSULTATION</Button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Projects;
