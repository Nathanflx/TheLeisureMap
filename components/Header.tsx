"use client";

import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('Home');
  const router = useRouter();
  const pathname = usePathname();

  const navItems = ['Home', 'Packages', 'Fleet', 'News', 'Contact'];

  // Fungsi untuk navigasi ke halaman utama (/app/page.tsx)
  const handleLogoClick = () => {
    router.push('/');
  };

  // Fungsi untuk navigasi ke bagian tertentu di halaman Lombok
  const handleNavClick = (item: string) => {
    const sectionId = item.toLowerCase();
    
    // Jika sudah di halaman Lombok (/lombok), scroll ke section
    if (pathname === '/lombok') {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Jika tidak di halaman Lombok, navigasi ke halaman Lombok dengan section
      router.push(`/lombok#${sectionId}`);
    }
    
    setActiveNav(item);
    setIsMenuOpen(false);
  };

  // Fungsi untuk CTA button (Contact)
  const handleContactClick = () => {
    if (pathname === '/lombok') {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      router.push('/lombok#contact');
    }
    setActiveNav('Contact');
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-amber-200 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo - Link ke halaman utama */}
          <button 
            onClick={handleLogoClick}
            className="flex items-center space-x-3 group focus:outline-none"
          >
            {/* Logo Image */}
            <div className="relative w-30 h-13">
              <Image
                src="/logo_leisuremap.png"
                alt="Lombok Travel Logo"
                fill
                className="object-contain transition-all duration-300 group-hover:scale-105 group-active:scale-95"
                sizes="64px"
                priority
              />
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button 
                key={item}
                onClick={() => handleNavClick(item)}
                className="relative px-5 py-2.5 text-gray-700 font-medium transition-all duration-300 group focus:outline-none"
              >
                <span className={`relative z-10 ${
                  activeNav === item 
                    ? 'text-amber-600 font-semibold' 
                    : 'group-hover:text-amber-700'
                }`}>
                  {item}
                </span>
                
                {/* Active indicator */}
                {activeNav === item && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full"></div>
                )}
                
                {/* Hover indicator */}
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button 
              onClick={handleContactClick}
              className="group relative px-6 py-3 rounded-lg overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
            >
              {/* Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg"></div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Text */}
              <span className="relative z-10 text-white font-semibold text-sm">
                FREE CONSULTATION
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-amber-600 hover:text-amber-700 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 rounded-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 animate-in fade-in duration-300">
            <div className="bg-white rounded-xl border border-amber-200 shadow-lg">
              <div className="p-4">
                <div className="flex flex-col space-y-1">
                  {navItems.map((item) => (
                    <button 
                      key={item}
                      onClick={() => handleNavClick(item)}
                      className={`px-4 py-3 rounded-lg transition-all duration-300 text-left focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-1 ${
                        activeNav === item 
                          ? 'bg-amber-50 text-amber-600 font-semibold' 
                          : 'text-gray-700 hover:bg-amber-50 hover:text-amber-700'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{item}</span>
                        {activeNav === item && (
                          <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                        )}
                      </div>
                    </button>
                  ))}
                  
                  {/* Mobile CTA */}
                  <div className="pt-4 mt-3 border-t border-amber-200">
                    <button 
                      onClick={handleContactClick}
                      className="block w-full py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-lg text-center hover:from-amber-400 hover:to-amber-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                    >
                      FREE CONSULTATION
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Active nav indicator for mobile */}
      <div className="lg:hidden">
        <div className="container mx-auto px-6">
          <div className="flex overflow-x-auto space-x-4 py-2">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className={`px-3 py-1 text-sm font-medium whitespace-nowrap rounded-full transition-colors focus:outline-none ${
                  activeNav === item
                    ? 'bg-amber-100 text-amber-700'
                    : 'text-gray-600 hover:text-amber-600'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}