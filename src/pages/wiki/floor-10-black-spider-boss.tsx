import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";

export default function Floor10BlackSpiderBoss() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <main className="container-main py-16 max-w-xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-yellow-600">Black Spider Boss (Floor 10)</h1>
        <div className="flex justify-center mb-6">
          <img src="/floor10/b1.png" alt="Black Spider Boss" className="h-[300px] w-auto" />
        </div>

        <h2 className="text-lg font-bold text-sky-500 mb-2">Stats</h2>
        <div className="mb-4 text-base">
          <div><span className="font-bold">EP:</span> 70,000–80,000</div>
          <div><span className="font-bold">Armor:</span> 10</div>
          <div><span className="font-bold">HP:</span> 250</div>
          <div><span className="font-bold">Attack:</span> 25</div>
        </div>

        <h2 className="text-lg font-bold text-sky-500 mb-2">Attacks & Abilities</h2>
        <ul className="mb-4 text-base list-disc list-inside pl-2">
          <li><span className="font-bold">Web Trap + Drag</span> – Webs player and slowly drags them towards the spider</li>
          <li><span className="font-bold">Egg Drop</span> – Drops eggs that spawn smaller black spiders</li>
          <li><span className="font-bold">Web Shot</span> – Projectile that webs players</li>
          <li><span className="font-bold">Bite/Slam Attacks</span> – Various poison-inflicting attacks</li>
        </ul>

        <h3 className="text-lg font-bold text-sky-500 mb-2-2 mt-6">Web Trap + Drag</h3>
        <div className="flex justify-center mb-4"><img src="/floor10/b2.png" alt="Web Trap + Drag" className="h-40 w-auto" /></div>
        <h3 className="text-lg font-bold text-sky-500 mb-2-2">Egg Drop</h3>
        <div className="flex justify-center mb-4"><img src="/floor10/b3.png" alt="Egg Drop" className="h-40 w-auto" /></div>
        <h3 className="text-lg font-bold text-sky-500 mb-2-2">Web Shot</h3>
        <div className="flex justify-center mb-4"><img src="/floor10/b4.png" alt="Web Shot" className="h-40 w-auto" /></div>
        <h3 className="text-lg font-bold text-sky-500 mb-2-2">Leap Bite</h3>
        <div className="flex justify-center mb-4"><img src="/floor10/b5.png" alt="Leap Bite" className="h-40 w-auto" /></div>
        <h3 className="text-lg font-bold text-sky-500 mb-2-2">Slam</h3>
        <div className="flex justify-center mb-4"><img src="/floor10/b6.png" alt="Slam" className="h-40 w-auto" /></div>

        <h2 className="text-lg font-bold text-sky-500 mb-2 mt-6">Rewards/Drops</h2>
        <div className="mb-4 text-base">
          • 3 Gold Coins (first kill) <br />
          • 5% chance for <a
            href="/wiki/spider-dagger"
            className="font-bold text-violet-600 underline hover:text-violet-800 transition"
          >Spider Dagger</a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
