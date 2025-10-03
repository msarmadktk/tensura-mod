import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";

const Server = () => (
  <div className="min-h-screen bg-background">
    <Navigation />
    <main className="container-main py-16">
      <h1 className="text-5xl font-bold mb-8 text-yellow-600 text-left">Tensura Dungeon Server — Coming Soon</h1>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Quests Card */}
          <div className="flex-1 bg-gray-50 rounded-xl border p-6 min-h-[200px]">
            <div className="text-2xl font-bold text-sky-400 mb-2">Quests</div>
          </div>
          {/* Contracts Card */}
          <div className="flex-1 bg-gray-50 rounded-xl border p-6 min-h-[200px]">
            <div className="text-2xl font-bold text-sky-400 mb-2">Contracts</div>
          </div>
          {/* Server Hub Card */}
          <div className="flex-1 bg-gray-50 rounded-xl border p-6 min-h-[200px]">
            <div className="text-2xl font-bold text-sky-400 mb-2">Server Hub</div>
            <div className="text-base text-black">Spawn & NPCs</div>
          </div>
        </div>
        {/* Countdown Card */}
        <div className="bg-gray-50 rounded-xl border p-6 min-h-[120px]">
          <div className="text-2xl font-bold text-sky-400 mb-2">Countdown</div>
          <div className="text-base text-black">TBD</div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Server;
