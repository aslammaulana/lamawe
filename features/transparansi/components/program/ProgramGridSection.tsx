import { MapPin, Calendar } from "lucide-react";
import { programsData } from "../../data/program";

export function ProgramGridSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {programsData.map((prog) => (
        <div
          key={prog.id}
          className="bg-surface border border-border-soft rounded-2xl p-6 shadow-xs flex flex-col justify-between hover:border-btn-blue transition-all"
        >
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="px-2.5 py-1 rounded-full bg-blue-50 text-btn-blue text-xs font-semibold">
                {prog.bidang}
              </span>
              <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold">
                {prog.status}
              </span>
            </div>

            <h2 className="text-lg font-bold text-heading mb-2">
              {prog.title}
            </h2>
            <p className="text-xs sm:text-sm text-foreground leading-relaxed mb-4">
              {prog.deskripsi}
            </p>

            <div className="grid grid-cols-2 gap-3 py-3 border-y border-border-soft text-xs mb-4">
              <div>
                <span className="text-foreground/80 block">Lokasi:</span>
                <span className="font-semibold text-heading flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-accent-blue" /> {prog.jurong}
                </span>
              </div>
              <div>
                <span className="text-foreground/80 block">Jadwal Pelaksanaan:</span>
                <span className="font-semibold text-heading flex items-center gap-1 mt-0.5">
                  <Calendar className="w-3.5 h-3.5 text-accent-blue" /> {prog.jadwal}
                </span>
              </div>
              <div>
                <span className="text-foreground/80 block">Alokasi Anggaran:</span>
                <span className="font-bold text-btn-blue font-mono mt-0.5 block">
                  {prog.anggaran}
                </span>
              </div>
              <div>
                <span className="text-foreground/80 block">Sumber Dana:</span>
                <span className="font-semibold text-heading mt-0.5 block">
                  {prog.sumber}
                </span>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between text-xs mb-1.5 font-semibold">
              <span className="text-foreground/80">Progres Fisik</span>
              <span className="text-btn-blue font-mono">{prog.progress}%</span>
            </div>
            <div className="w-full h-2.5 rounded-full bg-slate-100 overflow-hidden">
              <div
                className="h-full bg-btn-blue rounded-full transition-all duration-500"
                style={{ width: `${prog.progress}%` }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
