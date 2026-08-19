import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import Reveal from '../components/Reveal';
import { Wrench, ShieldCheck, Factory, Settings, CheckCircle2, ArrowRight } from 'lucide-react';

const manufacturingPipeline = [
  {
    num: "01",
    title: "Design & CAD Engineering",
    desc: "Computer-aided 3D modeling and sheet metal unfold calculations ensuring micron-level accuracy before fabrication begins."
  },
  {
    num: "02",
    title: "Raw Material Grade Verification",
    desc: "Strict material inspection ensuring prime SS 304 / SS 316 food-grade sheet metal with certified nickel and chromium content."
  },
  {
    num: "03",
    title: "CNC Fiber Laser Cutting",
    desc: "High-speed precision laser cutting delivering burr-free edges and complex cutouts for burners, controls, and drains."
  },
  {
    num: "04",
    title: "CNC Hydraulic Press Bending",
    desc: "Multi-axis CNC bending machines forming seamless radiused corners, marine edges, and structural support channels."
  },
  {
    num: "05",
    title: "TIG Argon Gas Welding",
    desc: "100% argon shielded TIG welding creating deep penetration welds without oxidation or thermal distortion."
  },
  {
    num: "06",
    title: "Surface Finishing & Grain Matching",
    desc: "Automated and manual grinding, satin grain polishing, and passivating to eliminate micro-crevices and prevent corrosion."
  },
  {
    num: "07",
    title: "Mechanical & Electrical Assembly",
    desc: "Installing high-efficiency cast burners, gas valves, insulation linings, digital controllers, and heavy casters."
  },
  {
    num: "08",
    title: "Quality Inspection & Pressure Testing",
    desc: "100% pre-dispatch quality checks, gas line pressure holding tests, electrical insulation testing, and burn-in trials."
  },
  {
    num: "09",
    title: "Heavy Protective Packaging & Delivery",
    desc: "Industrial bubble wrap, foam corner guards, and wooden crate packaging for safe transit across India."
  }
];

const factoryMachinery = [
  { name: "CNC Fiber Laser Cutting System", cap: "High precision 3KW fiber laser for 0.8mm to 6mm SS sheet metal" },
  { name: "CNC Hydraulic Press Brake", cap: "150-Ton multi-axis bender for 3-meter seamless work table tops" },
  { name: "High Frequency TIG Welders", cap: "Argon gas shielded welding plants for food-grade sanitary joints" },
  { name: "Hydraulic Deep Draw Presses", cap: "Deep drawing single-piece seamless sink bowls without joint seams" }
];

const Manufacturing = () => {
  return (
    <div className="pt-28 pb-20 space-y-16">
      
      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-[#E6E4DF]/60 to-[#F5F3EF] py-16 border-b border-[#E6E4DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <span className="text-xs font-mono font-bold text-[#D32F2F] uppercase tracking-widest bg-[#D32F2F]/10 px-3 py-1 rounded">
              Factory Infrastructure
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#2A2D33] tracking-tight uppercase mt-4">
              PRECISION MANUFACTURING. <br />
              <span className="text-[#D32F2F]">BUILT FOR PERFORMANCE.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-4 text-base text-[#7A7D85] max-w-3xl mx-auto leading-relaxed">
              DACOTA combines practical engineering, precision fabrication and quality-focused manufacturing to create equipment designed for demanding commercial environments.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Image Heavy Factory Infrastructure Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <Reveal>
            <div className="space-y-4">
              <span className="text-xs font-bold text-[#D32F2F] uppercase tracking-wider">State-of-the-Art Works</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2A2D33] uppercase">
                ADVANCED STAINLESS STEEL FABRICATION PLANT
              </h2>
              <p className="text-xs sm:text-sm text-[#7A7D85] leading-relaxed">
                Our manufacturing plant is equipped with modern metalworking machinery dedicated exclusively to commercial kitchen equipment production. Every piece of equipment undergoes rigorous dimensional checking and quality verification before shipment.
              </p>

              <div className="space-y-3 pt-2">
                {factoryMachinery.map((m, idx) => (
                  <div key={idx} className="bg-[#FCFBF8] border border-[#E6E4DF] p-3.5 rounded flex items-start space-x-3">
                    <CheckCircle2 className="w-4 h-4 text-[#D32F2F] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-[#2A2D33] uppercase">{m.name}</div>
                      <div className="text-[11px] text-[#7A7D85]">{m.cap}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="grid grid-cols-2 gap-3">
              <img 
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800" 
                alt="Factory floor" 
                className="rounded-lg border border-[#E6E4DF] h-48 sm:h-64 object-cover w-full"
              />
              <img 
                src="https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800" 
                alt="Laser cutting" 
                className="rounded-lg border border-[#E6E4DF] h-48 sm:h-64 object-cover w-full"
              />
              <img 
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800" 
                alt="Welding" 
                className="rounded-lg border border-[#E6E4DF] h-48 sm:h-64 object-cover w-full"
              />
              <img 
                src="https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&q=80&w=800" 
                alt="Equipment Assembly" 
                className="rounded-lg border border-[#E6E4DF] h-48 sm:h-64 object-cover w-full"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 9-Stage Manufacturing Process */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          badge="Manufacturing Workflow"
          title="THE 9-STAGE FABRICATION PROCESS"
          subtitle="How raw stainless steel sheets are transformed into high-durability commercial equipment."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {manufacturingPipeline.map((stage, idx) => (
            <Reveal key={stage.num} delay={idx * 0.05}>
              <div className="bg-[#FCFBF8] border border-[#E6E4DF] hover:border-[#D32F2F] rounded-lg p-6 h-full flex flex-col justify-between transition-colors">
                <div>
                  <div className="font-mono text-xs font-bold text-[#D32F2F] bg-[#D32F2F]/10 px-2.5 py-1 rounded inline-block mb-3">
                    STAGE {stage.num}
                  </div>
                  <h3 className="text-base font-bold text-[#2A2D33] uppercase mb-2">{stage.title}</h3>
                  <p className="text-xs text-[#7A7D85] leading-relaxed">{stage.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-[#2A2D33] text-white rounded-xl p-8 sm:p-12 border border-[#3A3E46]">
          <h2 className="text-2xl font-bold uppercase">REQUIRE CUSTOM FABRICATION OR FACTORY VISIT?</h2>
          <p className="text-xs sm:text-sm text-[#A0A3AB] mt-2 max-w-xl mx-auto">We welcome commercial kitchen consultants, chefs, and project managers to inspect our manufacturing facility.</p>
          <div className="mt-6">
            <Button to="/contact" variant="primary" size="lg">SCHEDULE FACTORY VISIT</Button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Manufacturing;
