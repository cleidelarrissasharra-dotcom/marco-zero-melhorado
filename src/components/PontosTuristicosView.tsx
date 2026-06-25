import { useState } from "react";
import { PONTOS_TURISTICOS } from "../data";
import { ArrowLeft, MapPin, Calendar, Compass, Star, Sparkles, BookOpen, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import InteractiveMap from "./InteractiveMap";

interface PontosTuristicosViewProps {
  onBackToMarcoZero: () => void;
  onSelectMapPoint: (id: string) => void;
}

export default function PontosTuristicosView({ onBackToMarcoZero, onSelectMapPoint }: PontosTuristicosViewProps) {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedCard((prev) => (prev === id ? null : id));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4 }}
      className="space-y-8"
    >
      {/* Return Navigation Link */}
      <div className="flex items-center justify-between">
        <button
          id="btn-back-marco"
          onClick={onBackToMarcoZero}
          className="inline-flex items-center gap-2 text-sm font-sans font-bold text-[#1e3d59] hover:text-[#d95d39] transition-colors group cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Voltar para o Marco Zero
        </button>
        <span className="text-xs font-mono text-stone-500 font-semibold uppercase tracking-wider">
          Explorando o Recife Antigo
        </span>
      </div>

      {/* Header section of the page */}
      <div className="border-l-4 border-[#d95d39] pl-4 py-1">
        <h2 className="font-serif text-2xl sm:text-4xl font-extrabold text-[#1e3d59] tracking-tight">
          Além do Marco Zero
        </h2>
        <p className="font-sans text-stone-600 text-xs sm:text-sm mt-1 max-w-2xl">
          As calçadas históricas escondem relíquias da nossa cultura. Conheça dois pontos imperdíveis que contam a riqueza de Pernambuco:
        </p>
      </div>

      {/* Point of Interest Cards */}
      <div className="space-y-8">
        {PONTOS_TURISTICOS.map((point) => {
          const isExpanded = expandedCard === point.id;

          return (
            <article
              key={point.id}
              className="bg-white border border-[#ebdccd] rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row">
                
                {/* Visual Image Banner with dynamic badges */}
                <div className="relative h-[220px] lg:h-auto lg:w-[40%] overflow-hidden flex-shrink-0">
                  <img
                    src={point.image}
                    alt={point.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Historical Era Tag */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full border border-[#ebdccd]/40 text-[10px] font-mono text-[#d95d39] font-bold shadow-sm">
                    {point.historicalPeriod}
                  </div>
                </div>

                {/* Content Panel */}
                <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {point.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-md bg-[#fbf9f4] border border-[#ebdccd]/40 text-[10px] font-sans font-semibold text-stone-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1e3d59]">
                      {point.title}
                    </h3>
                    
                    <p className="font-sans text-[#d95d39] text-xs font-semibold flex items-center gap-1">
                      <Star className="w-3 h-3 fill-current" />
                      {point.subtitle}
                    </p>

                    <p className="font-sans text-stone-700 text-sm sm:text-base leading-relaxed pt-2">
                      {point.description}
                    </p>
                  </div>

                  {/* Interactive Details Toggle */}
                  <div className="border-t border-[#f3eae1] pt-4">
                    <button
                      id={`btn-expand-${point.id}`}
                      onClick={() => toggleExpand(point.id)}
                      className="inline-flex items-center gap-1.5 text-xs font-sans font-bold text-[#1e3d59] hover:text-[#d95d39] transition-colors cursor-pointer"
                    >
                      {isExpanded ? (
                        <>
                          <ChevronUp className="w-3.5 h-3.5" />
                          Ocultar Relíquias e Detalhes
                        </>
                      ) : (
                        <>
                          <ChevronDown className="w-3.5 h-3.5" />
                          Ver Relíquias e Fatos Históricos
                        </>
                      )}
                    </button>

                    {/* Expandable Section */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden mt-3 space-y-4"
                        >
                          <div className="p-4 rounded-xl bg-[#fbf9f4] border border-[#ebdccd]/80 space-y-3">
                            <h4 className="text-xs font-mono text-[#d95d39] font-bold uppercase tracking-wider flex items-center gap-1">
                              <BookOpen className="w-3.5 h-3.5" />
                              História & Contexto
                            </h4>
                            <p className="text-xs font-sans text-stone-600 leading-relaxed">
                              {point.longDescription}
                            </p>
                          </div>

                          <div className="space-y-2">
                            <h4 className="text-xs font-mono text-[#1e3d59] font-bold uppercase tracking-wider flex items-center gap-1">
                              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                              Fatos Rápidos
                            </h4>
                            <ul className="space-y-1.5 pl-1">
                              {point.facts.map((fact, index) => (
                                <li key={index} className="text-xs font-sans text-stone-600 flex items-start gap-2 leading-relaxed">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#d95d39] mt-1.5 flex-shrink-0" />
                                  <span>{fact}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Location details */}
                          <div className="text-[11px] font-mono text-stone-500 bg-stone-100/60 p-2.5 rounded-lg flex items-center gap-2 border border-stone-200">
                            <MapPin className="w-3.5 h-3.5 text-[#d95d39] flex-shrink-0" />
                            <span><strong>Como Encontrar:</strong> {point.location}</span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

              </div>
            </article>
          );
        })}
      </div>

      {/* Embedded Map Section */}
      <InteractiveMap activeId={expandedCard || "rua-bom-jesus"} onSelectPoint={onSelectMapPoint} />
    </motion.div>
  );
}
