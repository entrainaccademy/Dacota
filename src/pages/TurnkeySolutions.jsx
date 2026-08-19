import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import Reveal from '../components/Reveal';
import { Compass, CheckCircle2, ArrowRight, ShieldCheck, FileText, Layers, Layout, Flame, Droplets, Zap } from 'lucide-react';

const turnkeyPhases = [
  {
    num: "01",
    title: "Initial Consultation & Menu Requirement Analysis",
    desc: "We analyze your menu concept, peak meal volumes, seating capacity, and available square footage to determine exact thermal and prep capacity needs."
  },
  {
    num: "02",
    title: "Architectural 2D/3D Kitchen CAD Layout",
    desc: "Engineers draft optimized floor plans establishing distinct raw receiving, cold storage, prep, hot cooking, plating, and scullery zones."
  },
  {
    num: "03",
    title: "Utility Load & Ventilation Engineering",
    desc: "Determining exact gas pipeline sizing, electrical load distribution (KW), drainage slope, and exhaust ventilation CFM requirements."
  },
  {
    num: "04",
    title: "Custom SS Manufacturing & Equipment Selection",
    desc: "Manufacturing heavy-gauge SS 304 equipment to exact site dimensions in our factory, incorporating specialized burners, refrigeration, and prep units."
  },
  {
    num: "05",
    title: "On-Site Delivery & Professional Installation",
    desc: "Turnkey transport, leveling, and expert connection of equipment to gas manifolds, fresh air ducts, and water supply lines."
  },
  {
    num: "06",
    title: "Safety Testing & Commissioning",
    desc: "Conducting gas pressure leak checks, electrical phase balancing, thermostat calibration, and exhaust airflow velocity testing."
  },
  {
    num: "07",
    title: "Staff Operational Training & After-Sales AMC",
    desc: "Training kitchen staff on safe operation, daily sanitization procedures, and establishing annual preventive maintenance contracts."
  }
];

const TurnkeySolutions = () => {
  return (
    <div className="pt-28 pb-20 space-y-16">
      
      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-[#E6E4DF]/60 to-[#F5F3EF] py-16 border-b border-[#E6E4DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <span className="text-xs font-mono font-bold text-[#D32F2F] uppercase tracking-widest bg-[#D32F2F]/10 px-3 py-1 rounded">
              Turnkey Kitchen Engineering
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#2A2D33] tracking-tight uppercase mt-4">
              COMPLETE KITCHEN SOLUTIONS. <br />
              <span className="text-[#D32F2F]">FROM CONCEPT TO COMMISSIONING.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-4 text-base text-[#7A7D85] max-w-3xl mx-auto leading-relaxed">
              DACOTA manages the entire lifecycle of commercial kitchen projects — eliminating vendor fragmentation, reducing energy costs, and delivering a fully operational, hygienic kitchen environment on schedule.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Visual Kitchen Planning Breakdown */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#2A2D33] text-white rounded-xl p-8 lg:p-12 border border-[#3A3E46]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-mono font-bold text-[#D32F2F] uppercase tracking-widest">
                INTEGRATED LAYOUT PLANNING
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold uppercase leading-tight">
                OPTIMIZED WORKFLOW & STATION ZONING
              </h2>
              <p className="text-xs sm:text-sm text-[#A0A3AB] leading-relaxed">
                A well-planned commercial kitchen minimizes staff cross-traffic, speeds up order fulfillment, and complies strictly with food hygiene regulations.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 text-xs font-semibold">
                <div className="bg-[#1F2126] p-3 rounded border border-[#3A3E46] flex items-center space-x-2">
                  <Flame className="w-4 h-4 text-[#D32F2F]" />
                  <span>Cooking Station Line</span>
                </div>
                <div className="bg-[#1F2126] p-3 rounded border border-[#3A3E46] flex items-center space-x-2">
                  <Droplets className="w-4 h-4 text-[#D32F2F]" />
                  <span>Scullery & Wash Line</span>
                </div>
                <div className="bg-[#1F2126] p-3 rounded border border-[#3A3E46] flex items-center space-x-2">
                  <Zap className="w-4 h-4 text-[#D32F2F]" />
                  <span>Prep & Cold Store Zone</span>
                </div>
                <div className="bg-[#1F2126] p-3 rounded border border-[#3A3E46] flex items-center space-x-2">
                  <Layout className="w-4 h-4 text-[#D32F2F]" />
                  <span>Pass-Through Plating</span>
                </div>
              </div>
            </div>

            {/* Blueprint graphic preview */}
            <div className="lg:col-span-6">
              <div className="bg-[#1F2126] border-2 border-dashed border-[#D32F2F]/40 p-6 rounded-lg text-center relative overflow-hidden">
                <div className="aspect-video bg-[#2A2D33] rounded border border-[#3A3E46] flex flex-col items-center justify-center p-6 text-center">
                  <Layout className="w-12 h-12 text-[#D32F2F] mb-3" />
                  <span className="text-sm font-bold uppercase tracking-wider text-white">2D / 3D CAD KITCHEN BLUEPRINT</span>
                  <span className="text-xs text-[#A0A3AB] mt-1">Utility load calculation, gas line routing, and hood air balance engineering</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7-Step Turnkey Process Timeline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          badge="Execution Methodology"
          title="THE 7-STAGE TURNKEY WORKFLOW"
          subtitle="Our systematic process ensures every commercial kitchen is engineered for peak performance."
        />

        <div className="space-y-6 mt-8">
          {turnkeyPhases.map((phase, idx) => (
            <Reveal key={phase.num} delay={idx * 0.05}>
              <div className="bg-[#FCFBF8] border border-[#E6E4DF] rounded-lg p-6 flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6 hover:border-[#D32F2F] transition-colors">
                <div className="w-12 h-12 rounded-lg bg-[#2A2D33] text-white font-mono font-bold text-base flex items-center justify-center shrink-0">
                  {phase.num}
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#2A2D33] uppercase">{phase.title}</h3>
                  <p className="text-xs sm:text-sm text-[#7A7D85] leading-relaxed mt-1">{phase.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-[#FCFBF8] border border-[#E6E4DF] rounded-xl p-8 sm:p-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#2A2D33] uppercase">START YOUR TURNKEY PROJECT WITH DACOTA</h2>
          <p className="text-xs sm:text-sm text-[#7A7D85] mt-2 max-w-xl mx-auto">Share your floorplan drawings or operational requirements for a preliminary CAD layout proposal.</p>
          <div className="mt-6">
            <Button to="/request-quote" variant="primary" size="lg" icon={FileText}>
              SUBMIT TURNKEY PROJECT DETAILS
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default TurnkeySolutions;
