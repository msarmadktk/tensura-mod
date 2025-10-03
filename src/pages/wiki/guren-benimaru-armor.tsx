import { Footer } from "@/components/ui/footer";
import { Navigation } from "@/components/ui/navigation";


export default function GurenBenimaruArmor() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <main className="container-main py-16 flex flex-col items-center">
        <h1 className="text-5xl font-bold mb-4 text-yellow-600">Guren/Benimaru’s Armor</h1>
        <div className="w-full max-w-xl">
          <div className="flex justify-center mb-6">
            <img src="/guren/g1.png" alt="Benimaru's Armor" className="w-64 h-64 object-contain" />
          </div>
          <h2 className="text-2xl font-bold text-sky-500 mb-2">Benimaru's Armor Stats</h2>
          <div className="mb-4 text-base">
            <div><span className="font-bold">Grades:</span> <span className="text-purple-500 font-bold">Unique</span> / <span className="text-yellow-500 font-bold">Legend</span> / <span className="text-red-500 font-bold">God</span></div>
            <div>Infusion: <span className="text-red-500 font-bold">Fire</span> (<span className="underline text-red-500">links to infusion page</span>)</div>
            <div className="mt-2 font-bold">Benimaru's Haori:</div>
            <div>Armor: <span className="text-blue-500 font-bold">10</span> / <span className="text-yellow-500 font-bold">12</span> / <span className="text-red-500 font-bold">15</span></div>
            <div>Armor Toughness: <span className="text-purple-500 font-bold">4</span> / <span className="text-yellow-500 font-bold">6</span> / <span className="text-red-500 font-bold">8</span></div>
            <div>Knockback Resistance: <span className="text-purple-500 font-bold">3</span> / <span className="text-yellow-500 font-bold">6</span> / <span className="text-red-500 font-bold">8</span></div>
            <div className="mt-2 font-bold">Benimaru's Hakama:</div>
            <div>Armor: <span className="text-blue-500 font-bold">8</span> / <span className="text-yellow-500 font-bold">10</span> / <span className="text-red-500 font-bold">13</span></div>
            <div>Armor Toughness: <span className="text-purple-500 font-bold">4</span> / <span className="text-yellow-500 font-bold">6</span> / <span className="text-red-500 font-bold">8</span></div>
            <div>Knockback Resistance: <span className="text-purple-500 font-bold">3</span> / <span className="text-yellow-500 font-bold">6</span> / <span className="text-red-500 font-bold">8</span></div>
          </div>
          <h2 className="text-2xl font-bold text-sky-500 mb-2">Abilities</h2>
          <div className="mb-4 text-base">
            <span className="font-bold">Flame Infusion set bonus.</span>
          </div>
          <div className="flex justify-center mb-6">
            <img src="/guren/g2.png" alt="Guren" className="w-48 h-48 object-contain" />
          </div>
          <h2 className="text-2xl font-bold text-sky-500 mb-2">Guren Stats</h2>
          <div className="mb-4 text-base">
            <div><span className="font-bold">Grades:</span> <span className="text-yellow-500 font-bold">Unique</span> / <span className="text-red-500 font-bold">Legend</span> / <span className="text-red-500 font-bold">God</span></div>
            <div>Infusion: <span className="text-red-500 font-bold">Fire</span> (<span className="underline text-red-500">links to infusion page</span>)</div>
            <div>Attack Damage: <span className="text-blue-500 font-bold">42</span> / <span className="text-yellow-500 font-bold">56</span> / <span className="text-red-500 font-bold">90</span></div>
            <div>Critical Chance: 20%</div>
            <div>Critical Multiplier: 0.5</div>
            <div>Attack Speed: 1.5</div>
            <div>Range: +2</div>
          </div>
          <h2 className="text-2xl font-bold text-sky-500 mb-2">Abilities</h2>
          <div className="mb-4 text-base">
            <span className="font-bold">Black Flame Slash:</span> 250 Physical + 250 Flame Damage. On hit: Locks enemy in place for 7 seconds.<br />
            <span className="font-bold">Black Flame Tornado:</span> AoE pull-in (7×7), deals 500 Black Flame Damage per instance (armor bypassing).
          </div>
          <div className="rounded-2xl overflow-hidden mt-[-20rem]">
            <img src="/guren/g3.png" alt="Guren In-game" className="w-full h-auto object-cover" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
