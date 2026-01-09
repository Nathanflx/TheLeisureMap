"use client";

import { ChevronRight, Check, Users, Calendar, MapPin, Sparkles, Crown, Zap, Star, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

const packages = [
  {
    id: 1,
    title: "Lombok Favorit Experience",
    description: "Paket wisata 3 hari mengunjungi destinasi populer dengan akomodasi nyaman",
    price: "1.299.000",
    originalPrice: "1.499.000",
    features: [
      "Hotel Nyaman dengan Kolam Renang",
      "Tour Guide Berpengalaman",
      "Makan Restoran Lokal Terbaik",
      "Snorkeling Trip",
      "Transportasi AC",
      "Welcome Drink & Snack"
    ],
    duration: "3 Hari 2 Malam",
    groupSize: "2-4 Orang",
    destinations: ["Pantai Senggigi", "Gili Trawangan", "Bukit Merese", "Air Terjun Sendang Gile"],
    popular: true,
    badge: "TERFAVORIT",
    icon: <Crown className="w-4 h-4" />,
    image: "/paket1.png"
  },
  {
    id: 2,
    title: "Gili Islands Explorer",
    description: "Petualangan seru di 3 Gili dengan aktivitas lengkap",
    price: "1.799.000",
    originalPrice: "1.999.000",
    features: [
      "Penginapan Dekat Pantai",
      "Snorkeling & Diving Guide",
      "Seafood Dinner",
      "Island Hopping Trip",
      "Photo Session",
      "Free Minuman Selama Tour"
    ],
    duration: "4 Hari 3 Malam",
    groupSize: "2-6 Orang",
    destinations: ["Gili Trawangan", "Gili Meno", "Gili Air", "Turtle Point"],
    bestValue: true,
    badge: "NILAI TERBAIK",
    icon: <Sparkles className="w-4 h-4" />,
    image: "/paket3.png"
  },
  {
    id: 3,
    title: "Rinjani Adventure",
    description: "Pendakian Gunung Rinjani dengan fasilitas lengkap dan guide profesional",
    price: "1.499.000",
    originalPrice: "1.699.000",
    features: [
      "Camping Equipment Lengkap",
      "Guide & Porter Berpengalaman",
      "Makan di Gunung",
      "First Aid Kit",
      "Transport ke Basecamp",
      "Certificate of Achievement"
    ],
    duration: "4 Hari 3 Malam",
    groupSize: "4-8 Orang",
    destinations: ["Basecamp Sembalun", "Segara Anak Lake", "Summit Rinjani", "Hot Springs"],
    budget: true,
    badge: "HEMAT",
    icon: <Zap className="w-4 h-4" />,
    image: "/paket2.png"
  }
];

export default function Packages() {
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
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white"></div>
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-amber-100/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-amber-100 to-amber-50 border border-amber-200">
            <div className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse"></div>
            <span className="text-amber-700 text-xs font-semibold tracking-wider uppercase">Paket Wisata Terbaik</span>
            <div className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900">Pilih </span>
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Paket Wisata
            </span>
            <span className="text-gray-900"> Impianmu</span>
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto text-base leading-relaxed">
            Setiap paket dirancang dengan harga terjangkau dan kualitas terjamin. Dari akomodasi nyaman hingga aktivitas seru, 
            kami menyediakan <span className="text-amber-600 font-medium">pengalaman terbaik</span> dengan budget hemat.
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
                <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-amber-300 shadow-lg hover:shadow-xl h-full transition-all duration-300">
                  {/* Image Section */}
                  <div className="relative h-48 overflow-hidden">
                    {/* Badge */}
                    <div className="absolute top-4 left-4 z-20">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-600 blur opacity-70"></div>
                        <div className="relative bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 text-xs">
                          {pkg.icon}
                          <span className="tracking-wide">{pkg.badge}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Discount Badge */}
                    <div className="absolute top-4 right-4 z-20">
                      <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-white font-bold text-xs w-10 h-10 rounded-full flex flex-col items-center justify-center shadow-lg">
                        <span className="text-[9px] leading-tight">DISKON</span>
                        <span className="text-xs font-black leading-tight">{Math.round((1 - parseInt(pkg.price.replace(/\./g, '')) / parseInt(pkg.originalPrice.replace(/\./g, ''))) * 100)}%</span>
                      </div>
                    </div>
                    
                    {/* Gambar utama */}
                    <div className="relative w-full h-full">
                      <Image
                        src={pkg.image}
                        alt={pkg.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        priority={pkg.id === 1}
                      />
                      {/* Overlay gradient */}
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
                      <div className="flex items-center justify-between mb-6 p-4 bg-gradient-to-r from-amber-50 to-white rounded-xl border border-amber-100">
                        <div className="space-y-2">
                          <div className="flex items-center text-gray-700">
                            <Calendar className="mr-2 text-amber-600" size={16} />
                            <span className="text-sm font-medium">{pkg.duration}</span>
                          </div>
                          <div className="flex items-center text-gray-700">
                            <Users className="mr-2 text-amber-600" size={16} />
                            <span className="text-sm font-medium">{pkg.groupSize}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="mb-1">
                            <span className="text-gray-400 line-through text-xs">Rp {pkg.originalPrice}</span>
                          </div>
                          <div className="flex items-baseline justify-end">
                            <span className="text-2xl font-bold text-amber-700">Rp</span>
                            <span className="text-3xl font-black text-amber-700 ml-1">{priceParts.juta}</span>
                            <span className="text-xl font-bold text-amber-700">.{priceParts.ribu}</span>
                            <span className="text-lg font-bold text-amber-700/80">.{priceParts.ratus}</span>
                          </div>
                          <p className="text-gray-500 text-xs mt-1">per orang</p>
                        </div>
                      </div>
                    </div>

                    {/* Destinations */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <MapPin className="text-amber-600" size={16} />
                        <h4 className="font-semibold text-gray-900 text-sm">Tempat yang Dikunjungi</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {pkg.destinations.map((dest, idx) => (
                          <span 
                            key={idx} 
                            className="px-3 py-1.5 bg-gray-50 text-gray-700 rounded-lg border border-gray-200 text-xs font-medium hover:border-amber-300 transition-colors"
                          >
                            {dest}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-8">
                      <div className="flex items-center gap-2 mb-3">
                        <Star className="text-amber-600" size={16} />
                        <h4 className="font-semibold text-gray-900 text-sm">Fasilitas Termasuk</h4>
                      </div>
                      <ul className="space-y-2.5">
                        {pkg.features.slice(0, 4).map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="flex-shrink-0 mr-3 mt-0.5">
                              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center">
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
                            <span className="text-amber-600 text-xs font-medium">
                              + {pkg.features.length - 4} fasilitas lainnya
                            </span>
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <button className="group/btn relative w-full py-4 px-6 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-amber-200">
                      {/* Main gradient background */}
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl"></div>
                      
                      {/* Hover gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 rounded-xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
                      
                      {/* Border glow */}
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 rounded-xl blur opacity-0 group-hover/btn:opacity-70 transition-opacity duration-300"></div>
                      
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
            <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-400/20 to-amber-600/20 rounded-2xl blur-sm"></div>
            <div className="relative bg-gradient-to-br from-white to-amber-50 rounded-2xl p-8 border border-amber-200 shadow-lg">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="text-left lg:text-left">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Butuh Paket <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Kustom</span>?
                  </h3>
                  <p className="text-gray-600 text-sm max-w-lg">
                    Tim kami siap membantu merancang itinerary khusus sesuai keinginan dan budget Anda.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <button className="group/cta relative px-8 py-4 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                    {/* Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl"></div>
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 rounded-xl opacity-0 group-hover/cta:opacity-100 transition-opacity duration-300"></div>
                    
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
              <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-amber-200">
                <div className="text-center">
                  <div className="text-2xl font-black text-amber-700 mb-1">500+</div>
                  <p className="text-gray-600 text-xs">Wisatawan Puas</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-amber-700 mb-1">Harga</div>
                  <p className="text-gray-600 text-xs">Terjangkau</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-amber-700 mb-1">Gratis</div>
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