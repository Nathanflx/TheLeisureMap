"use client";

import { Calendar, User, ArrowRight, Newspaper, Camera, Star, MapPin, Users, Heart, Coffee } from 'lucide-react';
import { useState } from 'react';

const blogPosts = [
  {
    id: 1,
    title: "Festival Nyepi di Bali: Pengalaman Spiritual yang Menakjubkan",
    excerpt: "Cerita pengalaman mengikuti Hari Raya Nyepi di Bali, hari sunyi penuh makna dan refleksi diri.",
    date: "15 Maret 2024",
    author: "Tim Cultural BaliTravel",
    category: "Budaya",
    icon: <Users className="w-5 h-5" />,
    readTime: "6 min read",
    image: "/bali-blog1.jpg",
    tags: ["Nyepi", "Spiritual", "Budaya Bali"],
    likes: 124,
    comments: 32
  },
  {
    id: 2,
    title: "Hidden Gems Ubud: Tempat-tempat Tersembunyi yang Wajib Dikunjungi",
    excerpt: "Temukan tempat-tempat tersembunyi di Ubud yang tidak banyak diketahui turis namun sangat memukau.",
    date: "8 Maret 2024",
    author: "Tim Exploration BaliTravel",
    category: "Exploration",
    icon: <MapPin className="w-5 h-5" />,
    readTime: "5 min read",
    image: "/bali-blog2.jpg",
    tags: ["Ubud", "Hidden Gems", "Exploration"],
    likes: 89,
    comments: 21
  },
  {
    id: 3,
    title: "Kuliner Bali: Dari Babi Guling hingga Lawar, Rasa yang Tak Terlupakan",
    excerpt: "Panduan lengkap kuliner Bali yang wajib dicoba, dari warung tradisional hingga restoran mewah.",
    date: "1 Maret 2024",
    author: "Tim Kuliner BaliTravel",
    category: "Kuliner",
    icon: <Coffee className="w-5 h-5" />,
    readTime: "7 min read",
    image: "/bali-blog3.jpg",
    tags: ["Kuliner", "Babi Guling", "Makanan Bali"],
    likes: 156,
    comments: 45
  }
];

const categories = [
  { name: "Semua", count: 3 },
  { name: "Budaya", count: 1 },
  { name: "Exploration", count: 1 },
  { name: "Kuliner", count: 1 }
];

const NewsBali = () => {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [hoveredPost, setHoveredPost] = useState<number | null>(null);

  const filteredPosts = selectedCategory === "Semua" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <section id="news" className="py-24 relative overflow-hidden bg-white">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-emerald-50 to-white"></div>
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-emerald-100/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-100 to-emerald-50 border border-emerald-200">
            <Newspaper className="text-emerald-600" size={20} />
            <span className="text-emerald-700 text-sm font-semibold tracking-widest">BLOG & CERITA WISATA BALI</span>
            <Newspaper className="text-emerald-600" size={20} />
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="text-gray-900">Kisah & </span>
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Inspirasi
            </span>
            <span className="text-gray-900"> dari Bali</span>
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Bagikan pengalaman, tips wisata, dan cerita inspiratif dari Bali untuk membantu merencanakan perjalanan terbaikmu.
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category.name
                  ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-md'
                  : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200'
              }`}
            >
              {category.name}
              <span className={`ml-2 px-1.5 py-0.5 rounded-full text-xs ${
                selectedCategory === category.name
                  ? 'bg-white/30 text-white'
                  : 'bg-emerald-200 text-emerald-700'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredPosts.map((post) => (
            <div 
              key={post.id} 
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredPost(post.id)}
              onMouseLeave={() => setHoveredPost(null)}
            >
              <div className="bg-white rounded-3xl overflow-hidden border border-gray-200 hover:border-emerald-300 h-full shadow-md hover:shadow-xl transition-all duration-500">
                {/* Blog Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-emerald-600 mb-2">{post.id}</div>
                      <p className="text-gray-600 text-sm">{post.title.split(' ').slice(0, 2).join(' ')}</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <div className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-bold rounded-full text-xs">
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
                      <div className="w-8 h-8 bg-emerald-50 rounded-full flex items-center justify-center">
                        <User className="text-emerald-600" size={14} />
                      </div>
                      <span className="text-gray-700 text-sm">{post.author}</span>
                    </div>
                    <div className="text-gray-500 text-xs flex items-center gap-1">
                      <Calendar size={12} />
                      {post.date.split(' ')[0]}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-emerald-700 transition-colors line-clamp-2">
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
                        className="px-2 py-0.5 bg-emerald-50 text-emerald-700 rounded-full border border-emerald-200 text-xs hover:border-emerald-300 transition-colors"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-emerald-200">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-500 text-xs">{post.readTime}</span>
                      <span className="text-gray-300">•</span>
                      <span className="text-gray-500 text-xs">{post.comments} comments</span>
                    </div>
                    <button className="w-8 h-8 bg-emerald-50 rounded-full flex items-center justify-center group/arrow hover:bg-emerald-100 transition-all">
                      <ArrowRight className="text-emerald-600 group-hover/arrow:translate-x-0.5 transition-transform" size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="mb-20">
          <div className="bg-gradient-to-br from-white to-emerald-50 rounded-3xl p-10 border border-emerald-200 shadow-lg">
            <div className="text-center max-w-2xl mx-auto">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Newspaper className="text-white" size={28} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Dapatkan <span className="text-emerald-600">Tips Eksklusif</span> Bali
              </h3>
              <p className="text-gray-600 mb-8">
                Bergabung dengan newsletter kami untuk mendapatkan informasi terbaru tentang event budaya, promo khusus, dan cerita inspiratif langsung ke inbox Anda.
              </p>
              
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Masukkan email Anda"
                  className="flex-1 px-5 py-3 bg-white border border-emerald-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-emerald-700 transition-all shadow-sm hover:shadow-md"
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
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
            <div className="relative bg-gradient-to-br from-white to-emerald-50 rounded-3xl p-10 border border-emerald-200 shadow-lg">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Punya Pertanyaan tentang <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Wisata Bali</span>?
                  </h3>
                  <p className="text-gray-600 max-w-xl">
                    Tim ahli Bali kami siap membantu merencanakan perjalanan terbaikmu di Pulau Dewata. Konsultasi gratis!
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <button className="group/cta relative overflow-hidden px-10 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-bold text-lg shadow-lg hover:shadow-xl">
                    <span className="relative z-10 flex items-center gap-3">
                      KONSULTASI GRATIS
                      <div className="w-6 h-6 bg-white/30 rounded-full flex items-center justify-center">
                        <ArrowRight className="group-hover/cta:translate-x-1 transition-transform" />
                      </div>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-500 transform -translate-x-full group-hover/cta:translate-x-0 transition-transform duration-500"></div>
                  </button>
                </div>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-emerald-200">
                <div className="text-center">
                  <div className="text-2xl font-black text-emerald-700 mb-2">200+</div>
                  <p className="text-gray-600 text-sm">Cerita Bali</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-emerald-700 mb-2">Gratis</div>
                  <p className="text-gray-600 text-sm">Konsultasi</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-emerald-700 mb-2">Expert</div>
                  <p className="text-gray-600 text-sm">Local Guide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsBali;