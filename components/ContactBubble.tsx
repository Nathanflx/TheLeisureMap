"use client";

import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';

export default function ContactBubble() {
  const [isOpen, setIsOpen] = useState(false);

  console.log("🔄 ContactBubble render - isOpen:", isOpen);

  const contactOptions = [
    { 
      name: 'WhatsApp', 
      icon: '💬', 
      color: 'bg-green-500',
      link: 'https://wa.me/6287716324941' 
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      <div className="relative">
        {/* Contact Options - SIMPLE VERSION */}
        {isOpen && (
          <div className="absolute bottom-16 right-0 mb-4">
            <a
              href="https://wa.me/6287716324941"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg"
            >
              <span className="text-xl">💬</span>
              <span className="font-semibold">WhatsApp</span>
            </a>
          </div>
        )}

        {/* Main Bubble Button - SIMPLE */}
        <button
          onClick={() => {
            console.log("🎯 BUTTON CLICKED");
            setIsOpen(!isOpen);
          }}
          className={`
            w-14 h-14 flex items-center justify-center rounded-full 
            shadow-lg bg-amber-500
            ${isOpen ? 'rotate-45' : ''}
          `}
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <MessageCircle className="w-6 h-6 text-white" />
          )}
        </button>
      </div>
    </div>
  );
}