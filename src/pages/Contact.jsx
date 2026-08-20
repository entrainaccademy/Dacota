import React, { useState } from 'react';
import Button from '../components/Button';
import Reveal from '../components/Reveal';
import { Phone, Mail, Send, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    location: ''
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
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#2A2D33] tracking-tight uppercase">
              LET'S BUILD YOUR <br />
              <span className="text-[#D32F2F]">COMMERCIAL KITCHEN</span>
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Main Form & Contact Info Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7 h-full [&>div]:h-full">
            <Reveal>
              <div className="bg-[#FCFBF8] border border-[#D8D5CE] rounded-xl p-6 sm:p-8 h-full">
                
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

                    <div>
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

          {/* Right Column: Contact Details & Google Maps */}
          <div className="lg:col-span-5 h-full [&>div]:h-full">
            <Reveal delay={0.1}>
              <div className="bg-[#FCFBF8] text-[#2A2D33] rounded-xl p-6 sm:p-8 border border-[#D8D5CE] h-full flex flex-col">
                <h3 className="text-xl font-semibold tracking-tight border-b border-[#E6E4DF] pb-4">
                  Contact details
                </h3>

                <div className="divide-y divide-[#E6E4DF] mt-2">
                  <div className="flex items-center gap-4 py-5">
                    <span className="w-10 h-10 rounded-full bg-[#D32F2F]/10 text-[#D32F2F] flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4" />
                    </span>
                    <div>
                      <div className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#8A8882]">Phone enquiries</div>
                      <div className="text-sm font-semibold mt-1">Phone number to be updated</div>
                      <div className="text-[10px] text-[#8A8882] mt-0.5">Monday–Saturday, 9:00 AM–7:00 PM</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 py-5">
                    <span className="w-10 h-10 rounded-full bg-[#D32F2F]/10 text-[#D32F2F] flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </span>
                    <div>
                      <div className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#8A8882]">Email enquiries</div>
                      <a href="mailto:info@dacotaequipment.com" className="text-sm font-semibold mt-1 inline-block hover:text-[#D32F2F] transition-colors">info@dacotaequipment.com</a>
                      <div className="text-[10px] text-[#8A8882] mt-0.5">Quotations and drawings</div>
                    </div>
                  </div>

                </div>

                <div className="mt-auto pt-5 border-t border-[#E6E4DF]">
                  <iframe
                    title="Entrain Academy location"
                    src="https://www.google.com/maps?q=Entrain%20Academy&output=embed"
                    className="w-full h-48 rounded-lg border border-[#E6E4DF]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
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
