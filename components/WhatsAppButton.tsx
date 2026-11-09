"use client";

import { MessageCircle } from "lucide-react";

// Ganti nomor WhatsApp dan teks pesan sesuai kontak resmi desa
const WA_NUMBER = "628123456789";
const WA_MESSAGE = encodeURIComponent(
  "Halo, saya ingin bertanya mengenai layanan dan informasi Desa Lam Awe."
);

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hubungi WhatsApp Desa"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-btn-blue hover:bg-btn-blue-hover text-white px-4 py-2.5 rounded-full shadow-[0_8px_20px_rgba(23,105,194,0.3)] transition-all hover:scale-105 active:scale-95 text-xs font-semibold"
    >
      <MessageCircle size={18} />
      <span>Hubungi WhatsApp Desa</span>
    </a>
  );
}
