import { Footer } from "@/components/ui/footer";
import { Navigation } from "@/components/ui/navigation";


export default function OgreSet() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <main className="container-main py-16 flex flex-col items-center">
        <h1 className="text-5xl font-bold mb-4 text-yellow-600">Ogre Set</h1>
        <div className="w-full max-w-xl">
          <div className="flex justify-center mb-6">
            <img src="/orgeset/o1.png" alt="Ogre Axe" className="w-64 h-64 object-contain" />
          </div>
          <h2 className="text-2xl font-bold text-sky-500 mb-2">Ogre Axe Stats</h2>
          <div className="mb-4 text-base">
            <div><span className="font-bold">Grades:</span> <span className="text-blue-500 font-bold">Rare</span> / <span className="text-purple-500 font-bold">Unique</span> / <span className="text-yellow-500 font-bold">Legend</span> / <span className="text-red-500 font-bold">God</span></div>
            <div>Infusion: <span className="text-red-500 font-bold">Fire</span> (<span className="underline text-red-500">link to infusion page</span>)</div>
            <div>Attack Damage: <span className="text-blue-500 font-bold">26</span> / <span className="text-purple-500 font-bold">40</span> / <span className="text-yellow-500 font-bold">57</span> / <span className="text-red-500 font-bold">87</span></div>
            <div>Attack Speed: 0.4</div>
            <div>Critical Chance: 20%</div>
          </div>
          <h2 className="text-2xl font-bold text-sky-500 mb-2">Abilities</h2>
          <div className="mb-4 text-base">
            Strength V when wearing full Ogre set.<br />Shield Mode: Right-click to function as a shield
          </div>
          <div className="flex justify-center mb-6">
            <img src="/orgeset/o2.png" alt="Ogre Armor" className="w-48 h-48 object-contain" />
          </div>
          <h2 className="text-2xl font-bold text-sky-500 mb-2">Ogre Armor Stats</h2>
          <div className="mb-4 text-base">
            <div><span className="font-bold">Grades:</span> <span className="text-gray-700">Special</span> / <span className="text-blue-500 font-bold">Rare</span> / <span className="text-purple-500 font-bold">Unique</span> / <span className="text-yellow-500 font-bold">Legend</span></div>
            <div>Infusion: <span className="text-red-500 font-bold">Fire</span> (<span className="underline text-red-500">link to infusion page</span>)</div>
            <div className="mt-2 font-bold">Ogre Chestplate:</div>
            <div>Armor: 6 / <span className="text-blue-500 font-bold">9</span> / <span className="text-yellow-500 font-bold">14</span></div>
            <div>Armor Toughness: 1.2 / <span className="text-blue-500 font-bold">4</span> / <span className="text-yellow-500 font-bold">7.5</span></div>
            <div>Knockback Resistance: 2 / 3 / 4 / 8</div>
            <div className="mt-2 font-bold">Ogre Leggings:</div>
            <div>Armor: 5 / 6 / <span className="text-blue-500 font-bold">9</span> / 12</div>
            <div>Armor Toughness: 1.2 / <span className="text-blue-500 font-bold">4</span> / <span className="text-yellow-500 font-bold">7.5</span></div>
            <div>Knockback Resistance: 2 / 3 / 4 / 8</div>
            <div className="mt-2 font-bold">Ogre Boots:</div>
            <div>Armor: 2 / 3 / 4 / 9</div>
            <div>Armor Toughness: 1.2 / <span className="text-blue-500 font-bold">4</span> / <span className="text-yellow-500 font-bold">7.5</span></div>
            <div>Knockback Resistance: 2 / 3 / 4 / 8</div>
          </div>
          <h2 className="text-2xl font-bold text-sky-500 mb-2">Abilities</h2>
          <div className="mb-4 text-base">
            At God Grade, gains Fire Infusion Effect. Magic Interference when chestplate, boots, and leggings are equipped.
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-border mb-8">
            <img src="/orgeset/o3.png" alt="Ogre Set In-game" className="w-full h-auto object-cover" />
          </div>
          <h2 className="text-2xl font-bold text-sky-500 mb-2">Where to Find</h2>
          <div className="mb-4 text-base">
            Ogre Lord (Links to Ogre Lord)
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
