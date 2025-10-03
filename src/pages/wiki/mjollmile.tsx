import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";

export default function Mjollmile() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <main className="container-main py-16">
        <h1 className="text-5xl font-bold mb-4 text-yellow-600">Mjöllmile</h1>
        <div className="flex justify-center mb-6">
          <img
            src="/mjollmile/m1.png"
            alt="Mjöllmile sprite"
            className="h-40 w-auto"
          />
        </div>

        <h2 className="text-2xl font-bold mb-2 text-sky-500">Description</h2>
        <ul className="text-lg text-foreground mb-8 max-w-2xl list-disc list-inside pl-2">
          <li>Mjöllmile – Currency Exchange</li>
          <li>Converts coins between tiers</li>
          <li>100 coins = 1 coin of next tier up</li>
        </ul>

        <div className="rounded-2xl overflow-hidden shadow-lg border border-border max-w-3xl mb-10">
          <img
            src="/mjollmile/m2.png"
            alt="Mjöllmile in-game screenshot"
            className="w-full h-auto object-cover"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
