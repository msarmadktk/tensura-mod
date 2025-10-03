import { Footer } from "@/components/ui/footer";
import { Navigation } from "@/components/ui/navigation";


export default function EnvironmentalHazards() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <main className="container-main py-16 flex flex-col items-center">
        <h1 className="text-5xl font-bold mb-4 text-yellow-600">Environmental Hazards</h1>
        <div className="w-full max-w-2xl">
          {/* Sealing Room */}
          <h2 className="text-3xl font-bold mb-2 text-sky-500">Sealing Room</h2>
          <p className="text-lg text-foreground mb-4">Invisible blocks that drain oxygen and deal suffocation damage.</p>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-border mb-8">
            <img src="/environment/e1.png" alt="Sealing Room" className="w-full h-auto object-cover" />
          </div>
          {/* Illusionary Wall */}
          <h2 className="text-3xl font-bold mb-2 text-sky-500">Illusionary Wall</h2>
          <p className="text-lg text-foreground mb-4">Phase-through blocks that appear solid but can be walked through.</p>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-border mb-8">
            <img src="/environment/e2.png" alt="Illusionary Wall" className="w-full h-auto object-cover" />
          </div>
          {/* Moving/Rotating Tiles */}
          <h2 className="text-3xl font-bold mb-2 text-sky-500">Moving/Rotating Tiles</h2>
          <p className="text-lg text-foreground mb-4">Floor tiles that move or spin players in predetermined directions.</p>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-border mb-8">
            <img src="/environment/e3.png" alt="Moving/Rotating Tiles" className="w-full h-auto object-cover" />
          </div>
          {/* Cutting Thread */}
          <h2 className="text-3xl font-bold mb-2 text-sky-500">Cutting Thread</h2>
          <p className="text-lg text-foreground mb-4">Nearly invisible wires dealing 200 damage to moving targets.</p>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-border mb-8">
            <img src="/environment/e4.png" alt="Cutting Thread" className="w-full h-auto object-cover" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
