import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";

export default function EssentialItems() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <main className="container-main py-16">
        <h1 className="text-5xl font-bold mb-4 text-yellow-600">Essential Items</h1>
        <p className="text-lg text-foreground mb-8 max-w-2xl">These three items are sold by the Dryad by the dungeon entrance. Do not ignore them, they will massively help with traversing the dungeon especially in some of the later floors.</p>

        <h2 className="text-2xl font-bold mb-2 text-sky-500">Revival Bracelet</h2>
        <p className="text-lg text-foreground mb-4 max-w-2xl">Provides a one-time revival in the lobby while retaining all EP and items. Right-click on subordinates to equip them with revival bracelets for their protection.</p>
        <div className="rounded-2xl overflow-hidden shadow-lg border border-border max-w-3xl mb-10">
          <img
            src="/essentialitems/e1.png"
            alt="Revival Bracelet screenshot"
            className="w-full h-auto object-cover"
          />
        </div>

        <h2 className="text-2xl font-bold mb-2 text-sky-500">Return Whistle</h2>
        <p className="text-lg text-foreground mb-4 max-w-2xl">Instantly teleports you and any nearby subordinates back to the lobby, providing a quick escape from dangerous situations.</p>
        <div className="rounded-2xl overflow-hidden shadow-lg border border-border max-w-3xl mb-10">
          <img
            src="/essentialitems/e2.png"
            alt="Return Whistle screenshot"
            className="w-full h-auto object-cover"
          />
        </div>

        <h2 className="text-2xl font-bold mb-2 text-sky-500">Recording Crystal</h2>
        <p className="text-lg text-foreground mb-4 max-w-2xl">Creates a one-time dungeon checkpoint that can teleport you back from the overworld. Will also teleport any subordinates on follow that are near you when activated.</p>
        <div className="rounded-2xl overflow-hidden shadow-lg border border-border max-w-3xl">
          <img
            src="/essentialitems/e3.png"
            alt="Recording Crystal screenshot"
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="text-lg mt-8 flex items-center gap-2">
          <span>See also:</span>
          <a
            href="/wiki/dryad"
            className="font-bold text-green-700 underline hover:text-green-900 transition"
          >
            Dryad (Survival Gear Specialist)
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
