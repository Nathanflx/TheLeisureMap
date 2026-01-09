"use client";

import { ChevronRight, Star, Shield, Award } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100">
      {/* Gold decorative elements - lebih subtle */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-amber-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-100/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-10 md:py-32 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center bg-white/80 px-4 py-2 rounded-full border border-amber-300 shadow-sm mb-6">
            <Award className="text-amber-600 mr-2" size={18} />
            <span className="text-amber-700 text-sm font-medium">Travel Agency Terpercaya Sejak 2014</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gray-900">Jelajahi </span>
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Keindahan Lombok
            </span>
            <br />
            <span className="text-gray-800">dengan Harga Terbaik</span>
          </h1>
          
          <p className="text-xl mb-8 text-gray-600 max-w-2xl">
            Pengalaman wisata berkualitas dengan harga terjangkau. Dari pantai indah hingga penginapan nyaman, 
            kami menghadirkan petualangan tak terlupakan di Lombok tanpa menguras kantong.
          </p>
          
          <div className="flex flex-wrap gap-6 mb-10">
            <div className="flex items-center bg-white/90 px-4 py-3 rounded-lg border border-amber-200 shadow-sm hover:shadow-md transition-shadow">
              <Shield className="text-amber-600 mr-3" />
              <div>
                <p className="font-semibold text-gray-900">Harga Terjangkau</p>
                <p className="text-sm text-gray-600">Kualitas Terjamin</p>
              </div>
            </div>
            <div className="flex items-center bg-white/90 px-4 py-3 rounded-lg border border-amber-200 shadow-sm hover:shadow-md transition-shadow">
              <Star className="text-amber-600 fill-amber-600/30 mr-3" />
              <div>
                <p className="font-semibold text-gray-900">Tour Guide Professional</p>
                <p className="text-sm text-gray-600">Ramah & Berpengalaman</p>
              </div>
            </div>
            <div className="flex items-center bg-white/90 px-4 py-3 rounded-lg border border-amber-200 shadow-sm hover:shadow-md transition-shadow">
              <Award className="text-amber-600 mr-3" />
              <div>
                <p className="font-semibold text-gray-900">Harga Terbaik</p>
                <p className="text-sm text-gray-600">Garansi Termurah</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#packages" 
              className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold py-4 px-8 rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Lihat Paket Hemat
              <ChevronRight className="ml-2" size={20} />
            </a>
            <a 
              href="#contact" 
              className="bg-transparent border-2 border-amber-500 hover:bg-amber-50 text-amber-700 font-bold py-4 px-8 rounded-xl flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md"
            >
              Konsultasi Gratis
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative bottom border */}
      <div className="h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
    </section>
  );
}