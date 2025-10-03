import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";

export default function CoreRules() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <main className="container-main py-16">
        <h1 className="text-5xl font-bold mb-8 text-yellow-600">Core Rules</h1>
        <div className="space-y-4 text-lg max-w-2xl">
          <div>
            <span className="font-bold underline">Entry Fee:</span> Players can either use 3 silver coins or a dungeon voucher to enter the dungeon. Individuals who don't pay the required fee are teleported back to the lobby.
          </div>
          <div>
            <span className="font-bold underline">Movement Restrictions:</span> Teleportation and instant movement skills are banned within the dungeon.
          </div>
          <div>
            <span className="font-bold underline">Environment Protection:</span> Mob griefing is disabled to preserve dungeon structures.
          </div>
          <div>
            <span className="font-bold underline">Safety Systems:</span> Falling into the void teleports you as well as your subordinates back to the lobby. The lobby is a safe zone with no death mechanics.
          </div>
          <div>
            <span className="font-bold underline">AFK Protection:</span> After 10 minutes of being idle, a Dryad will spawn and eliminate the AFK player (with prior warnings).
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
