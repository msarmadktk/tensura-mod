import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";

export default function Floor30OgreLord() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <main className="container-main py-16 max-w-xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-yellow-600">Ogre Lord (Floor 30)</h1>
        <div className="flex justify-center mb-6">
          <img src="/floor30/b1.png" alt="Ogre Lord" className="h-[300px] w-auto" />
        </div>

        <h2 className="text-lg font-bold text-sky-500 mb-2">Stats</h2>
        <div className="mb-4 text-base">
          <div><span className="font-bold">EP:</span> 50,000</div>
          <div><span className="font-bold">Armor:</span> 30</div>
          <div><span className="font-bold">HP:</span> 250</div>
          <div><span className="font-bold">Attack:</span> 100</div>
          <div><span className="font-bold">Ogre Subordinates:</span> HP: 100 • Armor: 10 • Attack: 20</div>
        </div>

        <h2 className="text-lg font-bold text-sky-500 mb-2">Attacks & Abilities</h2>
        <ul className="mb-4 text-base list-disc list-inside pl-2">
          <li><span className="font-bold">Axe Block</span> – Blocks Attacks</li>
          <li><span className="font-bold">Meteor Strike</span> – Jumps up and smashes down dealing aoe damage</li>
          <li><span className="font-bold">Double Strike</span> – Two consecutive axe swings</li>
          <li><span className="font-bold">Ogre Flame</span> – Hits the player with a powerful flame attack</li>
        </ul>

        <h3 className="text-lg font-bold text-sky-500 mb-2-2 mt-6">Block</h3>
        <div className="flex justify-center mb-4"><img src="/floor30/b2.png" alt="Block" className="h-40 w-auto" /></div>
        <h3 className="text-lg font-bold text-sky-500 mb-2-2">Meteor Strike</h3>
        <div className="flex justify-center mb-4"><img src="/floor30/b3.png" alt="Meteor Strike" className="h-40 w-auto" /></div>
        <h3 className="text-lg font-bold text-sky-500 mb-2-2">Double Strike</h3>
        <div className="flex justify-center mb-4"><img src="/floor30/b4.png" alt="Double Strike" className="h-40 w-auto" /></div>
        <h3 className="text-lg font-bold text-sky-500 mb-2-2">Ogre Flame</h3>
        <div className="flex justify-center mb-4"><img src="/floor30/b5.png" alt="Ogre Flame" className="h-40 w-auto" /></div>

        <h2 className="text-lg font-bold text-sky-500 mb-2 mt-6">Rewards/Drops</h2>
      
        <div className="mb-4 text-base">
          • 10 Gold Coins (first kill) <br />
          • 5% chance for <a
            href="/wiki/ogre-set"
            className="font-bold text-violet-600 underline hover:text-violet-800 transition"
          >Ogre Series Equipment</a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
