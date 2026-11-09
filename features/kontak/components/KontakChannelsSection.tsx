import { Phone, Mail, ArrowRight, ExternalLink } from "lucide-react";
import { directChannelsData } from "../data/kontakData";

export function KontakChannelsSection() {
  return (
    <div className="bg-white rounded-2xl shadow-xs border border-[var(--color-brand-border)] p-6 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Phone size={20} className="text-[var(--color-brand-primary)]" />
          <h2 className="text-base font-bold text-[var(--color-brand-heading)]">
            Kanal Komunikasi Langsung
          </h2>
        </div>
        <span className="text-xs text-[var(--color-brand-accent)] font-semibold bg-[var(--color-brand-surface)] border border-[var(--color-brand-border)] px-2.5 py-0.5 rounded-full">
          Respons Cepat
        </span>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {directChannelsData.map((channel, idx) => {
          const isWa = channel.type === "wa";
          const isPhone = channel.type === "phone";
          return (
            <a
              key={idx}
              href={channel.href}
              target={isWa ? "_blank" : undefined}
              rel={isWa ? "noopener noreferrer" : undefined}
              className="group flex items-center justify-between p-4 rounded-xl bg-[var(--color-brand-surface)] border border-[var(--color-brand-border)] hover:border-[var(--color-brand-primary)] hover:bg-white transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white text-[var(--color-brand-primary)] border border-[var(--color-brand-border)] flex items-center justify-center shrink-0 shadow-2xs group-hover:bg-[var(--color-brand-primary)] group-hover:text-white transition">
                  {channel.type === "email" ? <Mail size={18} /> : <Phone size={18} />}
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-[var(--color-brand-heading)] group-hover:text-[var(--color-brand-primary)] transition-colors">
                    {channel.title}
                  </span>
                  <span
                    className={`text-xs text-[var(--color-brand-body)]/80 ${
                      !isWa ? "font-mono" : ""
                    }`}
                  >
                    {channel.subtitle}
                  </span>
                </div>
              </div>
              {isWa ? (
                <ArrowRight
                  size={16}
                  className="text-slate-400 group-hover:text-[var(--color-brand-primary)] group-hover:translate-x-1 transition-all"
                />
              ) : (
                <ExternalLink
                  size={16}
                  className="text-slate-400 group-hover:text-[var(--color-brand-primary)] transition-all"
                />
              )}
            </a>
          );
        })}
      </div>
    </div>
  );
}

