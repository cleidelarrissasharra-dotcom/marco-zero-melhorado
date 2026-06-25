import { Compass, Anchor, MapPin } from "lucide-react";

interface HeaderProps {
  currentView: "marco-zero" | "pontos-turisticos";
  setView: (view: "marco-zero" | "pontos-turisticos") => void;
}

export default function Header({ currentView, setView }: HeaderProps) {
  return (
    <header className="border-b border-[#ebdccd] bg-[#fbf9f4] sticky top-0 z-50 backdrop-blur-md bg-opacity-95">
      <div className="max-w-5xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo and Branding */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#d95d39] text-white flex items-center justify-center shadow-md shadow-[#d95d39]/10">
            <Compass className="w-5 h-5 animate-spin-slow" />
          </div>
          <div>
            <h1 className="font-serif text-xl sm:text-2xl font-bold text-[#1e3d59] tracking-tight flex items-center gap-2">
              Recife Antigo
              <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-[#1e3d59]/5 text-[#1e3d59]/80 font-normal">
                Pernambuco
              </span>
            </h1>
            <p className="text-xs font-sans text-stone-500 font-medium">Guia Cultural & Patrimônio Histórico</p>
          </div>
        </div>

        {/* View Switcher styled as luxury buttons/tabs */}
        <nav className="flex items-center gap-1 bg-[#f3eae1] p-1 rounded-xl border border-[#ebdccd]">
          <button
            id="tab-marco-zero"
            onClick={() => setView("marco-zero")}
            className={`px-4 py-2 text-xs font-sans font-semibold rounded-lg transition-all duration-300 flex items-center gap-2 ${
              currentView === "marco-zero"
                ? "bg-white text-[#d95d39] shadow-sm"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            <Anchor className="w-3.5 h-3.5" />
            Marco Zero
          </button>
          <button
            id="tab-pontos-turisticos"
            onClick={() => setView("pontos-turisticos")}
            className={`px-4 py-2 text-xs font-sans font-semibold rounded-lg transition-all duration-300 flex items-center gap-2 ${
              currentView === "pontos-turisticos"
                ? "bg-white text-[#d95d39] shadow-sm"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            <MapPin className="w-3.5 h-3.5" />
            Descobrir Mais
          </button>
        </nav>
      </div>
    </header>
  );
}
