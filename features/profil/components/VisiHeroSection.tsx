import { Compass, Target } from "lucide-react";
import { visiData } from "../data/visiMisi";

export function VisiHeroSection() {
  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-btn-blue text-xs font-semibold mb-3">
          <Compass className="w-3.5 h-3.5" />
          <span>{visiData.tag}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-heading tracking-tight">
          {visiData.title}
        </h1>
        <p className="text-sm sm:text-base text-foreground mt-2 max-w-3xl leading-relaxed">
          {visiData.subtitle}
        </p>
      </div>

      {/* Visi Card */}
      <div className="bg-gradient-to-br from-btn-blue to-blue-900 text-white rounded-3xl p-8 lg:p-12 shadow-md relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none" />
        <div className="max-w-3xl relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-semibold uppercase tracking-wider mb-4">
            <Target className="w-4 h-4 text-blue-200" />
            <span>Visi Pembangunan {visiData.periode}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-4">
            {visiData.visiQuote}
          </h2>
          <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
            {visiData.visiDescription}
          </p>
        </div>
      </div>
    </div>
  );
}
