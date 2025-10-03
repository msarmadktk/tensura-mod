import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";

export default function Dryad() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <main className="container-main py-16">
        <h1 className="text-5xl font-bold mb-4 text-yellow-600">Dryad</h1>
        <div className="flex justify-center mb-6">
          <img
            src="/dryad/d1.png"
            alt="Dryad sprite"
            className="h-40 w-auto"
          />
        </div>

        <h2 className="text-2xl font-bold mb-2 text-sky-500">Description</h2>
        <ul className="text-lg text-foreground mb-8 max-w-2xl list-disc list-inside pl-2">
          <li>Dryad – Survival Gear Specialist</li>
          <li>Recording crystals – save dungeon location</li>
          <li>Revival bracelets – one-time revival</li>
          <li>Return whistles – quick escape to lobby</li>
        </ul>

        <div className="rounded-2xl overflow-hidden shadow-lg border border-border max-w-3xl mb-10">
          <img
            src="/dryad/d2.png"
            alt="Dryad in-game screenshot"
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="text-lg mt-8 flex items-center gap-2">
          <span>See also:</span>
          <a
            href="/wiki/essential-items"
            className="font-bold text-violet-600 underline hover:text-violet-800 transition"
          >
            Essential Items
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
