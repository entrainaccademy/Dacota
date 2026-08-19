import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import Reveal from '../components/Reveal';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    location: '',
    businessType: 'Restaurant',
    requiredEquipment: '',
    projectRequirement: 'Turnkey Project',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-28 pb-20 space-y-16">
      
      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-[#E6E4DF]/60 to-[#F5F3EF] py-16 border-b border-[#E6E4DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <span className="text-xs font-mono font-bold text-[#D32F2F] uppercase tracking-widest bg-[#D32F2F]/10 px-3 py-1 rounded">
              B2B Enquiries & Sales
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#2A2D33] tracking-tight uppercase mt-4">
              LET'S BUILD YOUR <br />
              <span className="text-[#D32F2F]">COMMERCIAL KITCHEN</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-4 text-base text-[#7A7D85] max-w-2xl mx-auto leading-relaxed">
              Get in touch with our commercial kitchen equipment specialists and factory engineers for pricing, equipment specs, or custom turnkey project layout proposals.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Main Form & Contact Info Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="bg-[#FCFBF8] border border-[#E6E4DF] rounded-xl p-6 sm:p-8 shadow-sm">
                
                {submitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-[#D32F2F] text-white flex items-center justify-center mx-auto shadow-lg">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#2A2D33] uppercase">ENQUIRY SUBMITTED SUCCESSFULLY!</h3>
                    <p className="text-xs sm:text-sm text-[#7A7D85] max-w-md mx-auto leading-relaxed">
                      Thank you for contacting DACOTA. Our commercial kitchen project team will review your requirements and reach out within 24 business hours.
                    </p>
                    <div className="pt-4">
                      <Button onClick={() => setSubmitted(false)} variant="outline" size="sm">
                        SUBMIT ANOTHER ENQUIRY
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <h3 className="text-xl font-bold text-[#2A2D33] uppercase border-b border-[#E6E4DF] pb-3 mb-4">
                      PROJECT ENQUIRY FORM
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase text-[#2A2D33] mb-1">
                          Full Name *
                        </label>
                        <input 
                          type="text" 
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. Rahul Sharma"
                          className="w-full px-3 py-2 bg-[#F5F3EF] border border-[#E6E4DF] rounded text-sm text-[#2A2D33] focus:outline-none focus:ring-2 focus:ring-[#D32F2F] focus:bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase text-[#2A2D33] mb-1">
                          Company Name *
                        </label>
                        <input 
                          type="text" 
                          required
                          value={formData.companyName}
                          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                          placeholder="e.g. Apex Hospitality Group"
                          className="w-full px-3 py-2 bg-[#F5F3EF] border border-[#E6E4DF] rounded text-sm text-[#2A2D33] focus:outline-none focus:ring-2 focus:ring-[#D32F2F] focus:bg-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase text-[#2A2D33] mb-1">
                          Phone Number *
                        </label>
                        <input 
                          type="tel" 
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 Mobile / Phone"
                          className="w-full px-3 py-2 bg-[#F5F3EF] border border-[#E6E4DF] rounded text-sm text-[#2A2D33] focus:outline-none focus:ring-2 focus:ring-[#D32F2F] focus:bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase text-[#2A2D33] mb-1">
                          Email Address *
                        </label>
                        <input 
                          type="email" 
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@company.com"
                          className="w-full px-3 py-2 bg-[#F5F3EF] border border-[#E6E4DF] rounded text-sm text-[#2A2D33] focus:outline-none focus:ring-2 focus:ring-[#D32F2F] focus:bg-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase text-[#2A2D33] mb-1">
                          Location / City *
                        </label>
                        <input 
                          type="text" 
                          required
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          placeholder="City, State"
                          className="w-full px-3 py-2 bg-[#F5F3EF] border border-[#E6E4DF] rounded text-sm text-[#2A2D33] focus:outline-none focus:ring-2 focus:ring-[#D32F2F] focus:bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase text-[#2A2D33] mb-1">
                          Business Type *
                        </label>
                        <select 
                          value={formData.businessType}
                          onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                          className="w-full px-3 py-2 bg-[#F5F3EF] border border-[#E6E4DF] rounded text-sm text-[#2A2D33] focus:outline-none focus:ring-2 focus:ring-[#D32F2F] focus:bg-white"
                        >
                          <option value="Hotel">Hotel / Resort</option>
                          <option value="Restaurant">Restaurant / Fine Dining</option>
                          <option value="Cafe">Café / QSR</option>
                          <option value="Cloud Kitchen">Cloud / Ghost Kitchen</option>
                          <option value="Bakery">Bakery & Pastry Unit</option>
                          <option value="Hospital">Hospital / Healthcare</option>
                          <option value="Industrial Canteen">Industrial Canteen / Corporate</option>
                          <option value="Catering">Catering Company</option>
                          <option value="Institutional">Educational Institution</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase text-[#2A2D33] mb-1">
                          Required Equipment Category
                        </label>
                        <input 
                          type="text"
                          value={formData.requiredEquipment}
                          onChange={(e) => setFormData({ ...formData, requiredEquipment: e.target.value })}
                          placeholder="e.g. Four Burner Range, Cold Room"
                          className="w-full px-3 py-2 bg-[#F5F3EF] border border-[#E6E4DF] rounded text-sm text-[#2A2D33] focus:outline-none focus:ring-2 focus:ring-[#D32F2F] focus:bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase text-[#2A2D33] mb-1">
                          Project Requirement
                        </label>
                        <select 
                          value={formData.projectRequirement}
                          onChange={(e) => setFormData({ ...formData, projectRequirement: e.target.value })}
                          className="w-full px-3 py-2 bg-[#F5F3EF] border border-[#E6E4DF] rounded text-sm text-[#2A2D33] focus:outline-none focus:ring-2 focus:ring-[#D32F2F] focus:bg-white"
                        >
                          <option value="New Kitchen">New Kitchen Setup</option>
                          <option value="Kitchen Upgrade">Kitchen Upgrade / Retrofit</option>
                          <option value="Equipment Purchase">Individual Equipment Purchase</option>
                          <option value="Turnkey Project">Full Turnkey Project</option>
                          <option value="Maintenance">Maintenance & AMC</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-[#2A2D33] mb-1">
                        Project Message / Specifics
                      </label>
                      <textarea 
                        rows="4"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Describe your kitchen dimensions, capacity, meal volume or specific machinery needs..."
                        className="w-full px-3 py-2 bg-[#F5F3EF] border border-[#E6E4DF] rounded text-sm text-[#2A2D33] focus:outline-none focus:ring-2 focus:ring-[#D32F2F] focus:bg-white"
                      ></textarea>
                    </div>

                    <div className="pt-2">
                      <Button type="submit" variant="primary" size="lg" className="w-full" icon={Send}>
                        SEND ENQUIRY
                      </Button>
                    </div>
                  </form>
                )}

              </div>
            </Reveal>
          </div>

          {/* Right Column: Contact Cards & Google Maps */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal delay={0.1}>
              <div className="bg-[#2A2D33] text-white rounded-xl p-6 sm:p-8 border border-[#3A3E46] space-y-6">
                <h3 className="text-xl font-bold uppercase border-b border-[#3A3E46] pb-3">
                  HEADQUARTERS & FACTORY
                </h3>

                <div className="space-y-4 text-xs sm:text-sm text-[#A0A3AB]">
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-[#D32F2F] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-white font-bold uppercase">Phone Enquiries</div>
                      <div>+91 [Phone Number Placeholder]</div>
                      <div className="text-[11px] text-[#7A7D85]">Mon - Sat: 9:00 AM - 7:00 PM IST</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-[#D32F2F] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-white font-bold uppercase">Email Enquiries</div>
                      <div className="text-white font-semibold">info@dacotaequipment.com</div>
                      <div className="text-[11px] text-[#7A7D85]">Quotations & Drawings</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-[#D32F2F] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-white font-bold uppercase">Factory Address</div>
                      <div>DACOTA Commercial Kitchen Equipment Works</div>
                      <div>Industrial Park Phase II [Address Placeholder]</div>
                      <div>India</div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Google Maps Interactive Placeholder Frame */}
            <Reveal delay={0.2}>
              <div className="bg-[#FCFBF8] border border-[#E6E4DF] rounded-xl overflow-hidden shadow-sm p-2">
                <div className="relative h-64 bg-[#2A2D33] rounded-lg overflow-hidden flex flex-col items-center justify-center text-center p-6 border border-[#3A3E46]">
                  <MapPin className="w-10 h-10 text-[#D32F2F] mb-2 animate-bounce" />
                  <span className="text-sm font-bold text-white uppercase tracking-wider">DACOTA FACTORY LOCATION</span>
                  <span className="text-xs text-[#A0A3AB] mt-1">[Interactive Google Maps Embed Placeholder]</span>
                  <div className="mt-3 px-3 py-1 bg-[#D32F2F] text-white text-[11px] font-bold rounded">
                    Pan India Dispatch Network
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Contact;
