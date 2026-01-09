"use client";

import { Car, Users, Fuel, Settings, Shield, Star, Sparkles, Wifi, Music, Snowflake, Clock, MapPin, Check, Award, Zap, Phone } from "lucide-react";
import { ReactNode, useState } from "react";

interface FleetCar {
  id: number;
  name: string;
  type: string;
  capacity: string;
  fuel: string;
  year: string;
  rating: number;
  image: string;
  features: string[];
  price: string;
  transmission: string;
  engine: string;
  fuelEfficiency: string;
  tripsCompleted: number;
  driverIncluded: boolean;
  ac: boolean;
  entertainment: boolean;
  available: boolean;
}

interface InfoBoxProps {
  icon: ReactNode;
  label: string;
  value: string;
}

interface FeatureBadgeProps {
  icon: ReactNode;
  text: string;
  available: boolean;
}

const fleet: FleetCar[] = [
  {
    id: 1,
    name: "Toyota Alphard",
    type: "Executive MPV",
    capacity: "6-7 Orang",
    fuel: "Bensin",
    year: "2023",
    rating: 4.9,
    image: "/alphard.png",
    features: [
      "AC Dual Zone",
      "Leather Seats",
      "Entertainment System",
      "Captain Seats",
      "Privacy Glass",
      "Driver Berpengalaman",
      "Water & Tissue Ready",
      "Free WiFi"
    ],
    price: "850.000",
    transmission: "Automatic",
    engine: "2.5L",
    fuelEfficiency: "12 km/L",
    tripsCompleted: 189,
    driverIncluded: true,
    ac: true,
    entertainment: true,
    available: true
  },
  {
    id: 2,
    name: "Toyota Hiace Premio",
    type: "Luxury Minibus",
    capacity: "10-12 Orang",
    fuel: "Diesel",
    year: "2023",
    rating: 4.8,
    image: "/hiace-premio.png",
    features: [
      "AC Double Blower",
      "Reclining Seats",
      "LED TV & DVD",
      "Refreshment Area",
      "Privacy Curtain",
      "Professional Driver",
      "Welcome Drink",
      "Tour Guide Ready"
    ],
    price: "1.200.000",
    transmission: "Manual",
    engine: "2.8L",
    fuelEfficiency: "10 km/L",
    tripsCompleted: 145,
    driverIncluded: true,
    ac: true,
    entertainment: true,
    available: true
  },
  {
    id: 3,
    name: "Mercedes Benz V-Class",
    type: "Premium MPV",
    capacity: "6 Orang",
    fuel: "Diesel",
    year: "2022",
    rating: 5.0,
    image: "/v-class.png",
    features: [
      "Premium Leather Interior",
      "Panoramic Sunroof",
      "Advanced Safety System",
      "Massage Seats",
      "Burmester Sound System",
      "Chauffeur Service",
      "Butler Service Available",
      "Luxury Amenities"
    ],
    price: "1.500.000",
    transmission: "Automatic",
    engine: "2.0L",
    fuelEfficiency: "14 km/L",
    tripsCompleted: 98,
    driverIncluded: true,
    ac: true,
    entertainment: true,
    available: true
  },
  {
    id: 4,
    name: "Honda Brio",
    type: "City Car",
    capacity: "4-5 Orang",
    fuel: "Bensin",
    year: "2023",
    rating: 4.6,
    image: "/brio-bali.png",
    features: [
      "Fuel Efficient",
      "Easy to Park",
      "AC Standard",
      "Budget Friendly",
      "City Tour Ready",
      "Local Driver",
      "Basic Amenities",
      "Short Trip Special"
    ],
    price: "400.000",
    transmission: "Manual",
    engine: "1.2L",
    fuelEfficiency: "18 km/L",
    tripsCompleted: 210,
    driverIncluded: true,
    ac: true,
    entertainment: false,
    available: true
  }
];

