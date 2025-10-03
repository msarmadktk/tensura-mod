import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";

export default function Kurobee() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <main className="container-main py-16">
        <h1 className="text-5xl font-bold mb-4 text-yellow-600">Kurobee</h1>
        <div className="flex justify-center mb-6">
          <img
            src="/kurobee/k1.png"
            alt="Kurobee sprite"
            className="h-40 w-auto"
          />
        </div>

        <h2 className="text-2xl font-bold mb-2 text-sky-500">Description</h2>
        <ul className="text-lg text-foreground mb-8 max-w-2xl list-disc list-inside pl-2">
          <li>Kurobee – Weaponsmith & Armorer</li>
          <li>Sells premium gear for gold and stellar coins</li>
          <li>Daily specialty weapon rotates by day of week</li>
          <li>All weapons and armor in Kurobee's Shop grant the Tsukuyomi Effect automatically upon purchase.</li>
          <li>Found on floor 95</li>
        </ul>

        <div className="rounded-2xl overflow-hidden shadow-lg border border-border max-w-3xl mb-10">
          <img
            src="/kurobee/k2.png"
            alt="Kurobee in-game screenshot"
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="text-lg mt-8 flex items-center gap-2">
          <span>See also:</span>
          <a
            href="shinkobo"
            className="font-bold text-violet-600 underline hover:text-violet-800 transition"
          >
            Kurobee's Premium Gear
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
