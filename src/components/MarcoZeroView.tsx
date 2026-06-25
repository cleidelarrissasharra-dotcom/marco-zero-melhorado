import { MARCO_ZERO } from "../data";
import { Compass, Sparkles, MapPin, Calendar, Clock, ArrowRight, Anchor } from "lucide-react";
import { motion } from "motion/react";
import InteractiveMap from "./InteractiveMap";

interface MarcoZeroViewProps {
  onDiscoverMore: () => void;
  onSelectMapPoint: (id: string) => void;
}

export default function MarcoZeroView({ onDiscoverMore, onSelectMapPoint }: MarcoZeroViewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4 }}
      className="space-y-8"
    >
      {/* Editorial Card Hero */}
      <div className="bg-white border border-[#ebdccd] rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
        
        {/* Hero Image Section */}
        <div className="relative h-[250px] sm:h-[400px] w-full overflow-hidden">
          <img
            src={MARCO_ZERO.image}
            alt={MARCO_ZERO.title}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end">
            <div className="p-6 sm:p-8 text-white w-full">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#d95d39] text-[10px] font-mono font-bold tracking-wider uppercase mb-3">
                <Anchor className="w-3 h-3" /> Ponto de Partida
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-extrabold tracking-tight drop-shadow-sm mb-2">
                {MARCO_ZERO.title}
              </h2>
              <p className="font-sans text-stone-200 text-sm sm:text-base max-w-2xl font-light">
                {MARCO_ZERO.subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex flex-col md:flex-row gap-6 md:items-start justify-between border-b border-[#f3eae1] pb-6">
            <div className="space-y-3 max-w-xl">
              <p className="font-serif text-lg sm:text-xl font-semibold text-[#1e3d59] leading-relaxed">
                {MARCO_ZERO.description}
              </p>
              <p className="font-sans text-stone-600 text-sm sm:text-base leading-relaxed">
                {MARCO_ZERO.longDescription}
              </p>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-4 w-full md:w-auto md:min-w-[240px] bg-[#fbf9f4] p-4 rounded-2xl border border-[#ebdccd]">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-[#d95d39] uppercase tracking-wider block">Localização</span>
                <span className="text-xs font-sans font-bold text-stone-800 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-stone-500" />
                  Bairro do Recife
                </span>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-[#d95d39] uppercase tracking-wider block">Período</span>
                <span className="text-xs font-sans font-bold text-stone-800 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-stone-500" />
                  Fundada em 1938
                </span>
              </div>
              <div className="col-span-2 border-t border-[#ebdccd] pt-2 mt-1 space-y-1">
                <span className="text-[10px] font-mono text-[#d95d39] uppercase tracking-wider block">Destaque</span>
                <span className="text-xs font-sans font-semibold text-stone-800 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  Painel de Cícero Dias
                </span>
              </div>
            </div>
          </div>

          {/* Interesting Facts list */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-bold text-[#1e3d59] flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-500" />
              Curiosidades e Relíquias do Local
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {MARCO_ZERO.facts.map((fact, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-amber-50/50 border border-amber-100 flex flex-col justify-between"
                >
                  <p className="text-xs font-sans text-stone-700 leading-relaxed mb-3">
                    {fact}
                  </p>
                  <span className="text-[10px] font-mono text-[#d95d39] font-bold">
                    #CURIOSIDADE 0{index + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Discover More CTA Button */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#f3eae1]">
            <div className="text-xs text-stone-500 font-sans max-w-md">
              A história pernambucana vai muito além do Marco Zero. Descubra os segredos da Rua do Bom Jesus e da Embaixada dos Bonecos Gigantes.
            </div>
            <button
              id="btn-discover-more"
              onClick={onDiscoverMore}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#d95d39] text-white text-sm font-sans font-bold hover:bg-[#c24e2e] active:scale-95 transition-all duration-200 shadow-lg shadow-[#d95d39]/15 group"
            >
              Descobrir Mais Pontos Turísticos
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Embedded Schematic Map */}
      <InteractiveMap activeId="marco-zero" onSelectPoint={onSelectMapPoint} />
    </motion.div>
  );
}
