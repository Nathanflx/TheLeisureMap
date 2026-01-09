"use client";

import { ChevronRight, Star, Shield, Award, Umbrella, Waves } from 'lucide-react';

export default function HeroBali() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-white via-emerald-50 to-emerald-100">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-emerald-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-100/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center bg-white/80 px-4 py-2 rounded-full border border-emerald-300 shadow-sm mb-6">
            <Award className="text-emerald-600 mr-2" size={18} />
            <span className="text-emerald-700 text-sm font-medium">Travel Agency Terpercaya Sejak 2014</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gray-900">Jelajahi </span>
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Keajaiban Bali
            </span>
            <br />
            <span className="text-gray-800">Pulau Dewata Nan Memikat</span>
          </h1>
          
          <p className="text-xl mb-8 text-gray-600 max-w-2xl">
            Pengalaman wisata berkualitas dengan harga terjangkau. Dari pantai eksotis hingga budaya yang kaya, 
            kami menghadirkan petualangan tak terlupakan di Bali untuk semua kalangan.
          </p>
          
          <div className="flex flex-wrap gap-6 mb-10">
            <div className="flex items-center bg-white/90 px-4 py-3 rounded-lg border border-emerald-200 shadow-sm hover:shadow-md transition-shadow">
              <Shield className="text-emerald-600 mr-3" />
              <div>
                <p className="font-semibold text-gray-900">Wisata Budaya</p>
                <p className="text-sm text-gray-600">Pura & Upacara Adat</p>
              </div>
            </div>
            <div className="flex items-center bg-white/90 px-4 py-3 rounded-lg border border-emerald-200 shadow-sm hover:shadow-md transition-shadow">
              <Star className="text-emerald-600 fill-emerald-600/30 mr-3" />
              <div>
                <p className="font-semibold text-gray-900">Pantai Terbaik</p>
                <p className="text-sm text-gray-600">Kuta, Seminyak, Nusa Dua</p>
              </div>
            </div>
            <div className="flex items-center bg-white/90 px-4 py-3 rounded-lg border border-emerald-200 shadow-sm hover:shadow-md transition-shadow">
              <Umbrella className="text-emerald-600 mr-3" />
              <div>
                <p className="font-semibold text-gray-900">Luxury Resort</p>
                <p className="text-sm text-gray-600">Akomodasi Bintang 5</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#packages" 
              className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold py-4 px-8 rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Lihat Paket Wisata
              <ChevronRight className="ml-2" size={20} />
            </a>
            <a 
              href="#contact" 
              className="bg-transparent border-2 border-emerald-500 hover:bg-emerald-50 text-emerald-700 font-bold py-4 px-8 rounded-xl flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md"
            >
              Konsultasi Gratis
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative bottom border */}
      <div className="h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>
    </section>
  );
}