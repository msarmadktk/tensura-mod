import { Footer } from "@/components/ui/footer";
import { Navigation } from "@/components/ui/navigation";


export default function SerpentArmor() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <main className="container-main py-16 flex flex-col items-center">
        <h1 className="text-5xl font-bold mb-4 text-yellow-600">Serpent Armor</h1>
        <div className="w-full max-w-xl">
          <div className="flex justify-center mb-6">
            <img src="/serpentarmor/s1.png" alt="Serpent Armor" className="w-64 h-64 object-contain" />
          </div>
          <h2 className="text-2xl font-bold text-sky-500 mb-2">Serpent Armor Stats</h2>
          <div className="mb-4 text-base">
            <div><span className="font-bold">Grades:</span> <span className="text-purple-500 font-bold">Unique</span> / <span className="text-yellow-500 font-bold">Legend</span> / <span className="text-red-500 font-bold">God</span></div>
            <div>Infusion: None</div>
            <div className="mt-2 font-bold">Serpent Helmet:</div>
            <div>Armor: <span className="text-blue-500 font-bold">7</span> / <span className="text-yellow-500 font-bold">8</span> / <span className="text-red-500 font-bold">10</span></div>
            <div>Armor Toughness: <span className="text-blue-500 font-bold">4</span> / <span className="text-yellow-500 font-bold">5</span> / <span className="text-red-500 font-bold">8</span></div>
            <div>Knockback Resistance: <span className="text-blue-500 font-bold">3</span> / <span className="text-yellow-500 font-bold">5</span> / <span className="text-red-500 font-bold">8</span></div>
            <div className="mt-2 font-bold">Serpent Chestplate:</div>
            <div>Armor: <span className="text-blue-500 font-bold">13</span> / <span className="text-yellow-500 font-bold">14</span> / <span className="text-red-500 font-bold">15</span></div>
            <div>Armor Toughness: <span className="text-blue-500 font-bold">4</span> / <span className="text-yellow-500 font-bold">5</span> / <span className="text-red-500 font-bold">8</span></div>
            <div>Knockback Resistance: <span className="text-blue-500 font-bold">3</span> / <span className="text-yellow-500 font-bold">5</span> / <span className="text-red-500 font-bold">8</span></div>
            <div className="mt-2 font-bold">Serpent Leggings:</div>
            <div>Armor: <span className="text-blue-500 font-bold">11</span> / <span className="text-yellow-500 font-bold">12</span> / <span className="text-red-500 font-bold">13</span></div>
            <div>Armor Toughness: <span className="text-blue-500 font-bold">4</span> / <span className="text-yellow-500 font-bold">5</span> / <span className="text-red-500 font-bold">8</span></div>
            <div>Knockback Resistance: <span className="text-blue-500 font-bold">3</span> / <span className="text-yellow-500 font-bold">5</span> / <span className="text-red-500 font-bold">8</span></div>
            <div className="mt-2 font-bold">Serpent Boots:</div>
            <div>Armor: <span className="text-blue-500 font-bold">7</span> / <span className="text-yellow-500 font-bold">8</span> / <span className="text-red-500 font-bold">10</span></div>
            <div>Armor Toughness: <span className="text-blue-500 font-bold">4</span> / <span className="text-yellow-500 font-bold">5</span> / <span className="text-red-500 font-bold">8</span></div>
            <div>Knockback Resistance: <span className="text-blue-500 font-bold">3</span> / <span className="text-yellow-500 font-bold">5</span> / <span className="text-red-500 font-bold">8</span></div>
          </div>
          <h2 className="text-2xl font-bold text-sky-500 mb-2">Abilities</h2>
          <div className="mb-4 text-base">
            <span className="font-bold">Sturdy 2 when wearing full set.</span> Serpent Armor has extremely high corrosion resistance.
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-border mb-8">
            <img src="/serpentarmor/s2.png" alt="Serpent Armor In-game" className="w-full h-auto object-cover" />
          </div>
          <h2 className="text-2xl font-bold text-sky-500 mb-2">Where to Find</h2>

          <div className="mb-4 text-base">
            <a
              href="/wiki/floor-40-tempest-serpent-boss"
              className="font-bold text-violet-600 underline hover:text-violet-800 transition"
            >
              Tempest Serpent
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
