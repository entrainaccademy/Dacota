import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import Reveal from '../components/Reveal';
import { ShieldCheck, CheckCircle2, Award, FileCheck, Lock, Thermometer, Sparkles } from 'lucide-react';

const qualityPillars = [
  {
    title: "Durable Construction",
    desc: "Heavy-gauge food-grade SS 304 / SS 316 stainless steel sheets with heavy internal channel stiffeners resistant to thermal warping and heavy pot impact.",
    icon: ShieldCheck
  },
  {
    title: "Hygienic Design",
    desc: "Seamless welded joints, smooth radius coved corners, and marine drip edges built in accordance with international commercial kitchen hygiene protocols.",
    icon: Sparkles
  },
  {
    title: "Precision Manufacturing",
    desc: "Automated CNC fiber laser cutting and hydraulic bending ensuring uniform tolerances across all equipment lines.",
    icon: FileCheck
  },
  {
    title: "Thermal & Energy Performance",
    desc: "High-efficiency cast iron burners with optimized BTU output and dense rockwool / polyurethane insulation minimizing thermal radiation loss.",
    icon: Thermometer
  },
  {
    title: "Safety Standards",
    desc: "Safety pilot valves, flame failure automatic gas cut-offs, rounded safety edges, and earthing protection on all electrical units.",
    icon: Lock
  },
  {
    title: "100% Quality Inspection",
    desc: "Pre-dispatch pressure holding testing, gas leakage verification, electrical insulation testing, and burn-in trial run before factory exit.",
    icon: Award
  }
];

const Quality = () => {
  return (
    <div className="pt-28 pb-20 space-y-16">
      
      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-[#E6E4DF]/60 to-[#F5F3EF] py-16 border-b border-[#E6E4DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <span className="text-xs font-mono font-bold text-[#D32F2F] uppercase tracking-widest bg-[#D32F2F]/10 px-3 py-1 rounded">
              Quality Assurance Framework
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#2A2D33] tracking-tight uppercase mt-4">
              QUALITY BUILT INTO <br />
              <span className="text-[#D32F2F]">EVERY DETAIL</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-4 text-base text-[#7A7D85] max-w-3xl mx-auto leading-relaxed">
              Every equipment fabricated in DACOTA's plant undergoes rigorous material grade testing, structural integrity verification, and pre-dispatch operational testing.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 6 Quality Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          badge="Quality Standards"
          title="OUR 6-POINT QUALITY COMMITMENT"
          subtitle="Engineered for long-term commercial durability and operational safety."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {qualityPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <Reveal key={pillar.title} delay={idx * 0.05}>
                <div className="bg-[#FCFBF8] border border-[#E6E4DF] hover:border-[#D32F2F] rounded-lg p-6 h-full flex flex-col justify-between transition-colors">
                  <div>
                    <div className="w-10 h-10 rounded bg-[#D32F2F]/10 text-[#D32F2F] flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-[#2A2D33] uppercase mb-2">{pillar.title}</h3>
                    <p className="text-xs text-[#7A7D85] leading-relaxed">{pillar.desc}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Official Certification Placeholders Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FCFBF8] border border-[#E6E4DF] rounded-xl p-8 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-mono font-bold text-[#D32F2F] uppercase tracking-widest">
              CERTIFICATION & COMPLIANCE
            </span>
            <h3 className="text-xl font-bold text-[#2A2D33] uppercase mt-2">TECHNICAL COMPLIANCE STANDARDS</h3>
            <p className="text-xs text-[#7A7D85] mt-1">Our products are engineered in compliance with industry safety and material standards.</p>
          </div>

          {/* Placeholder Slots for future certification documentation */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="border-2 border-dashed border-[#E6E4DF] rounded-lg p-6 text-center bg-[#F5F3EF]">
              <div className="w-10 h-10 rounded-full bg-[#2A2D33] text-white flex items-center justify-center font-bold text-xs mx-auto mb-2">
                SS
              </div>
              <div className="text-xs font-bold text-[#2A2D33] uppercase">Material Certification</div>
              <div className="text-[11px] text-[#7A7D85] mt-1">[SS 304 / 316 Mill Test Certificate Placeholder]</div>
            </div>

            <div className="border-2 border-dashed border-[#E6E4DF] rounded-lg p-6 text-center bg-[#F5F3EF]">
              <div className="w-10 h-10 rounded-full bg-[#2A2D33] text-white flex items-center justify-center font-bold text-xs mx-auto mb-2">
                GAS
              </div>
              <div className="text-xs font-bold text-[#2A2D33] uppercase">Gas Safety Testing</div>
              <div className="text-[11px] text-[#7A7D85] mt-1">[Commercial Burner Pressure Compliance Placeholder]</div>
            </div>

            <div className="border-2 border-dashed border-[#E6E4DF] rounded-lg p-6 text-center bg-[#F5F3EF]">
              <div className="w-10 h-10 rounded-full bg-[#2A2D33] text-white flex items-center justify-center font-bold text-xs mx-auto mb-2">
                ELEC
              </div>
              <div className="text-xs font-bold text-[#2A2D33] uppercase">Electrical Safety Inspection</div>
              <div className="text-[11px] text-[#7A7D85] mt-1">[Insulation & Phase Load Safety Test Placeholder]</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-[#2A2D33] text-white rounded-xl p-8 sm:p-12">
          <h2 className="text-2xl font-bold uppercase">NEED MATERIAL TEST CERTIFICATES OR SPECIFICATION SHEETS?</h2>
          <p className="text-xs sm:text-sm text-[#A0A3AB] mt-2 max-w-xl mx-auto">Contact our technical department for detailed equipment drawings and material grade test sheets.</p>
          <div className="mt-6">
            <Button to="/request-quote" variant="primary" size="lg">REQUEST TECH SPECS</Button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Quality;
