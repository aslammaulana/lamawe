import { BookOpen } from "lucide-react";
import { ppidCategoriesData } from "../../data/ppid";

export function PpidInfoCategorySection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {ppidCategoriesData.map((info, idx) => (
        <div
          key={idx}
          className="bg-surface border border-border-soft rounded-2xl p-6 shadow-xs flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-2 mb-3">
              <BookOpen className="w-5 h-5 text-accent-blue" />
              <h3 className="text-base font-bold text-heading">
                {info.kategori}
              </h3>
            </div>
            <ul className="space-y-2.5 text-xs text-foreground">
              {info.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-blue shrink-0 mt-1.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
