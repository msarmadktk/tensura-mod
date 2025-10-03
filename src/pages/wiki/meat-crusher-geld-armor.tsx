import { Footer } from "@/components/ui/footer";
import { Navigation } from "@/components/ui/navigation";


export default function MeatCrusherGeldArmor() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <main className="container-main py-16 flex flex-col items-center">
        <h1 className="text-5xl font-bold mb-4 text-yellow-600">Meat Crusher/Geld’s Armor</h1>
        <div className="w-full max-w-xl">
          <div className="flex justify-center mb-6">
            <img src="/meatcrusher/m1.png" alt="Geld's Armor" className="w-64 h-64 object-contain" />
          </div>
          <h2 className="text-2xl font-bold text-sky-500 mb-2">Geld's Armor Stats</h2>
          <div className="mb-4 text-base">
            <div><span className="font-bold">Grades:</span> <span className="text-purple-500 font-bold">Unique</span> / <span className="text-yellow-500 font-bold">Legend</span> / <span className="text-red-500 font-bold">God</span></div>
            <div>Infusion: <span className="text-green-700 font-bold">Earth</span></div>
            <div className="mt-2 font-bold">Geld's Helmet:</div>
            <div>Armor: <span className="text-blue-500 font-bold">9</span> / <span className="text-yellow-500 font-bold">10</span> / <span className="text-red-500 font-bold">12</span></div>
            <div>Armor Toughness: <span className="text-purple-500 font-bold">7</span> / <span className="text-yellow-500 font-bold">8</span> / <span className="text-red-500 font-bold">10</span></div>
            <div>Knockback Resistance: <span className="text-purple-500 font-bold">6</span> / <span className="text-yellow-500 font-bold">8</span> / <span className="text-red-500 font-bold">10</span></div>
            <div className="mt-2 font-bold">Geld's Chestplate:</div>
            <div>Armor: <span className="text-blue-500 font-bold">13</span> / <span className="text-yellow-500 font-bold">15</span> / <span className="text-red-500 font-bold">17</span></div>
            <div>Armor Toughness: <span className="text-purple-500 font-bold">7</span> / <span className="text-yellow-500 font-bold">8</span> / <span className="text-red-500 font-bold">10</span></div>
            <div>Knockback Resistance: <span className="text-purple-500 font-bold">6</span> / <span className="text-yellow-500 font-bold">8</span> / <span className="text-red-500 font-bold">10</span></div>
            <div className="mt-2 font-bold">Geld's Leggings:</div>
            <div>Armor: <span className="text-blue-500 font-bold">13</span> / <span className="text-yellow-500 font-bold">15</span> / <span className="text-red-500 font-bold">17</span></div>
            <div>Armor Toughness: <span className="text-purple-500 font-bold">7</span> / <span className="text-yellow-500 font-bold">8</span> / <span className="text-red-500 font-bold">10</span></div>
            <div>Knockback Resistance: <span className="text-purple-500 font-bold">6</span> / <span className="text-yellow-500 font-bold">8</span> / <span className="text-red-500 font-bold">10</span></div>
            <div className="mt-2 font-bold">Geld's Boots:</div>
            <div>Armor: <span className="text-blue-500 font-bold">10</span> / <span className="text-yellow-500 font-bold">12</span></div>
            <div>Armor Toughness: <span className="text-purple-500 font-bold">7</span> / <span className="text-yellow-500 font-bold">8</span> / <span className="text-red-500 font-bold">10</span></div>
            <div>Knockback Resistance: <span className="text-purple-500 font-bold">6</span> / <span className="text-yellow-500 font-bold">8</span> / <span className="text-red-500 font-bold">10</span></div>
          </div>
          <h2 className="text-2xl font-bold text-sky-500 mb-2">Abilities</h2>
          <div className="mb-4 text-base">
            <span className="font-bold">Earth Infusion set bonus.</span>
          </div>
          <div className="flex justify-center mb-6">
            <img src="/meatcrusher/m2.png" alt="Meat Cleaver" className="w-48 h-48 object-contain" />
          </div>
          <h2 className="text-2xl font-bold text-sky-500 mb-2">Meat Cleaver Stats</h2>
          <div className="mb-4 text-base">
            <div><span className="font-bold">Grades:</span> <span className="text-purple-500 font-bold">Unique</span> / <span className="text-yellow-500 font-bold">Legend</span> / <span className="text-red-500 font-bold">God</span></div>
            <div>Infusion:</div>
            <div>Attack Damage: <span className="text-blue-500 font-bold">38</span> / <span className="text-yellow-500 font-bold">55</span> / <span className="text-red-500 font-bold">81</span></div>
            <div>Attack Speed: 1</div>
            <div>Range: +2</div>
          </div>
          <h2 className="text-2xl font-bold text-sky-500 mb-2">Abilities</h2>
          <div className="mb-4 text-base">
            <span className="font-bold">Chaos Eater Summon:</span> Right-click to summon 4 entities. 50 Physical + 50 Spiritual Corrosion Damage.<br />
            <span className="font-bold">Effects:</span> Inflicts Rot (DoT), Burden III. +1 Insanity per 200 Spiritual Corrosion Damage taken.
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-border mb-8">
            <img src="/meatcrusher/m3.png" alt="Meat Cleaver In-game" className="w-full h-auto object-cover" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
