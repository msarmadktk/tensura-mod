import { Footer } from "@/components/ui/footer";
import { Navigation } from "@/components/ui/navigation";


export default function VortexSpearGabirusArmor() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <main className="container-main py-16 flex flex-col items-center">
        <h1 className="text-5xl font-bold mb-4 text-yellow-600">Vortex Spear/Gabiru’s Armor</h1>
        <div className="w-full max-w-xl">
          <div className="flex justify-center mb-6">
            <img src="/vortex/v1.png" alt="Gabiru's Armor" className="w-64 h-64 object-contain" />
          </div>
          <h2 className="text-2xl font-bold text-sky-500 mb-2">Gabiru's Armor Stats</h2>
          <div className="mb-4 text-base">
            <div><span className="font-bold">Grades:</span> <span className="text-purple-500 font-bold">Unique</span> / <span className="text-yellow-500 font-bold">Legend</span> / <span className="text-red-500 font-bold">God</span></div>
            <div>Infusion: <span className="text-blue-700 font-bold">Water</span></div>
            <div className="mt-2 font-bold">Gabiru's Chestplate:</div>
            <div>Armor: <span className="text-blue-500 font-bold">9</span> / <span className="text-yellow-500 font-bold">11</span> / <span className="text-red-500 font-bold">14</span></div>
            <div>Armor Toughness: <span className="text-purple-500 font-bold">4</span> / <span className="text-yellow-500 font-bold">6</span> / <span className="text-red-500 font-bold">8</span></div>
            <div>Knockback Resistance: <span className="text-purple-500 font-bold">3</span> / <span className="text-yellow-500 font-bold">6</span> / <span className="text-red-500 font-bold">8</span></div>
            <div className="mt-2 font-bold">Gabiru's Leggings:</div>
            <div>Armor: <span className="text-blue-500 font-bold">7</span> / <span className="text-yellow-500 font-bold">9</span> / <span className="text-red-500 font-bold">12</span></div>
            <div>Armor Toughness: <span className="text-purple-500 font-bold">4</span> / <span className="text-yellow-500 font-bold">6</span> / <span className="text-red-500 font-bold">8</span></div>
            <div>Knockback Resistance: <span className="text-purple-500 font-bold">3</span> / <span className="text-yellow-500 font-bold">6</span> / <span className="text-red-500 font-bold">8</span></div>
          </div>
          <h2 className="text-2xl font-bold text-sky-500 mb-2">Abilities</h2>
          <div className="mb-4 text-base">
            <span className="font-bold">Water Infusion set bonus.</span>
          </div>
          <div className="flex justify-center mb-6">
            <img src="/vortex/v2.png" alt="Vortex Spear" className="w-48 h-48 object-contain" />
          </div>
          <h2 className="text-2xl font-bold text-sky-500 mb-2">Vortex Spear Stats</h2>
          <div className="mb-4 text-base">
            <div><span className="font-bold">Grades:</span> <span className="text-purple-500 font-bold">Unique</span> / <span className="text-yellow-500 font-bold">Legend</span> / <span className="text-red-500 font-bold">God</span></div>
            <div>Infusion: <span className="text-blue-700 font-bold">Water</span></div>
            <div>Attack Damage: <span className="text-blue-500 font-bold">37</span> / <span className="text-yellow-500 font-bold">59</span> / <span className="text-red-500 font-bold">85</span></div>
            <div>Attack Speed: 1.5</div>
            <div>Range: +2</div>
          </div>
          <h2 className="text-2xl font-bold text-sky-500 mb-2">Abilities</h2>
          <div className="mb-4 text-base">
            <span className="font-bold">Vortex Crash:</span> Long-range right-click wave. 225 × 2 Water Damage (bypasses armor) + 50 Physical Damage.
          </div>
          <div className="rounded-2xl overflow-hidden mb-8">
            <img src="/vortex/v3.png" alt="Vortex Spear In-game" className="w-full h-auto object-cover" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
