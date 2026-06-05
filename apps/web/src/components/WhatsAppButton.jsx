
import React from 'react';
import { MessageCircle } from 'lucide-react';

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/918421270360"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-primary hover:bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,168,107,0.4)] hover:shadow-[0_0_30px_rgba(0,168,107,0.6)] transition-all duration-300 hover:scale-110 group"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle className="w-8 h-8 group-hover:scale-110 transition-transform" />
    </a>
  );
}

export default WhatsAppButton;
