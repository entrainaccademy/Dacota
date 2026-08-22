import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, Phone, FileText } from 'lucide-react';
import DacotaLogo from './DacotaLogo';
import Button from './Button';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Products', path: '/products' },
  // { label: 'Industries', path: '/industries' },
  // { label: 'Turnkey Solutions', path: '/turnkey-solutions' },
  // { label: 'Manufacturing', path: '/manufacturing' },
  // { label: 'Quality', path: '/quality' },
  // { label: 'Projects', path: '/projects' },
  { label: 'Services', path: '/services' },
  { label: 'Contact', path: '/contact' }
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isHomePage = location.pathname === '/';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isHomePage
          ? 'bg-transparent py-4'
          : scrolled
            ? 'bg-white shadow-sm border-b border-zinc-200 py-3'
            : 'bg-white border-b border-zinc-200/60 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center">
            <DacotaLogo variant="dark" size="md" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1  xl:space-x-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-2.5 py-1.5 text-xs xl:text-sm font-semibold  tracking-wide uppercase transition-colors rounded ${
                    isActive
                      ? 'text-[#09090B] font-extrabold  border-b-2 border-[#D32F2F]'
                      : 'text-[#09090B] hover:text-[#D32F2F] '
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <Button
              to="/request-quote"
              variant="primary"
              size="sm"
              icon={FileText}
              className="shadow-sm"
            >
              Get a Quote
            </Button>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Button
              to="/request-quote"
              variant="primary"
              size="sm"
              className="text-[10px] px-2.5 py-1 sm:hidden"
            >
              Quote
            </Button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className={`p-2 rounded-md focus:outline-none transition-colors ${
                isHomePage
                  ? 'text-white hover:text-zinc-200'
                  : 'text-[#09090B] hover:text-[#D32F2F] hover:bg-zinc-200'
              }`}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[#D32F2F]" />
              ) : (
                <Menu className={`w-6 h-6 ${isHomePage ? 'text-white' : 'text-[#09090B]'}`} />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-[#FFFFFF] border-b border-zinc-200 shadow-2xl overflow-y-auto max-h-[calc(100vh-70px)] transition-all">
          <div className="px-4 pt-3 pb-6 space-y-1 sm:px-6">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center justify-between px-3 py-2.5 text-sm font-bold uppercase tracking-wider rounded-md border-b border-zinc-100 ${
                    isActive
                      ? 'text-[#09090B] bg-zinc-100 border-l-4 border-[#D32F2F]'
                      : 'text-[#09090B] hover:bg-zinc-100'
                  }`
                }
              >
                <span>{item.label}</span>
                <ChevronRight className="w-4 h-4 text-zinc-400" />
              </NavLink>
            ))}

            <div className="pt-4 mt-4 border-t border-zinc-200 space-y-3">
              <Button
                to="/request-quote"
                variant="primary"
                size="md"
                className="w-full justify-center"
                icon={FileText}
              >
                REQUEST A QUOTE
              </Button>
              <Button
                to="/contact"
                variant="outline"
                size="md"
                className="w-full justify-center"
                icon={Phone}
              >
                CONTACT US
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
