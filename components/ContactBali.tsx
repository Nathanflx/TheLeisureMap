"use client";

import { Phone, Mail, MapPin, Instagram, Facebook, MessageCircle, Clock, Diamond, Shield, Headphones, Send } from 'lucide-react';
import { useState } from 'react';

const ContactBali = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-12 md:py-24 relative overflow-hidden bg-white">
      {/* Background Effects - Hijau */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-emerald-50 to-white"></div>
      <div className="absolute top-10 left-5 w-48 h-48 md:top-20 md:left-10 md:w-96 md:h-96 bg-emerald-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-5 w-48 h-48 md:bottom-20 md:right-10 md:w-96 md:h-96 bg-emerald-100/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center gap-2 md:gap-3 mb-4 md:mb-6 px-4 py-2 md:px-6 md:py-3 rounded-full bg-gradient-to-r from-emerald-100 to-emerald-50 border border-emerald-200">
            <Diamond className="text-emerald-600 animate-pulse" size={16} />
            <span className="text-emerald-700 text-xs md:text-sm font-semibold tracking-wider md:tracking-widest">HUBUNGI KAMI</span>
            <Diamond className="text-emerald-600 animate-pulse" size={16} />
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8">
            <span className="text-gray-900">Butuh </span>
            <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
              Bantuan
            </span>
            <span className="text-gray-900"> untuk Liburanmu?</span>
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-lg leading-relaxed px-2 md:px-0">
            Tim customer service kami siap membantu <span className="text-emerald-600 font-medium">kapan saja</span> untuk 
            menjawab semua pertanyaan dan kebutuhan liburan Anda di Bali.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          {/* Contact Information - Left Side */}
          <div className="space-y-6 md:space-y-8">
            {/* Main Contact Card */}
            <div className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 border-2 border-emerald-200 shadow-lg">
              <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl md:rounded-2xl flex items-center justify-center">
                  <Headphones className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">Customer Service</h3>
                  <p className="text-gray-600 text-sm">Siap Membantu Kapan Saja</p>
                </div>
              </div>
              
              <div className="space-y-4 md:space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4 p-3 md:p-4 rounded-xl bg-emerald-50 hover:bg-emerald-100 transition-all duration-300 group border border-emerald-200">
                  <div className="relative flex-shrink-0">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg md:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Phone className="text-white" size={18} />
                    </div>
                    <div className="absolute -inset-1 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-lg md:rounded-xl blur opacity-30 group-hover:opacity-50"></div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-bold text-gray-900 text-base md:text-lg mb-1 md:mb-2">Telepon / WhatsApp</h4>
                    <p className="text-lg md:text-xl lg:text-2xl font-black text-emerald-700 truncate">+62 812-3456-7891</p>
                    <p className="text-gray-600 text-xs md:text-sm">Fast Response via WhatsApp</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-3 md:p-4 rounded-xl bg-emerald-50 hover:bg-emerald-100 transition-all duration-300 group border border-emerald-200">
                  <div className="relative flex-shrink-0">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg md:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Mail className="text-white" size={18} />
                    </div>
                    <div className="absolute -inset-1 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-lg md:rounded-xl blur opacity-30 group-hover:opacity-50"></div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-bold text-gray-900 text-base md:text-lg mb-1 md:mb-2">Email</h4>
                    <p className="text-base md:text-lg lg:text-xl font-bold text-emerald-700 truncate">info@balitravel.co.id</p>
                    <p className="text-gray-600 text-xs md:text-sm">Response dalam 1-2 jam kerja</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4 p-3 md:p-4 rounded-xl bg-emerald-50 hover:bg-emerald-100 transition-all duration-300 group border border-emerald-200">
                  <div className="relative flex-shrink-0">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg md:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <MapPin className="text-white" size={18} />
                    </div>
                    <div className="absolute -inset-1 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-lg md:rounded-xl blur opacity-30 group-hover:opacity-50"></div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-bold text-gray-900 text-base md:text-lg mb-1 md:mb-2">Kantor Kami</h4>
                    <p className="text-gray-700 text-sm">
                      Bali Travel Agency<br />
                      Jl. Raya Seminyak No. 88<br />
                      Kuta, Bali 80361
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4 p-3 md:p-4 rounded-xl bg-emerald-50 hover:bg-emerald-100 transition-all duration-300 group border border-emerald-200">
                  <div className="relative flex-shrink-0">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg md:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Clock className="text-white" size={18} />
                    </div>
                    <div className="absolute -inset-1 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-lg md:rounded-xl blur opacity-30 group-hover:opacity-50"></div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-bold text-gray-900 text-base md:text-lg mb-1 md:mb-2">Jam Operasional</h4>
                    <p className="text-gray-700 text-sm">Senin - Minggu: 08:00 - 20:00 WITA</p>
                    <p className="text-emerald-600 font-semibold text-sm">WhatsApp: 24/7 untuk pertanyaan</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media & Stats */}
            <div className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 border border-emerald-200 shadow-lg">
              <h4 className="font-bold text-gray-900 text-lg md:text-xl mb-4 md:mb-6">Ikuti Kami di Media Sosial</h4>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6 md:mb-8">
                {[
                  { icon: Instagram, label: 'Instagram', color: 'from-pink-500 to-rose-600', desc: 'Tips & Foto Wisata' },
                  { icon: Facebook, label: 'Facebook', color: 'from-blue-500 to-blue-600', desc: 'Update Promo' },
                  { icon: MessageCircle, label: 'WhatsApp', color: 'from-emerald-500 to-green-600', desc: 'Chat Langsung' },
                ].map((social) => (
                  <a 
                    key={social.label}
                    href="#" 
                    className="group flex-1"
                  >
                    <div className={`p-3 md:p-4 rounded-xl bg-gradient-to-br ${social.color} border border-white/10 flex flex-col items-center gap-1 md:gap-2 hover:scale-105 transition-transform shadow-sm`}>
                      <social.icon className="text-white" size={20} />
                      <span className="text-white text-xs md:text-sm font-medium">{social.label}</span>
                      <span className="text-white/90 text-xs text-center">{social.desc}</span>
                    </div>
                  </a>
                ))}
              </div>
              
              <div className="grid grid-cols-3 gap-3 md:gap-4 pt-4 md:pt-6 border-t border-emerald-200">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-black text-emerald-700 mb-1 md:mb-2">7K+</div>
                  <p className="text-gray-600 text-xs">Pelanggan</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-black text-emerald-700 mb-1 md:mb-2">99%</div>
                  <p className="text-gray-600 text-xs">Kepuasan</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-black text-emerald-700 mb-1 md:mb-2">Gratis</div>
                  <p className="text-gray-600 text-xs">Konsultasi</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - Right Side */}
          <div className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 border-2 border-emerald-200 shadow-lg">
            <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl md:rounded-2xl flex items-center justify-center">
                <Send className="text-white" size={20} />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">Konsultasi Gratis</h3>
                <p className="text-gray-600 text-sm">Ceritakan rencana liburanmu di Bali</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className="block text-gray-700 mb-2 font-medium text-sm md:text-base">Nama Lengkap *</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 md:px-5 md:py-4 bg-gray-50 border border-emerald-200 rounded-lg md:rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all text-sm md:text-base"
                    placeholder="Masukkan nama lengkap"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 font-medium text-sm md:text-base">Nomor WhatsApp *</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 md:px-5 md:py-4 bg-gray-50 border border-emerald-200 rounded-lg md:rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all text-sm md:text-base"
                    placeholder="+62 xxx xxxx xxxx"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium text-sm md:text-base">Email *</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 md:px-5 md:py-4 bg-gray-50 border border-emerald-200 rounded-lg md:rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all text-sm md:text-base"
                  placeholder="nama@email.com"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium text-sm md:text-base">Jenis Paket yang Diminati *</label>
                <select className="w-full px-4 py-3 md:px-5 md:py-4 bg-gray-50 border border-emerald-200 rounded-lg md:rounded-xl text-gray-900 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all appearance-none text-sm md:text-base" required>
                  <option value="">Pilih paket yang diminati</option>
                  <option value="family">Paket Wisata Keluarga Bali</option>
                  <option value="honeymoon">Paket Honeymoon Romantis</option>
                  <option value="backpacker">Paket Backpacker Bali</option>
                  <option value="group">Paket Group/Wisata Rohani</option>
                  <option value="custom">Rencanakan Paket Khusus</option>
                  <option value="transport">Sewa Mobil/Transportasi</option>
                  <option value="hotel">Booking Villa/Hotel Bali</option>
                  <option value="tour">Tour Harian Bali</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium text-sm md:text-base">Detail & Pertanyaan</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 md:px-5 md:py-4 bg-gray-50 border border-emerald-200 rounded-lg md:rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all text-sm md:text-base"
                  placeholder="Ceritakan rencana liburanmu di Bali, jumlah orang, budget, tanggal, dan pertanyaan lainnya..."
                ></textarea>
              </div>

              {/* Guarantee Badge */}
              <div className="flex items-center gap-3 p-3 md:p-4 rounded-xl bg-emerald-50 border border-emerald-200">
                <Shield className="text-emerald-600" size={20} />
                <div>
                  <p className="text-gray-900 font-medium text-sm md:text-base">Konsultasi 100% Gratis</p>
                  <p className="text-gray-600 text-xs md:text-sm">Tidak ada biaya untuk konsultasi pertama</p>
                </div>
              </div>

              <button 
                type="submit" 
                className={`w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 font-bold py-3 md:py-4 px-4 md:px-6 rounded-lg md:rounded-xl text-base md:text-lg tracking-wider flex items-center justify-center gap-2 md:gap-3 group/btn transition-all duration-300 shadow-lg hover:shadow-xl ${
                  isSubmitted ? 'bg-gradient-to-r from-emerald-500 to-green-600' : ''
                }`}
                disabled={isSubmitted}
              >
                {isSubmitted ? (
                  <>
                    <div className="w-5 h-5 md:w-6 md:h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span className="text-white text-sm md:text-base">TERKIRIM!</span>
                  </>
                ) : (
                  <>
                    <span className="text-white text-sm md:text-base">KIRIM PERTANYAAN</span>
                    <Send className="text-white group-hover/btn:translate-x-2 transition-transform" size={18} />
                  </>
                )}
              </button>

              <p className="text-center text-gray-500 text-xs md:text-sm">
                Tim kami akan membalas dalam <span className="text-emerald-600 font-semibold">1-2 jam kerja</span>
              </p>
            </form>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 md:mt-20">
          <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 border border-emerald-200 shadow-lg">
            <h4 className="text-center text-gray-900 text-xl md:text-2xl font-bold mb-6 md:mb-10">Dipercaya oleh Ribuan Wisatawan</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
              {[
                { label: 'Pengalaman', value: '12+ Tahun' },
                { label: 'Kepuasan Pelanggan', value: '99%' },
                { label: 'Respon Cepat', value: '< 1 Jam' },
                { label: 'Wisatawan Terlayani', value: '7000+' },
              ].map((badge) => (
                <div key={badge.label} className="text-center group">
                  <div className="text-2xl md:text-3xl lg:text-4xl font-black text-emerald-700 mb-2 md:mb-3 group-hover:scale-105 transition-transform">
                    {badge.value}
                  </div>
                  <p className="text-gray-600 text-xs md:text-sm">{badge.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBali;