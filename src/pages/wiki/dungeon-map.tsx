import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";

export default function DungeonMap() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <main className="container-main py-16">
        <h1 className="text-5xl font-bold mb-4 text-yellow-600">Dungeon Map</h1>
        <p className="text-lg text-foreground mb-8 max-w-2xl">Visit a Cartographer who has a 50% chance to sell a dungeon map for 2 emeralds. This map is essential for locating the dungeon entrance.</p>

        <h2 className="text-3xl font-bold mb-2 text-sky-500">Map Usage</h2>
        <p className="text-lg text-foreground mb-8 max-w-2xl">Right-click the dungeon map to reveal coordinates leading to the Colosseum entrance. Use these coordinates to navigate to the dungeon location.</p>

        <div className="rounded-2xl overflow-hidden shadow-lg border border-border max-w-3xl">
          <img
            src="/dungeonmap/m1.png"
            alt="Dungeon Map usage screenshot"
            className="w-full h-auto object-cover"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
