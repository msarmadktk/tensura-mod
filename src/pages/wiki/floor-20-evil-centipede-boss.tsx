import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";

export default function Floor20EvilCentipedeBoss() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <main className="container-main py-16 max-w-xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-yellow-600">Evil Centipede Boss (Floor 20)</h1>
        <div className="flex justify-center mb-6">
          <img src="/floor20/b1.png" alt="Evil Centipede Boss" className="h-[300px] w-auto" />
        </div>

        <h2 className="text-lg font-bold text-sky-500 mb-2">Stats</h2>
        <div className="mb-4 text-base">
          <div><span className="font-bold">EP:</span> 80,000–90,000</div>
          <div><span className="font-bold">Armor:</span> 15</div>
          <div><span className="font-bold">HP:</span> 500</div>
          <div><span className="font-bold">Attack:</span> 50</div>
        </div>

        <h2 className="text-lg font-bold text-sky-500 mb-2">Attacks & Abilities</h2>
        <ul className="mb-4 text-base list-disc list-inside pl-2">
          <li><span className="font-bold">Slam</span> – Rises up and slam down on the player dealing knock back and damage</li>
          <li><span className="font-bold">Rush</span> – Rushes at the player paralyzing them and pushing them backwards</li>
          <li><span className="font-bold">Bite Attack</span> – Basic attack dealing damage and inflicting paralysis</li>
        </ul>

        <h3 className="text-lg font-bold text-sky-500 mb-2-2 mt-6">Slam</h3>
        <div className="flex justify-center mb-4"><img src="/floor20/b2.png" alt="Slam" className="h-40 w-auto" /></div>
        <h3 className="text-lg font-bold text-sky-500 mb-2-2">Rush</h3>
        <div className="flex justify-center mb-4"><img src="/floor20/b3.png" alt="Rush" className="h-40 w-auto" /></div>
        <h3 className="text-lg font-bold text-sky-500 mb-2-2">Bite Attack</h3>
        <div className="flex justify-center mb-4"><img src="/floor20/b4.png" alt="Bite Attack" className="h-40 w-auto" /></div>

        <h2 className="text-lg font-bold text-sky-500 mb-2 mt-6">Rewards/Drops</h2>
        <div className="mb-4 text-base">
          • 5 Gold Coins (first kill) <br />
          • 5% chance for <a
            href="/wiki/centipede-dagger"
            className="font-bold text-violet-600 underline hover:text-violet-800 transition"
          >Centipede Dagger</a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