const FeatureBadge = ({ icon, text, available }: FeatureBadgeProps) => (
  <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm ${
    available 
      ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
      : 'bg-gray-100 text-gray-500 border border-gray-200'
  }`}>
    {icon}
    <span>{text}</span>
  </div>
);

const FleetBali = () => {
  const [selectedCar, setSelectedCar] = useState<number | null>(null);
  const [showAllFeatures, setShowAllFeatures] = useState<number | null>(null);

  const premiumCars = fleet.slice(0, 2);
  const otherCars = fleet.slice(2);

  return (
    <section id="fleet" className="relative py-24 bg-white text-gray-900 overflow-hidden">
      {/* Emerald Blur */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-96 h-96 bg-emerald-200/20 blur-3xl rounded-full" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-emerald-100/10 blur-3xl rounded-full" />
      </div>

      <div className="relative container mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-2 border border-emerald-300 rounded-full bg-emerald-50">
            <Car size={18} className="text-emerald-600" />
            <span className="text-emerald-700 tracking-widest text-sm font-semibold">
              ARMADA TRANSPORTASI PREMIUM BALI
            </span>
          </div>

          <h2 className="text-5xl font-bold mb-6">
            Perjalanan <span className="text-emerald-600">Mewah & Nyaman</span> di Bali
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Armada premium kami siap memberikan pengalaman perjalanan terbaik dengan kenyamanan dan layanan kelas atas selama eksplorasi Bali.
          </p>
        </div>

        {/* Premium Cars Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Armada Premium</h3>
              <p className="text-gray-600">Pilihan terbaik untuk perjalanan bisnis dan keluarga</p>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <div className="flex items-center gap-2 text-emerald-600">
                <Star size={16} className="fill-emerald-500" />
                <span className="font-semibold">Rating 4.8+</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-600">
                <Award size={16} />
                <span className="font-semibold">Chauffeur Service</span>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {premiumCars.map((car) => (
              <div
                key={car.id}
                className="group bg-white border border-emerald-200 rounded-3xl overflow-hidden
                           hover:border-emerald-300 transition-all duration-300 shadow-lg hover:shadow-xl"
                onMouseEnter={() => setSelectedCar(car.id)}
                onMouseLeave={() => setSelectedCar(null)}
              >
                {/* IMAGE */}
                <div className="relative h-64">
                  <div className="w-full h-full bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center">
                    <div className="text-center">
                      <Car size={80} className="text-emerald-600 mx-auto mb-4" />
                      <div className="text-2xl font-bold text-emerald-700">{car.name}</div>
                      <div className="text-gray-600">{car.type}</div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />

                  {/* Availability Badge */}
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium ${
                    car.available 
                      ? 'bg-emerald-100 text-emerald-700 border border-emerald-200'
                      : 'bg-red-100 text-red-700 border border-red-200'
                  }`}>
                    {car.available ? 'Tersedia' : 'Tidak Tersedia'}
                  </div>

                  {/* Rating */}
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/95 px-3 py-1 rounded-full shadow-sm">
                    <Star size={14} className="text-emerald-500 fill-emerald-500"/>
                    <span className="text-sm font-semibold text-gray-900">
                      {car.rating}
                    </span>
                  </div>

                  {/* Car Type */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/95 border border-emerald-300 px-4 py-1 rounded-lg text-emerald-700 text-sm font-medium">
                    {car.type}
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">
                        {car.name}
                      </h3>
                      <p className="text-gray-600 text-sm">Tahun {car.year} • {car.transmission}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-black text-emerald-700">Rp{car.price}</div>
                      <p className="text-gray-500 text-sm">/hari (10 jam)</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <InfoBox icon={<Users size={18}/>} label="Kapasitas" value={car.capacity}/>
                    <InfoBox icon={<Fuel size={18}/>} label="Bahan Bakar" value={car.fuel}/>
                  </div>

                  {/* Quick Features */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Zap size={18} className="text-emerald-600"/>
                      <h4 className="font-semibold text-gray-900">
                        Spesifikasi
                      </h4>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                        Mesin: {car.engine}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                        Efisiensi: {car.fuelEfficiency}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                        Trips: {car.tripsCompleted}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                        Driver: {car.driverIncluded ? 'Chauffeur' : 'Optional'}
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Settings size={18} className="text-emerald-600"/>
                        <h4 className="font-semibold text-gray-900">
                          Fasilitas Premium
                        </h4>
                      </div>
                      <button 
                        onClick={() => setShowAllFeatures(showAllFeatures === car.id ? null : car.id)}
                        className="text-emerald-600 text-sm font-medium hover:text-emerald-700"
                      >
                        {showAllFeatures === car.id ? 'Sembunyikan' : 'Lihat Semua'}
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {car.features.slice(0, showAllFeatures === car.id ? car.features.length : 4).map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-lg border border-emerald-200 text-sm">
                          <Check size={12} />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <button className={`w-full py-3 rounded-xl font-semibold tracking-wide transition-all duration-300 ${
                    car.available
                      ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white hover:from-emerald-600 hover:to-emerald-700 shadow-md hover:shadow-lg'
                      : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  }`}>
                    {car.available ? 'Pesan Mobil Premium' : 'Tidak Tersedia'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Cars Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-10">Armada Lainnya</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {otherCars.map((car) => (
              <div
                key={car.id}
                className="group bg-white border border-gray-200 hover:border-emerald-300 rounded-2xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 bg-emerald-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Car size={28} className="text-emerald-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 mb-1">{car.name}</h4>
                      <p className="text-gray-600 text-sm">{car.type}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <span className="text-sm text-gray-500">{car.capacity}</span>
                        <span className="text-gray-300">•</span>
                        <span className="text-sm text-gray-500">{car.fuel}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <FeatureBadge 
                      icon={<Snowflake size={14} />} 
                      text="AC" 
                      available={car.ac} 
                    />
                    <FeatureBadge 
                      icon={<Music size={14} />} 
                      text="Entertainment" 
                      available={car.entertainment} 
                    />
                    <FeatureBadge 
                      icon={<Users size={14} />} 
                      text="Driver" 
                      available={car.driverIncluded} 
                    />
                    <div className="text-right">
                      <div className="text-2xl font-bold text-emerald-700">Rp{car.price}</div>
                      <p className="text-gray-500 text-xs">/hari</p>
                    </div>
                  </div>
                  
                  <button className="w-full py-2.5 border border-emerald-300 text-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors text-sm font-medium">
                    Lihat Detail
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features & Guarantee */}
        <div className="mb-16 border border-emerald-200 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 bg-gradient-to-br from-white to-emerald-50">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div>
              <div className="flex items-center gap-3 md:gap-4 mb-6">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-emerald-600 text-white flex items-center justify-center rounded-xl">
                  <Shield size={24} className="md:size={26}" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                    Jaminan Layanan Premium
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    Standar tertinggi untuk kenyamanan maksimal
                  </p>
                </div>
              </div>

              <ul className="space-y-2 md:space-y-3 text-gray-700">
                {[
                  { icon: <Shield size={14} className="md:size={16}" />, text: "Armada Terawat Premium" },
                  { icon: <Users size={14} className="md:size={16}" />, text: "Chauffeur Berpengalaman" },
                  { icon: <Clock size={14} className="md:size={16}" />, text: "Punctual & On Time" },
                  { icon: <Wifi size={14} className="md:size={16}" />, text: "Free WiFi & Refreshment" },
                  { icon: <MapPin size={14} className="md:size={16}" />, text: "GPS Tracking Real-time" },
                  { icon: <Award size={14} className="md:size={16}" />, text: "Luxury Amenities" },
                  { icon: <Snowflake size={14} className="md:size={16}" />, text: "AC Optimal" },
                  { icon: <Music size={14} className="md:size={16}" />, text: "Premium Sound System" },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 md:gap-3 text-sm md:text-base">
                    <div className="w-5 h-5 md:w-6 md:h-6 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <span className="flex-1">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6 md:space-y-8">
              <div>
                <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
                  {[
                    { value: "Premium", label: "Armada", icon: <Car size={18} className="md:size={20}" /> },
                    { value: "24/7", label: "Concierge", icon: <Clock size={18} className="md:size={20}" /> },
                    { value: "4.9★", label: "Rating", icon: <Star size={18} className="md:size={20}" /> },
                    { value: "VIP", label: "Service", icon: <Award size={18} className="md:size={20}" /> },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className="text-center p-4 md:p-5 bg-white rounded-lg md:rounded-xl border border-emerald-200 shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-emerald-100 text-emerald-600 rounded-lg md:rounded-xl flex items-center justify-center mx-auto mb-2">
                        {stat.icon}
                      </div>
                      <div className="text-lg md:text-xl font-bold text-emerald-700 mb-1">
                        {stat.value}
                      </div>
                      <p className="text-gray-600 text-xs md:text-sm">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
                
                <div className="bg-white border border-emerald-200 rounded-xl p-4 md:p-6">
                  <h4 className="font-bold text-gray-900 text-lg mb-3 md:mb-4">Paket Rental Premium</h4>
                  <div className="space-y-2 md:space-y-3">
                    {[
                      { duration: "10 Jam", price: "Mulai Rp 850.000", desc: "City tour & meeting" },
                      { duration: "12 Jam", price: "Mulai Rp 1.000.000", desc: "Full day exploration" },
                      { duration: "Multi-day", price: "Mulai Rp 2.500.000", desc: "Per day, min 3 days" },
                      { duration: "Airport VIP", price: "Mulai Rp 650.000", desc: "Transfer khusus" },
                    ].map((pkg, i) => (
                      <div key={i} className="flex items-center justify-between p-3 bg-emerald-50 rounded-lg border border-emerald-200 hover:bg-emerald-100 transition-colors duration-200">
                        <div>
                          <p className="font-medium text-gray-900 text-sm md:text-base">{pkg.duration}</p>
                          <p className="text-gray-600 text-xs md:text-sm">{pkg.desc}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-emerald-700 text-sm md:text-base">{pkg.price}</p>
                          <button className="text-emerald-600 hover:text-emerald-700 text-xs md:text-sm font-medium transition-colors">
                            Pesan
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-10">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Butuh <span className="text-emerald-600">Transportasi VIP</span> di Bali?
            </h3>
            <p className="text-gray-600">
              Konsultasi gratis dengan tim kami untuk mendapatkan rekomendasi armada premium sesuai kebutuhan perjalanan bisnis atau liburan Anda.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-12 py-4 border-2 border-emerald-500 text-emerald-600 rounded-xl
                             hover:bg-emerald-500 hover:text-white transition-all shadow-sm hover:shadow-md
                             flex items-center gap-3 font-semibold">
              Konsultasi Transportasi Premium
              <Sparkles size={18} />
            </button>
            <button className="px-12 py-4 border-2 border-gray-300 text-gray-700 rounded-xl
                             hover:bg-gray-100 transition-all
                             flex items-center gap-3 font-semibold">
              <Phone size={18} />
              WhatsApp VIP Service
            </button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 mt-12 pt-12 border-t border-emerald-200">
            <div className="text-center">
              <div className="text-4xl font-black text-emerald-700 mb-2">100%</div>
              <p className="text-gray-600">Armada Premium</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-emerald-700 mb-2">VIP</div>
              <p className="text-gray-600">Chauffeur Service</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-emerald-700 mb-2">500+</div>
              <p className="text-gray-600">Trip VIP</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-emerald-700 mb-2">4.9★</div>
              <p className="text-gray-600">Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const InfoBox = ({ icon, label, value }: InfoBoxProps) => {
  return (
    <div className="flex items-center gap-3 border border-emerald-200 bg-emerald-50 rounded-xl p-4">
      <div className="w-10 h-10 bg-emerald-600 text-white flex items-center justify-center rounded-lg">
        {icon}
      </div>
      <div>
        <p className="text-gray-600 text-xs">{label}</p>
        <p className="font-semibold text-gray-900">{value}</p>
      </div>
    </div>
  );
};

export default FleetBali;