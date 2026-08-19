import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { FileText, CheckCircle2, Upload, Send, ArrowRight, ShieldCheck, PhoneCall } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import Reveal from '../components/Reveal';

const RequestQuote = () => {
  const [searchParams] = useSearchParams();
  const preselectedProduct = searchParams.get('product') || '';
  const preselectedIndustry = searchParams.get('industry') || '';
  const preselectedProject = searchParams.get('project') || '';
  const preselectedService = searchParams.get('service') || '';

  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    city: '',
    businessType: preselectedIndustry || 'Restaurant',
    projectCategory: preselectedService ? 'Maintenance' : 'Turnkey Project',
    productRequired: preselectedProduct || preselectedProject || '',
    quantity: '1',
    projectDetails: ''
  });

  useEffect(() => {
    if (preselectedProduct) {
      setFormData(prev => ({ ...prev, productRequired: preselectedProduct }));
    }
  }, [preselectedProduct]);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

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
              Official Quotation Generator
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#2A2D33] tracking-tight uppercase mt-4">
              REQUEST A <span className="text-[#D32F2F]">COMMERCIAL QUOTE</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-4 text-base text-[#7A7D85] max-w-2xl mx-auto leading-relaxed">
              Submit your equipment list, space dimensions, or CAD drawing. Our engineering estimators will provide an itemized commercial quotation.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Main Quotation Form */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="bg-[#FCFBF8] border border-[#E6E4DF] rounded-2xl p-6 sm:p-12 shadow-md">
            
            {submitted ? (
              <div className="py-12 text-center space-y-6">
                <div className="w-20 h-20 rounded-full bg-[#D32F2F] text-white flex items-center justify-center mx-auto shadow-xl">
                  <CheckCircle2 className="w-12 h-12" />
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold text-[#D32F2F] uppercase tracking-widest">
                    REFERENCE QUOTE ID: DAC-2026-{(Math.random() * 8999 + 1000).toFixed(0)}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2A2D33] uppercase">
                    QUOTATION REQUEST RECEIVED!
                  </h2>
                  <p className="text-sm text-[#7A7D85] max-w-lg mx-auto leading-relaxed pt-2">
                    Thank you <span className="font-bold text-[#2A2D33]">{formData.name}</span> from <span className="font-bold text-[#2A2D33]">{formData.company || 'your organization'}</span>. Our commercial engineering department will prepare a detailed proposal and contact you shortly.
                  </p>
                </div>

                <div className="bg-[#F5F3EF] border border-[#E6E4DF] rounded-lg p-4 max-w-md mx-auto text-left text-xs space-y-1.5 text-[#2A2D33]">
                  <div className="font-bold uppercase border-b border-[#E6E4DF] pb-1 mb-2 text-[#D32F2F]">
                    Summary of Submitted Request
                  </div>
                  <div><span className="text-[#7A7D85]">Contact:</span> {formData.phone} | {formData.email}</div>
                  <div><span className="text-[#7A7D85]">Project Type:</span> {formData.projectCategory}</div>
                  {formData.productRequired && <div><span className="text-[#7A7D85]">Equipment:</span> {formData.productRequired} (Qty: {formData.quantity})</div>}
                  {fileName && <div><span className="text-[#7A7D85]">Attached Drawing:</span> {fileName}</div>}
                </div>

                <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
                  <Button onClick={() => { setSubmitted(false); setFileName(''); }} variant="primary" size="md">
                    SUBMIT ANOTHER QUOTE
                  </Button>
                  <Button to="/products" variant="outline" size="md">
                    RETURN TO CATALOGUE
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="border-b border-[#E6E4DF] pb-4 flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-[#2A2D33] uppercase">EQUIPMENT & TURNKEY QUOTATION FORM</h2>
                    <p className="text-xs text-[#7A7D85]">Fill out the details below to receive a formal commercial estimate.</p>
                  </div>
                  <FileText className="w-8 h-8 text-[#D32F2F] shrink-0" />
                </div>

                {/* Section 1: Contact & Organization */}
                <div className="space-y-4">
                  <h3 className="text-xs font-bold uppercase text-[#D32F2F] tracking-wider border-l-2 border-[#D32F2F] pl-2">
                    1. Contact & Organization Details
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-[#2A2D33] mb-1">Name *</label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your Full Name"
                        className="w-full px-3 py-2 bg-[#F5F3EF] border border-[#E6E4DF] rounded text-sm text-[#2A2D33] focus:outline-none focus:ring-2 focus:ring-[#D32F2F] focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-[#2A2D33] mb-1">Company / Establishment Name *</label>
                      <input 
                        type="text" 
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Company / Restaurant Name"
                        className="w-full px-3 py-2 bg-[#F5F3EF] border border-[#E6E4DF] rounded text-sm text-[#2A2D33] focus:outline-none focus:ring-2 focus:ring-[#D32F2F] focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-[#2A2D33] mb-1">Phone Number *</label>
                      <input 
                        type="tel" 
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 Mobile Number"
                        className="w-full px-3 py-2 bg-[#F5F3EF] border border-[#E6E4DF] rounded text-sm text-[#2A2D33] focus:outline-none focus:ring-2 focus:ring-[#D32F2F] focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-[#2A2D33] mb-1">Email Address *</label>
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="email@domain.com"
                        className="w-full px-3 py-2 bg-[#F5F3EF] border border-[#E6E4DF] rounded text-sm text-[#2A2D33] focus:outline-none focus:ring-2 focus:ring-[#D32F2F] focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-[#2A2D33] mb-1">City / Location *</label>
                      <input 
                        type="text" 
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="City Name"
                        className="w-full px-3 py-2 bg-[#F5F3EF] border border-[#E6E4DF] rounded text-sm text-[#2A2D33] focus:outline-none focus:ring-2 focus:ring-[#D32F2F] focus:bg-white"
                      />
                    </div>
                  </div>
                </div>

                {/* Section 2: Project Specifications */}
                <div className="space-y-4 pt-4 border-t border-[#E6E4DF]">
                  <h3 className="text-xs font-bold uppercase text-[#D32F2F] tracking-wider border-l-2 border-[#D32F2F] pl-2">
                    2. Project & Equipment Requirements
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-[#2A2D33] mb-1">Business Type *</label>
                      <select 
                        value={formData.businessType}
                        onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                        className="w-full px-3 py-2 bg-[#F5F3EF] border border-[#E6E4DF] rounded text-sm text-[#2A2D33] focus:outline-none focus:ring-2 focus:ring-[#D32F2F] focus:bg-white"
                      >
                        <option value="Hotel">Hotel / Resort</option>
                        <option value="Restaurant">Restaurant / Fine Dining</option>
                        <option value="Cafe">Café / QSR</option>
                        <option value="Cloud Kitchen">Cloud Kitchen</option>
                        <option value="Bakery">Bakery / Pastry Unit</option>
                        <option value="Hospital">Hospital Kitchen</option>
                        <option value="Industrial Canteen">Industrial Canteen</option>
                        <option value="Catering">Catering Company</option>
                        <option value="Educational">Educational Institution</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-[#2A2D33] mb-1">Select Project Category *</label>
                      <select 
                        value={formData.projectCategory}
                        onChange={(e) => setFormData({ ...formData, projectCategory: e.target.value })}
                        className="w-full px-3 py-2 bg-[#F5F3EF] border border-[#E6E4DF] rounded text-sm text-[#2A2D33] focus:outline-none focus:ring-2 focus:ring-[#D32F2F] focus:bg-white"
                      >
                        <option value="New Kitchen">New Kitchen Setup</option>
                        <option value="Kitchen Upgrade">Kitchen Upgrade / Expansion</option>
                        <option value="Equipment Purchase">Equipment Purchase</option>
                        <option value="Turnkey Project">Turnkey Project</option>
                        <option value="Maintenance">Maintenance & AMC</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-bold uppercase text-[#2A2D33] mb-1">
                        Product / Equipment Required
                      </label>
                      <input 
                        type="text" 
                        value={formData.productRequired}
                        onChange={(e) => setFormData({ ...formData, productRequired: e.target.value })}
                        placeholder="e.g. Commercial Four Burner Range, Deck Oven, Work Tables"
                        className="w-full px-3 py-2 bg-[#F5F3EF] border border-[#E6E4DF] rounded text-sm text-[#2A2D33] focus:outline-none focus:ring-2 focus:ring-[#D32F2F] focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-[#2A2D33] mb-1">Quantity</label>
                      <input 
                        type="text" 
                        value={formData.quantity}
                        onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                        placeholder="e.g. 2 Units / Complete Setup"
                        className="w-full px-3 py-2 bg-[#F5F3EF] border border-[#E6E4DF] rounded text-sm text-[#2A2D33] focus:outline-none focus:ring-2 focus:ring-[#D32F2F] focus:bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-[#2A2D33] mb-1">
                      Project Details / Custom Specifications
                    </label>
                    <textarea 
                      rows="4"
                      value={formData.projectDetails}
                      onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                      placeholder="Specify dimensions, gas preference (LPG/PNG), power requirements, or specific kitchen operational notes..."
                      className="w-full px-3 py-2 bg-[#F5F3EF] border border-[#E6E4DF] rounded text-sm text-[#2A2D33] focus:outline-none focus:ring-2 focus:ring-[#D32F2F] focus:bg-white"
                    ></textarea>
                  </div>
                </div>

                {/* Section 3: File Attachment / Drawing Upload Simulator */}
                <div className="space-y-3 pt-4 border-t border-[#E6E4DF]">
                  <h3 className="text-xs font-bold uppercase text-[#D32F2F] tracking-wider border-l-2 border-[#D32F2F] pl-2">
                    3. Upload Requirement / Floorplan Drawing (Optional)
                  </h3>

                  <div className="border-2 border-dashed border-[#E6E4DF] hover:border-[#D32F2F] rounded-lg p-6 text-center bg-[#F5F3EF] transition-colors relative cursor-pointer">
                    <input 
                      type="file" 
                      onChange={handleFileChange}
                      accept=".pdf,.dwg,.jpg,.png,.doc,.docx"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <Upload className="w-8 h-8 text-[#D32F2F] mx-auto mb-2" />
                    <div className="text-xs font-bold text-[#2A2D33] uppercase">
                      {fileName ? `Attached: ${fileName}` : "Click or drag layout drawing / equipment list PDF"}
                    </div>
                    <div className="text-[11px] text-[#7A7D85] mt-1">
                      Supports CAD (.dwg), PDF, JPG, PNG, DOCX (Max 25MB)
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E6E4DF]">
                  <Button type="submit" variant="primary" size="lg" className="w-full" icon={Send}>
                    REQUEST A QUOTE
                  </Button>
                </div>

              </form>
            )}

          </div>
        </Reveal>
      </section>

    </div>
  );
};

export default RequestQuote;
