import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ChevronRight, ArrowUpRight } from 'lucide-react';
import DacotaLogo from './DacotaLogo';

const Footer = () => {
  return (
    <footer className="bg-[#09090B] text-zinc-400 pt-16 pb-8 border-t-4 border-[#D32F2F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-zinc-800">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/">
              <DacotaLogo variant="light" size="lg" />
            </Link>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-sm mt-4">
              DACOTA designs and manufactures high-performance commercial kitchen equipment and provides complete turnkey kitchen solutions for hotels, restaurants, bakeries, cloud kitchens, hospitals, and institutional canteens across India.
            </p>
            
            <div className="pt-2 flex items-center space-x-3">
              <span className="text-xs uppercase font-bold tracking-wider text-white">Engineering Quality & Precision</span>
              <div className="h-0.5 w-12 bg-[#D32F2F]"></div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-l-2 border-[#D32F2F] pl-2.5">
              Company
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link to="/about" className="hover:text-white hover:translate-x-1 transition-all inline-flex items-center">
                  <ChevronRight className="w-3 h-3 text-[#D32F2F] mr-1" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/manufacturing" className="hover:text-white hover:translate-x-1 transition-all inline-flex items-center">
                  <ChevronRight className="w-3 h-3 text-[#D32F2F] mr-1" />
                  <span>Manufacturing</span>
                </Link>
              </li>
              <li>
                <Link to="/quality" className="hover:text-white hover:translate-x-1 transition-all inline-flex items-center">
                  <ChevronRight className="w-3 h-3 text-[#D32F2F] mr-1" />
                  <span>Quality Assurance</span>
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-white hover:translate-x-1 transition-all inline-flex items-center">
                  <ChevronRight className="w-3 h-3 text-[#D32F2F] mr-1" />
                  <span>Projects Case Studies</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white hover:translate-x-1 transition-all inline-flex items-center">
                  <ChevronRight className="w-3 h-3 text-[#D32F2F] mr-1" />
                  <span>Services & Maintenance</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Products */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-l-2 border-[#D32F2F] pl-2.5">
              Products
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link to="/products?category=cooking-equipment" className="hover:text-white hover:translate-x-1 transition-all inline-flex items-center">
                  <ChevronRight className="w-3 h-3 text-[#D32F2F] mr-1" />
                  <span>Cooking Equipment</span>
                </Link>
              </li>
              <li>
                <Link to="/products?category=bakery-equipment" className="hover:text-white hover:translate-x-1 transition-all inline-flex items-center">
                  <ChevronRight className="w-3 h-3 text-[#D32F2F] mr-1" />
                  <span>Bakery Equipment</span>
                </Link>
              </li>
              <li>
                <Link to="/products?category=refrigeration" className="hover:text-white hover:translate-x-1 transition-all inline-flex items-center">
                  <ChevronRight className="w-3 h-3 text-[#D32F2F] mr-1" />
                  <span>Refrigeration</span>
                </Link>
              </li>
              <li>
                <Link to="/products?category=stainless-steel" className="hover:text-white hover:translate-x-1 transition-all inline-flex items-center">
                  <ChevronRight className="w-3 h-3 text-[#D32F2F] mr-1" />
                  <span>Stainless Steel</span>
                </Link>
              </li>
              <li>
                <Link to="/products?category=exhaust-ventilation" className="hover:text-white hover:translate-x-1 transition-all inline-flex items-center">
                  <ChevronRight className="w-3 h-3 text-[#D32F2F] mr-1" />
                  <span>Exhaust & Ventilation</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-l-2 border-[#D32F2F] pl-2.5">
              Contact
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-start space-x-2">
                <Phone className="w-4 h-4 text-[#D32F2F] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white font-medium">+91 [Phone Number Placeholder]</span>
                  <span className="text-[11px] text-zinc-500">Mon - Sat: 9:00 AM - 7:00 PM</span>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="w-4 h-4 text-[#D32F2F] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white font-medium">info@dacotaequipment.com</span>
                  <span className="text-[11px] text-zinc-500">Sales & Quotation Enquiries</span>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-[#D32F2F] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white font-medium">DACOTA Manufacturing Works</span>
                  <span className="text-[11px] text-zinc-500">Industrial Park Phase II [Address Placeholder]</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 space-y-4 sm:space-y-0">
          <p>© 2026 DACOTA Commercial Kitchen Equipment. All Rights Reserved.</p>
          
          <div className="flex items-center space-x-6">
            <Link to="/contact" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <Link to="/request-quote" className="text-[#D32F2F] font-bold hover:underline flex items-center">
              <span>Request Quote</span>
              <ArrowUpRight className="w-3 h-3 ml-0.5" />
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
