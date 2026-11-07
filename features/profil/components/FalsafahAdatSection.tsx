import { Quote } from "lucide-react";
import { falsafahData } from "../data/visiMisi";

export function FalsafahAdatSection() {
  return (
    <div className="bg-surface border border-border-soft rounded-2xl p-6 lg:p-8 shadow-xs">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
          <Quote className="w-7 h-7" />
        </div>
        <div className="flex-1">
          <div className="text-xs font-semibold text-amber-700 uppercase tracking-wider mb-1">
            {falsafahData.tag}
          </div>
          <h3 className="text-lg font-bold text-heading italic">
            {falsafahData.quote}
          </h3>
          <p className="text-xs sm:text-sm text-foreground mt-2 leading-relaxed">
            {falsafahData.deskripsi}
          </p>
        </div>
      </div>
    </div>
  );
}

