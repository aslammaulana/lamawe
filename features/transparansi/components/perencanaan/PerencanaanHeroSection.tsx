import { Compass } from "lucide-react";
import { perencanaanHeroData } from "../../data/perencanaan";

export function PerencanaanHeroSection() {
  return (
    <div>
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-btn-blue text-xs font-semibold mb-3">
        <Compass className="w-3.5 h-3.5" />
        <span>{perencanaanHeroData.tag}</span>
      </div>
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-heading tracking-tight">
        {perencanaanHeroData.title}
      </h1>
      <p className="text-sm sm:text-base text-foreground mt-2 max-w-3xl leading-relaxed">
        {perencanaanHeroData.subtitle}
      </p>
    </div>
  );
}
