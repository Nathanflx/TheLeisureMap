"use client";

import { ChevronRight, Check, Users, Calendar, MapPin, Sparkles, Crown, Zap, Star, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

const packages = [
  {
    id: 1,
    title: "Bali Cultural Experience",
    description: "Paket 4 hari mengunjungi situs budaya dan pura-pura penting dengan akomodasi premium",
    price: "2.499.000",
    originalPrice: "2.799.000",
    features: [
      "Hotel Bintang 4 dengan Pool",
      "Tour Guide Berbahasa Inggris",
      "Makan di Restoran Terkenal",
      "Kecak Dance Performance",
      "Transportasi Private",
      "Welcome Drink & Flower Garland"
    ],
    duration: "4 Hari 3 Malam",
    groupSize: "2-4 Orang",
    destinations: ["Pura Tanah Lot", "Ubud Monkey Forest", "Tegallalang Rice Terrace", "Uluwatu Temple"],
    popular: true,
    badge: "TERFAVORIT",
    icon: <Crown className="w-4 h-4" />,
    image: "/bali-package1.jpg"
  },
  {
    id: 2,
    title: "Bali Beach & Island Hopping",
    description: "Petualangan pantai dan pulau-pulau sekitar Bali dengan aktivitas air lengkap",
    price: "3.299.000",
    originalPrice: "3.599.000",
    features: [
      "Beachfront Resort",
      "Snorkeling & Diving Guide",
      "Seafood BBQ Dinner",
      "Island Hopping Trip",
      "Water Sports Activities",
      "Sunset Cocktail Cruise"
    ],
    duration: "5 Hari 4 Malam",
    groupSize: "2-6 Orang",
    destinations: ["Nusa Penida", "Gili Islands", "Blue Lagoon", "Kuta Beach"],
    bestValue: true,
    badge: "NILAI TERBAIK",
    icon: <Sparkles className="w-4 h-4" />,
    image: "/bali-package2.jpg"
  },
  {
    id: 3,
    title: "Bali Luxury Honeymoon",
    description: "Paket romantis untuk pasangan dengan fasilitas mewah dan privasi maksimal",
    price: "4.999.000",
    originalPrice: "5.499.000",
    features: [
      "Private Villa with Pool",
      "Romantic Dinner on Beach",
      "Couple Spa Treatment",
      "Private Car & Driver",
      "Flower Bath Decoration",
      "Professional Photo Session"
    ],
    duration: "6 Hari 5 Malam",
    groupSize: "2 Orang",
    destinations: ["Jimbaran Bay", "Seminyak Beach", "Mount Batur", "Tirta Gangga"],
    premium: true,
    badge: "PREMIUM",
    icon: <Zap className="w-4 h-4" />,
    image: "/bali-package3.jpg"
  }
];

export default function PackagesBali() {
  const [selectedPackage, setSelectedPackage] = useState<number | null>(null);

  const formatPrice = (price: string) => {
    const parts = price.split('.');
    if (parts.length === 3) {
      return {
        juta: parts[0],
        ribu: parts[1],
        ratus: parts[2]
      };
    }
    return { juta: price, ribu: "000", ratus: "000" };
  };

  return (
    <section id="packages" className="py-20 relative overflow-hidden bg-white">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-emerald-50 to-white"></div>
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-emerald-100/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-emerald-50 border border-emerald-200">
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-emerald-700 text-xs font-semibold tracking-wider uppercase">Paket Wisata Bali</span>
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900">Pilih </span>
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Pengalaman Bali
            </span>
            <span className="text-gray-900"> Anda</span>
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto text-base leading-relaxed">
            Setiap paket dirancang untuk memberikan pengalaman terbaik di Bali. Dari budaya, pantai, hingga kemewahan, 
            kami menyediakan <span className="text-emerald-600 font-medium">pengalaman autentik</span> dengan pelayanan terbaik.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg) => {
            const priceParts = formatPrice(pkg.price);
            const originalPriceParts = formatPrice(pkg.originalPrice);
            
            return (
              <div 
                key={pkg.id}
                className={`relative group transition-all duration-300 ${
                  selectedPackage === pkg.id ? 'transform scale-[1.02]' : 'hover:scale-[1.01]'
                }`}
                onMouseEnter={() => setSelectedPackage(pkg.id)}
                onMouseLeave={() => setSelectedPackage(null)}
              >
                {/* Main Card */}
                <div className="bg-white rounded-2xl overflow-hidden border border-emerald-200 hover:border-emerald-300 shadow-lg hover:shadow-xl h-full transition-all duration-300">
                  {/* Image Section */}
                  <div className="relative h-48 overflow-hidden">
                    {/* Badge */}
                    <div className="absolute top-4 left-4 z-20">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-600 blur opacity-70"></div>
                        <div className="relative bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 text-xs">
                          {pkg.icon}
                          <span className="tracking-wide">{pkg.badge}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Discount Badge */}
                    <div className="absolute top-4 right-4 z-20">
                      <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white font-bold text-xs w-10 h-10 rounded-full flex flex-col items-center justify-center shadow-lg">
                        <span className="text-[9px] leading-tight">DISKON</span>
                        <span className="text-xs font-black leading-tight">{Math.round((1 - parseInt(pkg.price.replace(/\./g, '')) / parseInt(pkg.originalPrice.replace(/\./g, ''))) * 100)}%</span>
                      </div>
                    </div>
                    
                    {/* Placeholder Image */}
                    <div className="relative w-full h-full">
                      <div className="w-full h-full bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-4xl font-bold text-emerald-600 mb-2">{pkg.id}</div>
                          <p className="text-gray-600">{pkg.title.split(' ').slice(0, 2).join(' ')}</p>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    </div>
                    
                    {/* Package Number */}
                    <div className="absolute bottom-4 right-4 z-10">
                      <div className="text-5xl font-black text-white/30">0{pkg.id}</div>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-6">
                    {/* Title & Description */}
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug">
                        {pkg.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                        {pkg.description}
                      </p>
                      
                      {/* Price & Duration Section */}
                      <div className="flex items-center justify-between mb-6 p-4 bg-gradient-to-r from-emerald-50 to-white rounded-xl border border-emerald-100">
                        <div className="space-y-2">
                          <div className="flex items-center text-gray-700">
                            <Calendar className="mr-2 text-emerald-600" size={16} />
                            <span className="text-sm font-medium">{pkg.duration}</span>
                          </div>
                          <div className="flex items-center text-gray-700">
                            <Users className="mr-2 text-emerald-600" size={16} />
                            <span className="text-sm font-medium">{pkg.groupSize}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="mb-1">
                            <span className="text-gray-400 line-through text-xs">Rp {pkg.originalPrice}</span>
                          </div>
                          <div className="flex items-baseline justify-end">
                            <span className="text-2xl font-bold text-emerald-700">Rp</span>
                            <span className="text-3xl font-black text-emerald-700 ml-1">{priceParts.juta}</span>
                            <span className="text-xl font-bold text-emerald-700">.{priceParts.ribu}</span>
                            <span className="text-lg font-bold text-emerald-700/80">.{priceParts.ratus}</span>
                          </div>
                          <p className="text-gray-500 text-xs mt-1">per orang</p>
                        </div>
                      </div>
                    </div>

                    {/* Destinations */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <MapPin className="text-emerald-600" size={16} />
                        <h4 className="font-semibold text-gray-900 text-sm">Destinasi Wisata</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {pkg.destinations.map((dest, idx) => (
                          <span 
                            key={idx} 
                            className="px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-lg border border-emerald-200 text-xs font-medium hover:border-emerald-300 transition-colors"
                          >
                            {dest}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-8">
                      <div className="flex items-center gap-2 mb-3">
                        <Star className="text-emerald-600" size={16} />
                        <h4 className="font-semibold text-gray-900 text-sm">Fasilitas Termasuk</h4>
                      </div>
                      <ul className="space-y-2.5">
                        {pkg.features.slice(0, 4).map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="flex-shrink-0 mr-3 mt-0.5">
                              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
                                <Check size={12} className="text-white" />
                              </div>
                            </div>
                            <span className="text-gray-700 text-sm">
                              {feature}
                            </span>
                          </li>
                        ))}
                        {pkg.features.length > 4 && (
                          <li className="text-center pt-2">
                            <span className="text-emerald-600 text-xs font-medium">
                              + {pkg.features.length - 4} fasilitas lainnya
                            </span>
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <button className="group/btn relative w-full py-4 px-6 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-emerald-200">
                      {/* Main gradient background */}
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl"></div>
                      
                      {/* Hover gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
                      
                      {/* Border glow */}
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 rounded-xl blur opacity-0 group-hover/btn:opacity-70 transition-opacity duration-300"></div>
                      
                      {/* Button content */}
                      <div className="relative z-10 flex items-center justify-center gap-3">
                        <span className="text-white font-bold text-lg tracking-wide">PESAN SEKARANG</span>
                        <ArrowRight className="text-white group-hover/btn:translate-x-2 transition-transform duration-300" size={20} />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Package CTA */}
        <div className="text-center">
          <div className="relative inline-block max-w-4xl w-full">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-400/20 to-emerald-600/20 rounded-2xl blur-sm"></div>
            <div className="relative bg-gradient-to-br from-white to-emerald-50 rounded-2xl p-8 border border-emerald-200 shadow-lg">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="text-left lg:text-left">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Butuh Paket <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Kustom</span> untuk Bali?
                  </h3>
                  <p className="text-gray-600 text-sm max-w-lg">
                    Tim ahli kami siap membantu merancang itinerary khusus sesuai keinginan dan budget perjalanan Anda di Bali.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <button className="group/cta relative px-8 py-4 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                    {/* Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl"></div>
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-xl opacity-0 group-hover/cta:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/cta:translate-x-full transition-transform duration-1000"></div>
                    
                    {/* Content */}
                    <div className="relative z-10 flex items-center gap-2">
                      <span className="text-white font-semibold">Rancang Paketmu</span>
                      <Sparkles className="text-white group-hover/cta:rotate-90 transition-transform duration-300" size={16} />
                    </div>
                  </button>
                </div>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-emerald-200">
                <div className="text-center">
                  <div className="text-2xl font-black text-emerald-700 mb-1">1K+</div>
                  <p className="text-gray-600 text-xs">Wisatawan Puas</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-emerald-700 mb-1">Luxury</div>
                  <p className="text-gray-600 text-xs">Akomodasi</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-emerald-700 mb-1">Gratis</div>
                  <p className="text-gray-600 text-xs">Konsultasi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}