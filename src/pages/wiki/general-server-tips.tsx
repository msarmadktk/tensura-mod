import { Footer } from "@/components/ui/footer";
import { Navigation } from "@/components/ui/navigation";



export default function GeneralServerTips() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <main className="container-main py-16 flex flex-col items-center">
        <h1 className="text-5xl font-extrabold mb-6 text-yellow-600 drop-shadow-sm">Server Tips</h1>
        <div className="w-full max-w-xl">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-sky-600 opacity-90">
            <span role="img" aria-label="tips">🛠️</span> General Tips
          </h2>
          <div className="mb-4 space-y-3">
            <div>
              <span className="text-lg font-extrabold text-gray-900">Game Rule Suggestion:</span>
              <span className="text-base font-normal text-gray-600 ml-2">Turn off mob griefing.</span>
            </div>
            <div>
              <span className="text-lg font-extrabold text-gray-900">Server Settings:</span>
              <span className="text-base font-normal text-gray-600 ml-2">Set <span className="font-mono text-gray-700">max-tick-time=180000</span> in server.properties.</span>
            </div>
            <div>
              <span className="text-lg font-extrabold text-gray-900">Dungeon Commands:</span>
              <div className="ml-8 mt-2 text-base font-mono text-gray-700">
                <span className="block">/cleardungeon</span>
                <span className="block">/createdungeon 100 0.75 0.6</span>
              </div>
            </div>
            <div>
              <span className="text-lg font-extrabold text-gray-900">Reset Suggestion:</span>
              <span className="text-base font-normal text-gray-600 ml-2">If generation bugs occur, delete the <span className="font-mono text-gray-700">trbeyond</span> folder in world &gt; dimensions, then use <span className="font-mono text-gray-700">/cleardungeon</span> and <span className="font-mono text-gray-700">/createdungeon</span>.</span>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
