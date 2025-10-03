import { Footer } from "@/components/ui/footer";
import { Navigation } from "@/components/ui/navigation";


export default function CentipedeDagger() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <main className="container-main py-16 flex flex-col items-center">
        <h1 className="text-5xl font-bold mb-4 text-yellow-600">Centipede Dagger</h1>
        <div className="w-full max-w-xl">
          <div className="flex justify-center mb-6">
            <img src="/centipededagger/c1.png" alt="Centipede Dagger" className="w-64 h-64 object-contain" />
          </div>
          <h2 className="text-2xl font-bold text-sky-500 mb-2">Stats</h2>
          <div className="mb-4 text-base">
            <div><span className="font-bold">Grades:</span> <span className="text-gray-700">Special</span> / <span className="text-blue-500 font-bold">Rare</span> / <span className="text-purple-500 font-bold">Unique</span> / <span className="text-yellow-500 font-bold">Legend</span></div>
            <div>Infusion: None</div>
            <div>Attack Damage: <span className="text-gray-700">13</span> / <span className="text-blue-500 font-bold">24</span> / <span className="text-purple-500 font-bold">36</span> / <span className="text-yellow-500 font-bold">58</span></div>
            <div>Attack Speed: 2</div>
            <div>Critical Chance: 20%</div>
            <div>Range: -0.75</div>
          </div>
          <h2 className="text-2xl font-bold text-sky-500 mb-2">Abilities</h2>
          <div className="mb-4 text-base">
            <span className="font-bold">Paralysis on hit, stacking with consecutive strikes.</span> After maximum paralysis level is reached a short cooldown is started.
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-border mb-8">
            <img src="/centipededagger/c2.png" alt="Centipede Dagger In-game" className="w-full h-auto object-cover" />
          </div>
          <h2 className="text-2xl font-bold text-sky-500 mb-2">Where to Find</h2>
          <div className="mb-4 text-base">
            <a
              href="/wiki/floor-20-evil-centipede-boss"
              className="font-bold text-violet-600 underline hover:text-violet-800 transition"
            >
              Evil Centipede Boss
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
