import { Footer } from "@/components/ui/footer";
import { Navigation } from "@/components/ui/navigation";


export default function SoueiNinjatosSoueiArmor() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <main className="container-main py-16 flex flex-col items-center">
        <h1 className="text-5xl font-bold mb-4 text-yellow-600">Souei's Ninjato's/Souei's Armor</h1>
        <div className="w-full max-w-xl">
          <div className="flex justify-center mb-6">
            <img src="/souei/s1.png" alt="Souei's Armor" className="w-64 h-64 object-contain" />
          </div>
          <h2 className="text-2xl font-bold text-sky-500 mb-2">Minos Armor Stats</h2>
          <div className="mb-4 text-base">
            <div><span className="font-bold">Grades:</span> <span className="text-purple-500 font-bold">Unique</span> / <span className="text-yellow-500 font-bold">Legend</span></div>
            <div>
              Infusion: <span className="text-gray-700">Darkness</span> (
              <a
                href="/wiki/infusion-effects"
                className="underline text-blue-500 font-bold hover:text-blue-700 transition"
              >
                see infusion page
              </a>
              )
            </div>
            <div className="mt-2 font-bold">Souei's Chestplate:</div>
            <div>Armor: <span className="text-blue-500 font-bold">9</span> / <span className="text-yellow-500 font-bold">14</span></div>
            <div>Armor Toughness: <span className="text-blue-500 font-bold">4</span> / <span className="text-red-500 font-bold">8</span></div>
            <div>Knockback Resistance: <span className="text-blue-500 font-bold">3</span> / <span className="text-red-500 font-bold">8</span></div>
            <div className="mt-2 font-bold">Souei's Leggings:</div>
            <div>Armor: <span className="text-blue-500 font-bold">7</span> / <span className="text-yellow-500 font-bold">12</span></div>
            <div>Armor Toughness: <span className="text-blue-500 font-bold">4</span> / <span className="text-red-500 font-bold">8</span></div>
            <div>Knockback Resistance: <span className="text-blue-500 font-bold">3</span> / <span className="text-yellow-500 font-bold">6</span> / <span className="text-red-500 font-bold">10</span></div>
          </div>
          <h2 className="text-2xl font-bold text-sky-500 mb-2">Abilities</h2>
          <div className="mb-4 text-base">
            <span className="font-bold">Darkness Infusion Set Bonus</span>
          </div>
          <div className="flex justify-center mb-6">
            <img src="/souei/s2.png" alt="Souei's Ninjato" className="w-48 h-48 object-contain" />
          </div>
          <h2 className="text-2xl font-bold text-sky-500 mb-2">Minos Trident Stats</h2>
          <div className="mb-4 text-base">
            <div><span className="font-bold">Grades:</span> <span className="text-purple-500 font-bold">Unique</span> / <span className="text-yellow-500 font-bold">Legend</span></div>
            <div>Infusion: None</div>
            <div>Attack Damage: <span className="text-blue-500 font-bold">39</span> / <span className="text-yellow-500 font-bold">55</span></div>
            <div>Attack Speed: 1.5</div>
            <div>Critical Chance: 20%</div>
            <div>Additional Critical Multiplier: 0.5</div>
            <div>Range: +2</div>
          </div>
          <h2 className="text-2xl font-bold text-sky-500 mb-2">Abilities</h2>
          <div className="mb-4 text-base">
            <span className="font-bold">Dual Wielding Bonus:</span> When dual-wielding Ninjatos, attack speed increases to 2 and critical chance increases to 40%.<br />
            <span className="font-bold">Shadow Striker Enhancement:</span> Instakill damage ×2 (1k SHP), bypasses spiritual resistance (not nullification).
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
