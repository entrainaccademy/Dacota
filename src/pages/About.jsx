import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import Reveal from '../components/Reveal';
import { ShieldCheck, Target, Eye, Award, Wrench, CheckCircle2, Box, Compass } from 'lucide-react';

const values = [
  { title: "Quality", desc: "Uncompromising use of SS 304 food-grade stainless steel and heavy-gauge construction across all equipment lines.", icon: ShieldCheck },
  { title: "Product Expertise", desc: "Specialized engineering in fried chicken machines, broasting machinery, commercial convection ovens, and pizza ovens.", icon: Target },
  { title: "Reliability", desc: "Equipment designed and tested to withstand round-the-clock commercial kitchen stress without failure.", icon: Award },
  { title: "Customer Focus", desc: "Customizing solutions around unique client menu requirements, spatial layout constraints, and budgets.", icon: Eye },
  { title: "Engineering Excellence", desc: "Precision CNC fabrication, TIG welding craftsmanship, and strict post-assembly quality testing.", icon: Wrench }
];

const About = () => {
  return (
    <div className="pt-28 pb-20 space-y-20">
      
      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-zinc-200/60 to-[#FAF9F6] py-16 sm:py-24 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <span className="text-xs font-mono font-bold text-[#D32F2F] uppercase tracking-widest bg-[#D32F2F]/10 px-3 py-1 rounded">
              Established in 2021
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#09090B] tracking-tight uppercase mt-4">
              BUILT ON ENGINEERING. <br />
              <span className="text-[#D32F2F]">DRIVEN BY QUALITY.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 text-base sm:text-lg text-zinc-600 max-w-3xl mx-auto leading-relaxed">
              Established in 2021, DACOTA is a commercial kitchen equipment and food-service machinery company delivering reliable equipment supply, installation, complete setup solutions, and maintenance for professional food-service businesses.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Main Story & Factory Imagery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="space-y-6">
              <span className="text-xs font-bold text-[#D32F2F] uppercase tracking-wider">Experience Since 2021</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#09090B] uppercase leading-tight">
                SPECIALIZED FOOD-SERVICE MACHINERY & KITCHEN SOLUTIONS
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                Since our founding in 2021, DACOTA has specialized in professional commercial kitchen equipment — including pressure broasting machines, fried chicken open fryers, commercial convection ovens, deck and conveyor pizza ovens, bakery machinery, and custom stainless steel fabrication.
              </p>
              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                We combine practical food-service engineering with 4 core service capabilities: commercial equipment supply, professional on-site installation, complete kitchen setup solutions, and long-term equipment maintenance.
              </p>

              <div className="pt-4 grid grid-cols-2 gap-4 text-xs font-bold text-[#09090B]">
                <div className="flex items-center space-x-2 bg-white p-3 rounded border border-zinc-200">
                  <CheckCircle2 className="w-4 h-4 text-[#D32F2F]" />
                  <span>Established in 2021</span>
                </div>
                <div className="flex items-center space-x-2 bg-white p-3 rounded border border-zinc-200">
                  <CheckCircle2 className="w-4 h-4 text-[#D32F2F]" />
                  <span>4 Core Services</span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800" 
                alt="DACOTA Factory Fabrication Works" 
                className="rounded-lg shadow-md border border-zinc-200 h-56 object-cover w-full"
              />
              <img 
                src="https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800" 
                alt="Stainless Steel Welding" 
                className="rounded-lg shadow-md border border-zinc-200 h-56 object-cover w-full mt-6"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-[#09090B] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Reveal>
              <div className="bg-[#18181B] border-l-4 border-[#D32F2F] p-8 rounded-r-lg">
                <span className="text-xs font-mono font-bold text-[#D32F2F] uppercase tracking-widest">OUR MISSION</span>
                <h3 className="text-xl font-bold uppercase mt-2">Engineering Superior Kitchen Workflows</h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mt-4">
                  To supply, install, and maintain high-performance commercial kitchen equipment and food-service machinery that enhances kitchen operational speed, energy efficiency, and long-term reliability.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="bg-[#18181B] border-l-4 border-[#D32F2F] p-8 rounded-r-lg">
                <span className="text-xs font-mono font-bold text-[#D32F2F] uppercase tracking-widest">OUR VISION</span>
                <h3 className="text-xl font-bold uppercase mt-2">Setting the Benchmark in Commercial Kitchens</h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mt-4">
                  To be the premier B2B partner for commercial kitchen equipment, broasters, ovens, and complete kitchen setups, known for product quality, technical expertise, and dependable nationwide support.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          badge="Guiding Principles"
          title="CORE VALUES"
          subtitle="The operational philosophy behind every equipment and service delivered by DACOTA."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {values.map((val, idx) => {
            const Icon = val.icon;
            return (
              <Reveal key={val.title} delay={idx * 0.1}>
                <div className="bg-white border border-zinc-200 hover:border-black rounded-lg p-6 h-full flex flex-col justify-between transition-all">
                  <div>
                    <div className="w-10 h-10 rounded bg-zinc-100 text-[#09090B] flex items-center justify-center mb-4 font-bold">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-[#09090B] uppercase mb-2">{val.title}</h4>
                    <p className="text-xs text-zinc-600 leading-relaxed">{val.desc}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white border border-zinc-200 rounded-xl p-8 sm:p-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#09090B] uppercase">DISCOVER DACOTA EQUIPMENT</h2>
          <p className="text-xs sm:text-sm text-zinc-600 mt-2 max-w-xl mx-auto">Explore our catalogue of broasting machines, fried chicken fryers, convection ovens, pizza ovens, and commercial cooking equipment.</p>
          <div className="mt-6">
            <Button to="/products" variant="primary" size="lg">VIEW CATALOGUE</Button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
