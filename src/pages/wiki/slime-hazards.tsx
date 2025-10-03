import { Footer } from "@/components/ui/footer";
import { Navigation } from "@/components/ui/navigation";


export default function SlimeHazards() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <main className="container-main py-16 flex flex-col items-center">
        <h1 className="text-5xl font-bold mb-4 text-yellow-600">Slime Traps</h1>
        <div className="w-full max-w-2xl">
          {/* Slime Wall */}
          <h2 className="text-3xl font-bold mb-2 text-sky-500">Slime Wall</h2>
          <p className="text-lg text-foreground mb-4">Living walls with 100 HP that corrode armor on contact.</p>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-border mb-8">
            <img src="/slimetraps/s1.png" alt="Slime Wall" className="w-full h-auto object-cover" />
          </div>
          {/* Slime Ceiling */}
          <h2 className="text-3xl font-bold mb-2 text-sky-500">Slime Ceiling</h2>
          <p className="text-lg text-foreground mb-4">Ceiling trap dealing high corrosion damage.</p>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-border mb-8">
            <img src="/slimetraps/s2.png" alt="Slime Ceiling" className="w-full h-auto object-cover" />
          </div>
          {/* Slime Floor */}
          <h2 className="text-3xl font-bold mb-2 text-sky-500">Slime Floor</h2>
          <p className="text-lg text-foreground mb-4">Makes player sink through the ground seconds and deals high corrosion damage.</p>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-border mb-8">
            <img src="/slimetraps/s3.png" alt="Slime Floor" className="w-full h-auto object-cover" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
