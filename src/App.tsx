import { useState } from "react";
import Header from "./components/Header";
import MarcoZeroView from "./components/MarcoZeroView";
import PontosTuristicosView from "./components/PontosTuristicosView";
import TriviaSection from "./components/TriviaSection";
import { Compass, Ship, Landmark, Info } from "lucide-react";
import { AnimatePresence } from "motion/react";

export default function App() {
  const [currentView, setView] = useState<"marco-zero" | "pontos-turisticos">("marco-zero");

  // Handle map point selection - seamlessly transitions views and sets appropriate states
  const handleSelectMapPoint = (id: string) => {
    if (id === "marco-zero") {
      setView("marco-zero");
      // Scroll to top of page
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setView("pontos-turisticos");
      // Give a tiny timeout for transition, then scroll and expand card
      setTimeout(() => {
        const btn = document.getElementById(`btn-expand-${id}`);
        if (btn) {
          btn.click();
          btn.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 100);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fdfbf7] text-stone-800 font-sans selection:bg-[#d95d39]/10 selection:text-[#d95d39]">
      {/* Decorative Top Accent Bar */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#1e3d59] via-[#d95d39] to-amber-500" />

      {/* Brand Header */}
      <Header currentView={currentView} setView={setView} />

      {/* Main Container */}
      <main className="flex-grow max-w-4xl w-full mx-auto px-4 py-8 flex flex-col gap-12 pb-20">
        
        {/* Cultural Welcome Hero Badge */}
        <section className="flex flex-col items-center text-center gap-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center justify-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-100 text-[10px] font-mono text-[#d95d39] font-bold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5 animate-spin-slow text-[#d95d39]" />
            Patrimônio Imaterial de Pernambuco
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#1e3d59] tracking-tight">
            Descubra as Relíquias de <br />
            <span className="text-[#d95d39]">Recife Antigo</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-stone-600 leading-relaxed max-w-lg mx-auto">
            Explore a primeira sinagoga das Américas, a praça monumental do Marco Zero e o colorido carnaval dos Bonecos Gigantes na charmosa ilha histórica do Recife.
          </p>
        </section>

        {/* Dynamic State-driven View with AnimatePresence */}
        <section id="main-content-area" className="relative">
          <AnimatePresence mode="wait">
            {currentView === "marco-zero" ? (
              <div key="marco-zero">
                <MarcoZeroView
                  onDiscoverMore={() => setView("pontos-turisticos")}
                  onSelectMapPoint={handleSelectMapPoint}
                />
              </div>
            ) : (
              <div key="pontos-turisticos">
                <PontosTuristicosView
                  onBackToMarcoZero={() => setView("marco-zero")}
                  onSelectMapPoint={handleSelectMapPoint}
                />
              </div>
            )}
          </AnimatePresence>
        </section>

        {/* Trivia Challenge Section - Promotes high interaction */}
        <section id="trivia-challenge" className="pt-4">
          <TriviaSection />
        </section>

        {/* Culture & Information Tips */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-[#1e3d59]/5 border border-[#1e3d59]/10 flex gap-4 items-start">
            <div className="p-2 bg-[#1e3d59]/10 rounded-lg text-[#1e3d59] flex-shrink-0">
              <Landmark className="w-5 h-5" />
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="font-serif font-bold text-[#1e3d59] text-sm">Visitação Museológica</h4>
              <p className="text-xs font-sans text-stone-600 leading-relaxed">
                A Sinagoga Kahal Zur Israel na Rua do Bom Jesus está aberta para visitas guiadas de terça a domingo. Recomendamos conferir o acervo histórico de arqueologia do século XVII.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-amber-500/5 border border-amber-500/10 flex gap-4 items-start">
            <div className="p-2 bg-amber-500/10 rounded-lg text-amber-600 flex-shrink-0">
              <Ship className="w-5 h-5" />
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="font-serif font-bold text-stone-800 text-sm">Travessia para o Parque das Esculturas</h4>
              <p className="text-xs font-sans text-stone-600 leading-relaxed">
                Pequenos barcos tradicionais fazem a travessia de ida e volta do Marco Zero ao dique do Parque de Brennand por um valor acessível. Uma travessia clássica e poética.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Cultural Footer */}
      <footer className="border-t border-[#ebdccd] bg-[#fbf9f4] py-8 flex flex-col items-center justify-center gap-2 text-center text-xs text-stone-500 font-sans mt-auto">
        <p className="font-serif italic text-stone-600">
          "Recife, cidade lendária, banhada pelo sol e abraçada pelos rios."
        </p>
        <p className="font-sans text-[10px] uppercase tracking-wider text-stone-400">
          © {new Date().getFullYear()} Guia Histórico do Recife Antigo • Desenvolvido com carinho e respeito cultural
        </p>
      </footer>
    </div>
  );
}
