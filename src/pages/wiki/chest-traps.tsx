import { Footer } from "@/components/ui/footer";
import { Navigation } from "@/components/ui/navigation";


export default function ChestTraps() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <main className="container-main py-16 flex flex-col items-center">
        <h1 className="text-5xl font-bold mb-4 text-yellow-600">Chest Traps</h1>
        <div className="w-full max-w-2xl">
          {/* Paralysis Chest */}
          <h2 className="text-3xl font-bold mb-2 text-sky-500">Paralysis Chest</h2>
          <p className="text-lg text-foreground mb-4">Inflicts Paralysis V on all entities within 5-block radius.</p>
          <div className="flex justify-center mb-4">
            <img src="/chest/c1.png" alt="Paralysis Chest" style={{ width: '70%' }} className="h-auto object-cover" />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-border mb-8">
            <img src="/chest/c2.png" alt="Paralysis Chest In-game" className="w-full h-auto object-cover" />
          </div>
          {/* Exploding Chest */}
          <h2 className="text-3xl font-bold mb-2 text-sky-500">Exploding Chest</h2>
          <p className="text-lg text-foreground mb-4">TNT chest that bounces for 5 seconds before exploding when right clicked.</p>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-border mb-4">
            <img src="/chest/c3.png" alt="Exploding Chest In-game" className="w-full h-auto object-cover" />
          </div>
          <div className="flex justify-center mb-8">
            <img src="/chest/c4.png" alt="Exploding Chest" style={{ width: '70%' }} className="h-auto object-cover" />
          </div>
          {/* Mimic Chest */}
          <h2 className="text-3xl font-bold mb-2 text-sky-500">Mimic Chest</h2>
          <p className="text-lg text-foreground mb-4">Living chest with 100 HP. Jumps at targets dealing 25 damage per bite.</p>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-border mb-8">
            <img src="/chest/c5.png" alt="Mimic Chest In-game" className="w-full h-auto object-cover" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}


