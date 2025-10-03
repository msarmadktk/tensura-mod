import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";

export default function Floor40TempestSerpentBoss() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <main className="container-main py-16 max-w-xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-yellow-600">Tempest Serpent Boss (Floor 40)</h1>
        <div className="flex justify-center mb-6">
          <img src="/floor40/b1.png" alt="Tempest Serpent Boss" className="h-[300px] w-auto" />
        </div>

        <h2 className="text-lg font-bold text-sky-500 mb-2">Stats</h2>
        <div className="mb-4 text-base">
          <div><span className="font-bold">EP:</span> 90,000–100,000</div>
          <div><span className="font-bold">Armor:</span> 100</div>
          <div><span className="font-bold">HP:</span> 1000</div>
          <div><span className="font-bold">Attack:</span> 200</div>
        </div>

        <h2 className="text-lg font-bold text-sky-500 mb-2">Attacks & Abilities</h2>
        <ul className="mb-4 text-base list-disc list-inside pl-2">
          <li><span className="font-bold">Poison Cloud</span> – Deals poison/corrosion damage in a large aoe</li>
          <li><span className="font-bold">Tail Swipe</span> – AoE knockback attack</li>
          <li><span className="font-bold">Bite Attack</span> – Basic bite attack that poisons the player</li>
          <li><span className="font-bold">Constrict</span> – Traps and suffocates the player</li>
        </ul>

        <h3 className="text-lg font-bold text-sky-500 mb-2 mt-6">Poison Cloud</h3>
        <div className="flex justify-center mb-4"><img src="/floor40/b2.png" alt="Poison Cloud" className="h-40 w-auto" /></div>
        <h3 className="text-lg font-bold text-sky-500 mb-2">Tail Swipe</h3>
        <div className="flex justify-center mb-4"><img src="/floor40/b3.png" alt="Tail Swipe" className="h-40 w-auto" /></div>
        <h3 className="text-lg font-bold text-sky-500 mb-2">Bite Attack</h3>
        <div className="flex justify-center mb-4"><img src="/floor40/b4.png" alt="Bite Attack" className="h-40 w-auto" /></div>
        <h3 className="text-lg font-bold text-sky-500 mb-2">Constrict</h3>
        <div className="flex justify-center mb-4"><img src="/floor40/b5.png" alt="Constrict" className="h-40 w-auto" /></div>

        <h2 className="text-lg font-bold text-sky-500 mb-2 mt-6">Rewards/Drops</h2>
        <div className="mb-4 text-base">
          • 20 Gold Coins (first kill) <br />
          • 5% chance for <a
            href="/wiki/serpent-armor"
            className="font-bold text-violet-600 underline hover:text-violet-800 transition"
          >Serpent Armor</a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
