import { Footer } from "@/components/ui/footer";
import { Navigation } from "@/components/ui/navigation";


export default function MinosSet() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <main className="container-main py-16 flex flex-col items-center">
        <h1 className="text-5xl font-bold mb-4 text-yellow-600">Minos Set</h1>
        <div className="w-full max-w-xl">
          <div className="flex justify-center mb-6">
            <img src="/minorset/m1.png" alt="Minos Armor" className="w-64 h-64 object-contain" />
          </div>
          <h2 className="text-2xl font-bold text-sky-500 mb-2">Minos Armor Stats</h2>
          <div className="mb-4 text-base">
            <div><span className="font-bold">Grades:</span> <span className="text-purple-500 font-bold">Unique</span> / <span className="text-yellow-500 font-bold">Legend</span> / <span className="text-red-500 font-bold">God</span></div>
            <div>Infusion: None</div>
            <div className="mt-2 font-bold">Minos Helmet:</div>
            <div>Armor: <span className="text-blue-500 font-bold">6</span> / <span className="text-yellow-500 font-bold">9</span> / <span className="text-red-500 font-bold">10</span></div>
            <div>Armor Toughness: <span className="text-blue-500 font-bold">5</span> / <span className="text-yellow-500 font-bold">6</span> / <span className="text-red-500 font-bold">8</span></div>
            <div>Knockback Resistance: <span className="text-blue-500 font-bold">3</span> / <span className="text-red-500 font-bold">10</span></div>
            <div className="mt-2 font-bold">Minos Chestplate:</div>
            <div>Armor: <span className="text-blue-500 font-bold">11</span> / <span className="text-yellow-500 font-bold">14</span> / <span className="text-red-500 font-bold">17</span></div>
            <div>Armor Toughness: <span className="text-blue-500 font-bold">5</span> / <span className="text-yellow-500 font-bold">6</span> / <span className="text-red-500 font-bold">8</span></div>
            <div>Knockback Resistance: <span className="text-blue-500 font-bold">3</span> / <span className="text-red-500 font-bold">10</span></div>
            <div className="mt-2 font-bold">Minos Leggings:</div>
            <div>Armor: <span className="text-blue-500 font-bold">9</span> / <span className="text-yellow-500 font-bold">12</span> / <span className="text-red-500 font-bold">15</span></div>
            <div>Armor Toughness: <span className="text-blue-500 font-bold">5</span> / <span className="text-yellow-500 font-bold">6</span> / <span className="text-red-500 font-bold">8</span></div>
            <div>Knockback Resistance: <span className="text-blue-500 font-bold">3</span> / <span className="text-red-500 font-bold">10</span></div>
            <div className="mt-2 font-bold">Minos Boots:</div>
            <div>Armor: <span className="text-blue-500 font-bold">5</span> / <span className="text-yellow-500 font-bold">9</span> / <span className="text-red-500 font-bold">11</span></div>
            <div>Armor Toughness: <span className="text-blue-500 font-bold">5</span> / <span className="text-yellow-500 font-bold">6</span> / <span className="text-red-500 font-bold">8</span></div>
            <div>Knockback Resistance: <span className="text-blue-500 font-bold">3</span> / <span className="text-red-500 font-bold">10</span></div>
          </div>
          <h2 className="text-2xl font-bold text-sky-500 mb-2">Abilities</h2>
          <div className="mb-4 text-base">
            Holy coat 2 turns to Holy Coat 3 with full Minos armor set.
          </div>
          <div className="flex justify-center mb-6">
            <img src="/minorset/m2.png" alt="Minos Trident" className="w-48 h-48 object-contain" />
          </div>
          <h2 className="text-2xl font-bold text-sky-500 mb-2">Minos Trident Stats</h2>
          <div className="mb-4 text-base">
            <div><span className="font-bold">Grades:</span> <span className="text-purple-500 font-bold">Unique</span> / <span className="text-yellow-500 font-bold">Legend</span> / <span className="text-red-500 font-bold">God</span></div>
            <div>Infusion: None</div>
            <div>Attack Damage: <span className="text-blue-500 font-bold">33</span> / <span className="text-yellow-500 font-bold">46</span> / <span className="text-red-500 font-bold">70</span></div>
            <div>Attack Speed: 1.5</div>
            <div>Range: +2</div>
          </div>
          <h2 className="text-2xl font-bold text-sky-500 mb-2">Abilities</h2>
          <div className="mb-4 text-base">
            Ultra Spear Ability: Press Right Click to perform 10–12 rapid strikes dealing major damage.<br />Holy Coat: 2 when equipped, 3 with full Minos armor set.
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-border mb-8">
            <img src="/minorset/m3.png" alt="Minos Set In-game" className="w-full h-auto object-cover" />
          </div>
        </div>
        {/* Minos Bardiche Section */}
        <div className="w-full max-w-xl mt-12">
          <div className="flex justify-center mb-6">
            <img src="/minorset/m4.png" alt="Minos Bardiche" className="w-64 h-64 object-contain" />
          </div>
          <h2 className="text-2xl font-bold text-sky-500 mb-2">Minos Bardiche Stats</h2>
          <div className="mb-4 text-base">
            <div><span className="font-bold">Grades:</span> <span className="text-purple-500 font-bold">Unique</span> / <span className="text-yellow-500 font-bold">Legend</span> / <span className="text-red-500 font-bold">God</span></div>
            <div>Infusion: None</div>
            <div>Attack Damage: <span className="text-blue-500 font-bold">34</span> / <span className="text-yellow-500 font-bold">44</span> / <span className="text-red-500 font-bold">69</span></div>
            <div>Attack Speed: 1</div>
            <div>Range: +2</div>
          </div>
          <h2 className="text-2xl font-bold text-sky-500 mb-2">Abilities</h2>
          <div className="mb-4 text-base">
            <span className="font-bold">Throwing Spin:</span> Right-click to throw axe. Returns with Molecular Manipulation/Gravity Domination. Enhanced with Thrower skill.<br />
            <span className="font-bold">Lightning Enhancement:</span> With 3+ Wind Cores – adds lightning damage and 20% Paralysis V chance.
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-border mb-8">
            <img src="/minorset/m5.png" alt="Minos Bardiche In-game" className="w-full h-auto object-cover" />
          </div>
          <h2 className="text-2xl font-bold text-sky-500 mb-2">Where to Find</h2>

          <div className="mb-4 text-base">
            •
            <a
              href="/wiki/floor-50-gozul"
              className="ml-2 font-bold text-violet-600 underline hover:text-violet-800 transition"
            >
              Gozul Boss
            </a>
          </div>
          <div className="mb-4 text-base">
            •
            <a
              href="/wiki/floor-50-mezul"
              className="ml-2 font-bold text-violet-600 underline hover:text-violet-800 transition"
            >
              Mezul Boss
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
