import { ShieldCheck } from "lucide-react";
import { ppidHeroData } from "../../data/ppid";

export function PpidHeroSection() {
  return (
    <div>
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-btn-blue text-xs font-semibold mb-3">
        <ShieldCheck className="w-3.5 h-3.5" />
        <span>{ppidHeroData.tag}</span>
      </div>
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-heading tracking-tight">
        {ppidHeroData.title}
      </h1>
      <p className="text-sm sm:text-base text-foreground mt-2 max-w-3xl leading-relaxed">
        {ppidHeroData.subtitle}
      </p>
    </div>
  );
}

