import { Footer } from "@/components/ui/footer";
import { Navigation } from "@/components/ui/navigation";


export default function HakuroKatanaHakuroArmor() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <main className="container-main py-16 flex flex-col items-center">
        <h1 className="text-5xl font-bold mb-4 text-yellow-600">Hakuro's Katana/Hakuro's Armor</h1>
        <div className="w-full max-w-xl">
          <div className="flex justify-center mb-6">
            <img src="/hakuro/h1.png" alt="Hakuro's Armor" className="w-64 h-64 object-contain" />
          </div>
          <h2 className="text-2xl font-bold text-sky-500 mb-2">Hakuro's Armor Stats</h2>
          <div className="mb-4 text-base">
            <div><span className="font-bold">Grades:</span> <span className="text-purple-500 font-bold">Unique</span> / <span className="text-yellow-500 font-bold">Legend</span></div>
            <div>Infusion: None</div>
            <div className="mt-2 font-bold">Hakuro's Kimono:</div>
            <div>Armor: <span className="text-blue-500 font-bold">7</span> / <span className="text-yellow-500 font-bold">10</span></div>
            <div>Armor Toughness: <span className="text-purple-500 font-bold">2</span> / <span className="text-yellow-500 font-bold">4</span></div>
            <div>Knockback Resistance: <span className="text-purple-500 font-bold">3</span> / <span className="text-yellow-500 font-bold">4</span></div>
            <div className="mt-2 font-bold">Hakuro's Hakama:</div>
            <div>Armor: <span className="text-blue-500 font-bold">7</span> / <span className="text-yellow-500 font-bold">8</span></div>
            <div>Armor Toughness: <span className="text-purple-500 font-bold">2</span> / <span className="text-yellow-500 font-bold">4</span></div>
            <div>Knockback Resistance: <span className="text-purple-500 font-bold">3</span> / <span className="text-yellow-500 font-bold">4</span></div>
          </div>
          <div className="flex justify-center mb-6">
            <img src="/hakuro/h2.png" alt="Hakuro's Katana" className="w-48 h-48 object-contain" />
          </div>
          <h2 className="text-2xl font-bold text-sky-500 mb-2">Hakuro's Katana's Stats</h2>
          <div className="mb-4 text-base">
            <div><span className="font-bold">Grades:</span> <span className="text-purple-500 font-bold">Unique</span> / <span className="text-yellow-500 font-bold">Legend</span></div>
            <div>Infusion: None</div>
            <div>Attack Damage: <span className="text-blue-500 font-bold">33</span> / <span className="text-yellow-500 font-bold">46</span></div>
            <div>Attack Speed: 2</div>
            <div>Critical Chance: 20%</div>
          </div>
          <h2 className="text-2xl font-bold text-sky-500 mb-2">Abilities</h2>
          <div className="mb-4 text-base">
            <span className="font-bold">Dodge Lock Slash:</span> Boosts player dodge chance by +50%, sets enemy dodge to 0% for 3 seconds.<br />
            <span className="font-bold">Follow-up Strike:</span> If the first hit lands, teleport above the enemy and deal 5× base damage.
          </div>
          <div className="rounded-2xl overflow-hidden mb-8">
            <img src="/hakuro/h3.png" alt="Hakuro's Katana In-game" className="w-full h-auto object-cover" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
