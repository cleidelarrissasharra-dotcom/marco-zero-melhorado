import { MapPin, Compass, Landmark, Ship, HelpCircle } from "lucide-react";

interface InteractiveMapProps {
  onSelectPoint?: (id: string) => void;
  activeId?: string;
}

export default function InteractiveMap({ onSelectPoint, activeId }: InteractiveMapProps) {
  const mapPoints = [
    {
      id: "marco-zero",
      name: "Marco Zero",
      x: "52%",
      y: "55%",
      icon: Compass,
      color: "bg-[#d95d39]"
    },
    {
      id: "rua-bom-jesus",
      name: "Rua do Bom Jesus",
      x: "48%",
      y: "32%",
      icon: Landmark,
      color: "bg-amber-500"
    },
    {
      id: "bonecos-gigantes",
      name: "Bonecos Gigantes",
      x: "55%",
      y: "25%",
      icon: HelpCircle,
      color: "bg-indigo-500"
    },
    {
      id: "parque-esculturas",
      name: "Parque das Esculturas",
      x: "82%",
      y: "65%",
      icon: Ship,
      color: "bg-teal-600"
    }
  ];

  return (
    <div className="bg-[#fcfaf5] border border-[#ebdccd] rounded-2xl p-6 shadow-sm">
      <div className="mb-4">
        <h3 className="font-serif text-lg font-bold text-[#1e3d59] flex items-center gap-2">
          <MapPin className="w-4 h-4 text-[#d95d39]" />
          Mapa Esquemático do Recife Antigo
        </h3>
        <p className="text-xs text-stone-500 font-sans">
          Clique nos pontos de interesse para entender a proximidade espacial na ilha
        </p>
      </div>

      {/* Map Graphic Container */}
      <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-[#ebdccd]/80 bg-sky-50 shadow-inner flex items-center justify-center select-none">
        
        {/* River Capibaribe Left (capibaribe river flow) */}
        <div className="absolute top-0 bottom-0 left-0 w-[20%] bg-sky-200 opacity-60 flex items-center justify-center">
          <span className="text-[10px] font-mono tracking-widest text-sky-800 rotate-90 uppercase">
            Rio Capibaribe
          </span>
        </div>

        {/* River Beberibe Top Left */}
        <div className="absolute top-0 left-[20%] w-[35%] h-[15%] bg-sky-200 opacity-60 border-b border-sky-300">
          <span className="absolute bottom-1 right-2 text-[8px] font-mono text-sky-700 uppercase">
            Rio Beberibe
          </span>
        </div>

        {/* Atlantic Ocean Right */}
        <div className="absolute top-0 bottom-0 right-0 w-[15%] bg-[#1e3d59]/10 border-l border-sky-300 flex items-center justify-center">
          <span className="text-[10px] font-mono tracking-widest text-[#1e3d59]/80 -rotate-90 uppercase font-semibold">
            Oceano Atlântico
          </span>
        </div>

        {/* Reef Barrier (Recifes) */}
        <div className="absolute top-[30%] bottom-[10%] right-[14%] w-[3%] bg-stone-400/90 rounded-full border border-stone-500 flex items-center justify-center">
          <span className="text-[8px] font-mono text-stone-800 -rotate-90 whitespace-nowrap">
            Barreira de Recifes
          </span>
        </div>

        {/* Bridge Indicator (Ponte Maurício de Nassau) */}
        <div className="absolute left-[19%] top-[40%] w-[8%] h-2 bg-amber-700/40 border border-amber-800/30 flex items-center justify-center">
          <span className="text-[6px] font-mono text-amber-900 absolute -top-4 whitespace-nowrap">
            Ponte M. Nassau
          </span>
        </div>

        {/* Bridge Indicator (Ponte Buarque de Macedo) */}
        <div className="absolute left-[19%] top-[25%] w-[8%] h-2 bg-amber-700/40 border border-amber-800/30 flex items-center justify-center">
          <span className="text-[6px] font-mono text-amber-900 absolute -top-4 whitespace-nowrap">
            Ponte B. Macedo
          </span>
        </div>

        {/* Island Body - Recife Antigo */}
        <div className="absolute inset-y-[12%] left-[24%] right-[16%] bg-[#faf6f0] border-x border-[#ebdccd] shadow-md rounded-lg flex items-center justify-center">
          <span className="text-[11px] font-serif font-bold text-stone-300 tracking-wider uppercase">
            Ilha do Recife Antigo
          </span>
        </div>

        {/* Map Points */}
        {mapPoints.map((point) => {
          const IconComponent = point.icon;
          const isActive = activeId === point.id;

          return (
            <button
              key={point.id}
              onClick={() => onSelectPoint?.(point.id)}
              style={{ left: point.x, top: point.y }}
              className={`absolute -translate-x-1/2 -translate-y-1/2 group flex flex-col items-center z-20 cursor-pointer focus:outline-none`}
            >
              <div
                className={`p-2 rounded-full text-white shadow-md transition-all duration-300 ${point.color} ${
                  isActive 
                    ? "scale-125 ring-4 ring-offset-2 ring-[#d95d39]/40" 
                    : "hover:scale-110"
                }`}
              >
                <IconComponent className="w-3.5 h-3.5" />
              </div>
              <div className="mt-1 bg-stone-900/90 text-[10px] text-white px-2 py-0.5 rounded shadow-sm opacity-90 group-hover:opacity-100 transition-opacity whitespace-nowrap font-sans font-semibold">
                {point.name}
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 items-center justify-center text-xs text-stone-500 font-sans">
        <span className="flex items-center gap-1">
          <span className="w-2.5 h-2.5 rounded-full bg-[#d95d39]" /> Marco Zero
        </span>
        <span className="flex items-center gap-1">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500" /> Rua do Bom Jesus
        </span>
        <span className="flex items-center gap-1">
          <span className="w-2.5 h-2.5 rounded-full bg-indigo-500" /> Bonecos Gigantes
        </span>
        <span className="flex items-center gap-1">
          <span className="w-2.5 h-2.5 rounded-full bg-teal-600" /> Parque das Esculturas
        </span>
      </div>
    </div>
  );
}
