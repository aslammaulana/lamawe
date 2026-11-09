import { Scale } from "lucide-react";

export function LayananSyariatNotice() {
  return (
    <div className="bg-amber-50/60 border border-amber-200 rounded-2xl p-6 flex items-start gap-4">
      <Scale className="w-6 h-6 text-amber-700 shrink-0 mt-0.5" />
      <div className="text-xs text-amber-900 leading-relaxed">
        <strong className="block font-bold text-sm mb-1 text-amber-950">
          Kepatuhan Adat & Syariat Gampong Lam Awe
        </strong>
        Sesuai Qanun Aceh dan kearifan lokal Gampong Lam Awe, seluruh dokumen yang diterbitkan wajib berlandaskan data yang benar, bebas manipulasi informasi, dan digunakan untuk kemaslahatan serta kepatuhan hukum syariat Islam.
      </div>
    </div>
  );
}

