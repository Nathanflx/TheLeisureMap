"use client";

import { Calendar, User, ArrowRight, Newspaper, Camera, Star, MapPin, Users, Heart, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const blogPosts = [
  {
    id: 1,
    title: "Musim Terbaik Berkunjung ke Lombok: Panduan Lengkap",
    excerpt: "Pelajari musim-musim di Lombok dan waktu terbaik untuk mengunjungi destinasi favorit seperti Gili Islands dan Rinjani.",
    date: "28 September 2024",
    author: "Tim Guide LombokTravel",
    category: "Panduan",
    icon: <Calendar className="w-5 h-5" />,
    readTime: "4 min read",
    image: "/blog1.png",
    tags: ["Musim", "Panduan", "Waktu Terbaik"],
    likes: 38,
    comments: 7
  },
  {
    id: 2,
    title: "Kuliner Lombok yang Wajib Dicoba: Dari Ayam Taliwang sampai Plecing Kangkung",
    excerpt: "Jelajahi cita rasa autentik Lombok melalui makanan khasnya. Simak rekomendasi tempat makan terbaik dengan harga terjangkau.",
    date: "20 September 2024",
    author: "Tim Kuliner LombokTravel",
    category: "Kuliner",
    icon: <TrendingUp className="w-5 h-5" />,
    readTime: "5 min read",
    image: "/blog2.png",
    tags: ["Kuliner", "Makanan", "Rekomendasi"],
    likes: 65,
    comments: 21
  },
  {
    id: 3,
    title: "Wisata Air Terjun Tersembunyi di Lombok yang Belum Banyak Diketahui",
    excerpt: "Temukan keindahan air terjun tersembunyi di Lombok yang belum terjamah turis. Petualangan sejati menunggu Anda!",
    date: "12 September 2024",
    author: "Tim Adventure LombokTravel",
    category: "Adventure",
    icon: <MapPin className="w-5 h-5" />,
    readTime: "6 min read",
    image: "/blog3.png",
    tags: ["Adventure", "Alam", "Tersembunyi"],
    likes: 94,
    comments: 28
  }
];

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [hoveredPost, setHoveredPost] = useState<number | null>(null);

  const filteredPosts = selectedCategory === "Semua" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <section id="news" className="py-24 relative overflow-hidden bg-white">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white"></div>
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-amber-100/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-full bg-gradient-to-r from-amber-100 to-amber-50 border border-amber-200">
            <Newspaper className="text-amber-600" size={20} />
            <span className="text-amber-700 text-sm font-semibold tracking-widest">BLOG & CERITA WISATA</span>
            <Newspaper className="text-amber-600" size={20} />
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="text-gray-900">Cerita & </span>
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Tips
            </span>
            <span className="text-gray-900"> dari Kami</span>
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Bagikan pengalaman, tips wisata hemat, dan informasi terbaru dari tim LombokTravel untuk liburan terbaikmu.
          </p>
        </div>
        
        {/* Blog Grid - 3 posts dalam 3 kolom di desktop, 2 di tablet, 1 di mobile */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredPosts.map((post) => (
            <div 
              key={post.id} 
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredPost(post.id)}
              onMouseLeave={() => setHoveredPost(null)}
            >
              <div className="bg-white rounded-3xl overflow-hidden border border-gray-200 hover:border-amber-300 h-full shadow-md hover:shadow-xl transition-all duration-500">
                {/* Blog Image - DIUBAH: Menghapus placeholder */}
                <div className="relative h-48 overflow-hidden">
                  {/* Image component untuk gambar lokal */}
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Overlay gradient untuk readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <div className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold rounded-full text-xs">
                      {post.icon}
                      <span>{post.category}</span>
                    </div>
                  </div>
                  
                  {/* Stats */}
                  <div className="absolute top-3 right-3 z-10 flex items-center gap-2">
                    <div className="flex items-center gap-1 bg-white/90 px-2 py-1 rounded-full">
                      <Heart size={12} className={hoveredPost === post.id ? "fill-red-500 text-red-500" : "text-gray-500"} />
                      <span className="text-xs text-gray-700">{post.likes}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-amber-50 rounded-full flex items-center justify-center">
                        <User className="text-amber-600" size={14} />
                      </div>
                      <span className="text-gray-700 text-sm">{post.author}</span>
                    </div>
                    <div className="text-gray-500 text-xs flex items-center gap-1">
                      <Calendar size={12} />
                      {post.date.split(' ')[0]}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-amber-700 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {post.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="px-2 py-0.5 bg-amber-50 text-amber-700 rounded-full border border-amber-200 text-xs hover:border-amber-300 transition-colors"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-amber-200">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-500 text-xs">{post.readTime}</span>
                      <span className="text-gray-300">•</span>
                      <span className="text-gray-500 text-xs">{post.comments} comments</span>
                    </div>
                    <button className="w-8 h-8 bg-amber-50 rounded-full flex items-center justify-center group/arrow hover:bg-amber-100 transition-all">
                      <ArrowRight className="text-amber-600 group-hover/arrow:translate-x-0.5 transition-transform" size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="mb-20">
          <div className="bg-gradient-to-br from-white to-amber-50 rounded-3xl p-10 border border-amber-200 shadow-lg">
            <div className="text-center max-w-2xl mx-auto">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Newspaper className="text-white" size={28} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Dapatkan Tips & Promo <span className="text-amber-600">Eksklusif</span>
              </h3>
              <p className="text-gray-600 mb-8">
                Bergabung dengan newsletter kami untuk mendapatkan informasi terbaru tentang promo, tips wisata, dan cerita inspiratif langsung ke inbox Anda.
              </p>
              
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Masukkan email Anda"
                  className="flex-1 px-5 py-3 bg-white border border-amber-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-xl hover:from-amber-600 hover:to-amber-700 transition-all shadow-sm hover:shadow-md"
                >
                  Berlangganan
                </button>
              </form>
              
              <p className="text-gray-500 text-sm mt-4">
                Kami tidak akan mengirim spam. Anda bisa berhenti berlangganan kapan saja.
              </p>
            </div>
          </div>
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <div className="relative inline-block group">
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
            <div className="relative bg-gradient-to-br from-white to-amber-50 rounded-3xl p-10 border border-amber-200 shadow-lg">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Punya Pertanyaan atau <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Butuh Rekomendasi</span>?
                  </h3>
                  <p className="text-gray-600 max-w-xl">
                    Tim kami siap membantu merencanakan liburan terbaikmu di Lombok. Konsultasi gratis tanpa biaya!
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <button className="group/cta relative overflow-hidden px-10 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold text-lg shadow-lg hover:shadow-xl">
                    <span className="relative z-10 flex items-center gap-3">
                      KONSULTASI GRATIS
                      <div className="w-6 h-6 bg-white/30 rounded-full flex items-center justify-center">
                        <ArrowRight className="group-hover/cta:translate-x-1 transition-transform" />
                      </div>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 transform -translate-x-full group-hover/cta:translate-x-0 transition-transform duration-500"></div>
                  </button>
                </div>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-amber-200">
                <div className="text-center">
                  <div className="text-2xl font-black text-amber-700 mb-2">100+</div>
                  <p className="text-gray-600 text-sm">Cerita Wisata</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-amber-700 mb-2">Gratis</div>
                  <p className="text-gray-600 text-sm">Konsultasi</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-amber-700 mb-2">Real</div>
                  <p className="text-gray-600 text-sm">Pengalaman</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;