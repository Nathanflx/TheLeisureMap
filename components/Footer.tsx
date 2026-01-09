"use client";

import { Heart, Shield, Award } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 text-gray-900 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Lombok Travel</h3>
            <p className="text-gray-600 mb-6">
              Penyedia jasa travel dan wisata terpercaya di Lombok sejak 2014.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center text-amber-600">
                <Award className="mr-2" />
                <span className="text-sm font-medium">Terpercaya</span>
              </div>
              <div className="flex items-center text-emerald-600">
                <Shield className="mr-2" />
                <span className="text-sm font-medium">Aman</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-gray-900">Layanan</h4>
            <ul className="space-y-3 text-gray-600">
              <li><a href="#packages" className="hover:text-amber-600 transition">Paket Wisata</a></li>
              <li><a href="#fleet" className="hover:text-amber-600 transition">Sewa Mobil</a></li>
              <li><a href="#" className="hover:text-amber-600 transition">Tour Guide</a></li>
              <li><a href="#" className="hover:text-amber-600 transition">Hotel Booking</a></li>
              <li><a href="#" className="hover:text-amber-600 transition">Airport Transfer</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-gray-900">Destinasi</h4>
            <ul className="space-y-3 text-gray-600">
              <li className="hover:text-amber-600 transition cursor-pointer">Senggigi Beach</li>
              <li className="hover:text-amber-600 transition cursor-pointer">Gili Islands</li>
              <li className="hover:text-amber-600 transition cursor-pointer">Mount Rinjani</li>
              <li className="hover:text-amber-600 transition cursor-pointer">Pink Beach</li>
              <li className="hover:text-amber-600 transition cursor-pointer">Traditional Villages</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-gray-900">Legal</h4>
            <ul className="space-y-3 text-gray-600">
              <li><a href="#" className="hover:text-amber-600 transition">Syarat & Ketentuan</a></li>
              <li><a href="#" className="hover:text-amber-600 transition">Kebijakan Privasi</a></li>
              <li><a href="#" className="hover:text-amber-600 transition">Kebijakan Pembatalan</a></li>
              <li><a href="#" className="hover:text-amber-600 transition">FAQ</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Lombok Travel. All rights reserved.
            </p>
            <p className="text-gray-600 flex items-center justify-center">
              Made with <Heart size={16} className="mx-1 text-red-500" /> in Lombok, Indonesia
            </p>
          </div>
          <p className="text-gray-500 text-sm mt-4">
            Izin Operasional: 0892/DISBUDPAR-LB/2024 | TDP: 12.34.5.67.89012
          </p>
        </div>
      </div>
    </footer>
  );
}