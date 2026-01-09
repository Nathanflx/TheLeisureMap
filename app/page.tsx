"use client";

import { MapPin, ChevronRight, Plane, Compass, Navigation, Waves, Mountain, Palette, MessageCircle, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [hoveredIsland, setHoveredIsland] = useState<'bali' | 'lombok' | null>(null);
  const [activeIsland, setActiveIsland] = useState<'bali' | 'lombok' | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const contactOptions = [
    { 
      name: 'WhatsApp', 
      icon: '💬', 
      color: 'bg-green-500 hover:bg-green-600',
      link: 'https://wa.me/6281234567890' 
    },
    { 
      name: 'Email', 
      icon: '📧', 
      color: 'bg-blue-500 hover:bg-blue-600',
      link: 'mailto:info@leisuremap.com' 
    },
    { 
      name: 'Telepon', 
      icon: '📞', 
      color: 'bg-purple-500 hover:bg-purple-600',
      link: 'tel:+6281234567890' 
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-amber-50">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 lg:py-28 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-amber-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-100/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-amber-50 border border-amber-200">
              <Compass className="text-amber-600" size={18} />
              <span className="text-amber-700 text-sm font-medium">Welcome to The Leisure Map</span>
            </div>
            
            {/* Logo Leisure Map */}
            <div className="flex justify-center mb-6">
              <div className="relative w-48 h-16 md:w-64 md:h-20">
                <Image
                  src="/logo_leisuremap.png"
                  alt="Leisure Map Logo"
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 768px) 192px, 256px"
                />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gray-900">Temukan </span>
              <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Harta Karun
              </span>
              <span className="text-gray-900"> Indonesia</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 rounded-full">
                <Mountain className="text-emerald-600" size={16} />
                <span className="text-sm text-gray-700">Pemandangan Alam</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-amber-50 rounded-full">
                <Waves className="text-amber-600" size={16} />
                <span className="text-sm text-gray-700">Pantai Indah</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 rounded-full">
                <Palette className="text-blue-600" size={16} />
                <span className="text-sm text-gray-700">Budaya Kaya</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treasure Map Section */}
      <section className="py-10 md:py-20 bg-gradient-to-b from-amber-50 to-amber-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-2 md:mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-amber-800/10 border border-amber-800/20 rounded-full">
              <Navigation className="text-amber-800" size={16} />
              <span className="text-amber-800 text-sm font-medium">Peta Harta Karun Indonesia</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Jelajahi <span className="text-amber-700">Pulau-Pulau</span> Legendaris
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Klik pada pulau untuk membuka petualangan dan menemukan harta karun wisata yang tersembunyi
            </p>
          </div>

          {/* Hanya Image Map.png tanpa container/border/shadow */}
          <div className="relative max-w-6xl mx-auto">
            {/* Image Map.png sebagai base/latar belakang */}
            <div className="relative w-full h-[450px] md:h-[700px]">
              <Image
                src="/map.png"
                alt="Treasure Map of Indonesia"
                fill
                className="object-contain"
                priority
                sizes="100vw"
              />

              {/* BALI di KIRI (sebelumnya di kanan) */}
              <Link href="/bali">
                <div 
                  className={`absolute top-[30%] md:top-1/4 left-[15%] md:left-1/4 cursor-pointer transform transition-all duration-500 ${
                    hoveredIsland === 'bali' || activeIsland === 'bali'
                      ? 'scale-105 md:scale-110 drop-shadow-lg md:drop-shadow-2xl' 
                      : 'scale-100 hover:scale-105'
                  }`}
                  onMouseEnter={() => setHoveredIsland('bali')}
                  onMouseLeave={() => setHoveredIsland(null)}
                  onClick={() => setActiveIsland('bali')}
                >
                  <div className="relative w-32 h-32 md:w-56 md:h-56">
                    <Image
                      src="/bali.png"
                      alt="Bali Island"
                      fill
                      className="object-contain drop-shadow-lg md:drop-shadow-xl"
                      sizes="(max-width: 768px) 128px, 224px"
                    />
                    
                    {(hoveredIsland === 'bali' || activeIsland === 'bali') && (
                      <div className="absolute inset-0 bg-gradient-to-tr from-emerald-400/20 to-transparent rounded-full animate-pulse"></div>
                    )}
                    
                    <div className={`absolute -inset-2 md:-inset-4 bg-gradient-to-r from-emerald-400/30 to-green-400/30 rounded-full blur-lg md:blur-xl transition-opacity duration-500 ${
                      hoveredIsland === 'bali' || activeIsland === 'bali' ? 'opacity-100' : 'opacity-0'
                    }`}></div>
                  </div>
                  
                  <div className={`absolute -bottom-3 md:-bottom-6 left-1/2 -translate-x-1/2 text-center transition-all duration-300 ${
                    hoveredIsland === 'bali' || activeIsland === 'bali' ? 'opacity-100 scale-100' : 'opacity-90'
                  }`}>
                    <div className="inline-flex items-center gap-1 md:gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-emerald-600 text-white rounded-full shadow-md md:shadow-lg">
                      <MapPin className="w-3 h-3 md:w-4 md:h-4" />
                      <span className="font-bold text-sm md:text-lg">BALI</span>
                    </div>
                  </div>
                  
                  <div className={`absolute -top-4 md:-top-6 -left-4 md:-left-6 w-8 h-8 md:w-12 md:h-12 transition-all duration-300 ${
                    hoveredIsland === 'bali' || activeIsland === 'bali' ? 'opacity-100 scale-105 md:scale-110' : 'opacity-70'
                  }`}>
                  </div>
                </div>
              </Link>

              {/* LOMBOK di KANAN (sebelumnya di kiri) */}
              <Link href="/lombok">
                <div 
                  className={`absolute bottom-[35%] md:bottom-1/4 right-[15%] md:right-1/4 cursor-pointer transform transition-all duration-500 ${
                    hoveredIsland === 'lombok' || activeIsland === 'lombok'
                      ? 'scale-105 md:scale-110 drop-shadow-lg md:drop-shadow-2xl' 
                      : 'scale-100 hover:scale-105'
                  }`}
                  onMouseEnter={() => setHoveredIsland('lombok')}
                  onMouseLeave={() => setHoveredIsland(null)}
                  onClick={() => setActiveIsland('lombok')}
                >
                  <div className="relative w-32 h-32 md:w-56 md:h-56">
                    <Image
                      src="/lombok.png"
                      alt="Lombok Island"
                      fill
                      className="object-contain drop-shadow-lg md:drop-shadow-xl"
                      sizes="(max-width: 768px) 128px, 224px"
                    />
                    
                    {(hoveredIsland === 'lombok' || activeIsland === 'lombok') && (
                      <div className="absolute inset-0 bg-gradient-to-tr from-amber-400/20 to-transparent rounded-full animate-pulse"></div>
                    )}
                    
                    <div className={`absolute -inset-2 md:-inset-4 bg-gradient-to-r from-amber-400/30 to-orange-400/30 rounded-full blur-lg md:blur-xl transition-opacity duration-500 ${
                      hoveredIsland === 'lombok' || activeIsland === 'lombok' ? 'opacity-100' : 'opacity-0'
                    }`}></div>
                  </div>
                  
                  <div className={`absolute -top-3 md:-top-5 left-1/2 -translate-x-1/2 text-center transition-all duration-300 ${
                    hoveredIsland === 'lombok' || activeIsland === 'lombok' ? 'opacity-100 scale-100' : 'opacity-90'
                  }`}>
                    <div className="inline-flex items-center gap-1 md:gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-amber-600 text-white rounded-full shadow-md md:shadow-lg">
                      <MapPin className="w-3 h-3 md:w-4 md:h-4" />
                      <span className="font-bold text-sm md:text-lg">LOMBOK</span>
                    </div>
                  </div>
                  
                  <div className={`absolute -bottom-4 md:-bottom-6 -right-4 md:-right-6 w-8 h-8 md:w-12 md:h-12 transition-all duration-300 ${
                    hoveredIsland === 'lombok' || activeIsland === 'lombok' ? 'opacity-100 scale-105 md:scale-110' : 'opacity-70'
                  }`}>
                  </div>
                </div>
              </Link>

              {/* Connection Line - posisi tetap di tengah */}
              <div className="absolute top-1/2 left-1/4 right-1/4 h-1 hidden md:block">
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 border-t-2 border-dashed border-amber-600/30"></div>
                  <div className="absolute left-1/2 -translate-x-1/2 -top-3">
                    <div className="w-6 h-6 bg-amber-600 rounded-full flex items-center justify-center">
                      <Navigation className="text-white w-3 h-3" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Island Details Cards - Urutan tetap sama */}
          <div className={`mt-1 md:mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 transition-all duration-500 ${
            activeIsland ? 'opacity-100' : 'opacity-70 hover:opacity-100'
          }`}>
            {/* Bali Details Card */}
            <div 
              className={`bg-gradient-to-br from-emerald-50 to-white rounded-xl md:rounded-2xl p-4 md:p-6 border-2 transition-all duration-300 cursor-pointer ${
                activeIsland === 'bali' 
                  ? 'border-emerald-500 shadow-lg md:shadow-xl scale-[1.01] md:scale-[1.02]' 
                  : 'border-emerald-200 hover:border-emerald-300 hover:shadow-md md:hover:shadow-lg'
              }`}
              onClick={() => setActiveIsland('bali')}
            >
              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                <div className="relative w-12 h-12 md:w-16 md:h-16">
                  <Image
                    src="/bali.png"
                    alt="Bali"
                    fill
                    className="object-contain"
                    sizes="48px"
                  />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">Bali</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 md:w-3 md:h-3 bg-emerald-500 rounded-full"></div>
                    <p className="text-emerald-600 font-medium text-sm md:text-base">Pulau Dewata</p>
                  </div>
                </div>
              </div>
              <ul className="space-y-2 md:space-y-3">
                {[
                  { icon: "🏯", text: "Budaya Hindu yang kaya & Pura-pura megah" },
                  { icon: "🏖️", text: "Pantai Kuta, Seminyak, & Uluwatu" },
                  { icon: "🌋", text: "Gunung Batur & panorama perbukitan" },
                  { icon: "🛍️", text: "Shopping & nightlife internasional" },
                  { icon: "🍽️", text: "Kuliner fine dining & warung tradisional" },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 md:gap-3 text-gray-700">
                    <span className="text-lg md:text-xl mt-0.5 shrink-0">{item.icon}</span>
                    <span className="text-sm md:text-base">{item.text}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-emerald-200">
                <Link href="/bali" className="block w-full">
                  <button className="w-full group relative overflow-hidden px-4 py-2.5 md:px-6 md:py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-bold rounded-lg md:rounded-xl hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-md hover:shadow-lg text-sm md:text-base">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Buka Petualangan Bali
                      <ChevronRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                </Link>
              </div>
            </div>

            {/* Lombok Details Card */}
            <div 
              className={`bg-gradient-to-br from-amber-50 to-white rounded-xl md:rounded-2xl p-4 md:p-6 border-2 transition-all duration-300 cursor-pointer ${
                activeIsland === 'lombok' 
                  ? 'border-amber-500 shadow-lg md:shadow-xl scale-[1.01] md:scale-[1.02]' 
                  : 'border-amber-200 hover:border-amber-300 hover:shadow-md md:hover:shadow-lg'
              }`}
              onClick={() => setActiveIsland('lombok')}
            >
              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                <div className="relative w-12 h-12 md:w-16 md:h-16">
                  <Image
                    src="/lombok.png"
                    alt="Lombok"
                    fill
                    className="object-contain"
                    sizes="48px"
                  />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">Lombok</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 md:w-3 md:h-3 bg-amber-500 rounded-full"></div>
                    <p className="text-amber-600 font-medium text-sm md:text-base">Pulau Seribu Masjid</p>
                  </div>
                </div>
              </div>
              <ul className="space-y-2 md:space-y-3">
                {[
                  { icon: "🕌", text: "Budaya Sasak & Masjid-masjid indah" },
                  { icon: "🏝️", text: "Gili Islands & pantai tersembunyi" },
                  { icon: "⛰️", text: "Gunung Rinjani untuk pendaki" },
                  { icon: "🤿", text: "Snorkeling & diving terbaik" },
                  { icon: "🏄", text: "Surf spot yang belum banyak diketahui" },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 md:gap-3 text-gray-700">
                    <span className="text-lg md:text-xl mt-0.5 shrink-0">{item.icon}</span>
                    <span className="text-sm md:text-base">{item.text}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-amber-200">
                <Link href="/lombok" className="block w-full">
                  <button className="w-full group relative overflow-hidden px-4 py-2.5 md:px-6 md:py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold rounded-lg md:rounded-xl hover:from-amber-600 hover:to-amber-700 transition-all duration-300 shadow-md hover:shadow-lg text-sm md:text-base">
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Buka Petualangan Lombok
                      <ChevronRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-6 md:py-8 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-3 md:mb-4">
              <div className="w-5 h-5 md:w-6 md:h-6 bg-amber-600 rounded-full"></div>
              <div className="w-5 h-5 md:w-6 md:h-6 bg-emerald-600 rounded-full"></div>
              <div className="w-5 h-5 md:w-6 md:h-6 bg-blue-600 rounded-full"></div>
            </div>
            <p className="text-gray-400 text-sm md:text-base">
              © {new Date().getFullYear()} Indonesia Travel Paradise. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs md:text-sm mt-2">
              Temukan harta karun wisata di pulau-pulau terindah Indonesia
            </p>
          </div>
        </div>
      </footer>

      {/* Contact Bubble */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          {/* Contact Options - Muncul saat bubble diklik */}
          {isContactOpen && (
            <div className="absolute bottom-16 right-0 mb-4 flex flex-col items-end space-y-3 animate-fade-in">
              {contactOptions.map((option, index) => (
                <a
                  key={index}
                  href={option.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 ${option.color} text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300`}
                >
                  <span className="text-xl">{option.icon}</span>
                  <span className="font-semibold whitespace-nowrap">{option.name}</span>
                </a>
              ))}
            </div>
          )}

          {/* Main Bubble Button */}
          <button
            onClick={() => setIsContactOpen(!isContactOpen)}
            className={`w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 ${
              isContactOpen 
                ? 'bg-amber-600 hover:bg-amber-700 rotate-45' 
                : 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600'
            }`}
            aria-label="Customer Service"
          >
            {isContactOpen ? (
              <X className="w-6 h-6 md:w-7 md:h-7 text-white" />
            ) : (
              <MessageCircle className="w-6 h-6 md:w-7 md:h-7 text-white" />
            )}
          </button>

          {/* Ping Animation */}
          {!isContactOpen && (
            <div className="absolute inset-0 animate-ping bg-amber-400 rounded-full opacity-20"></div>
          )}
        </div>
      </div>

      {/* Inline styles untuk animasi */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}