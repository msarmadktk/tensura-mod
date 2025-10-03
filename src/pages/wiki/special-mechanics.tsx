import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";

export default function SpecialMechanics() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <main className="container-main py-16">
        <h1 className="text-5xl font-bold mb-4 text-yellow-600">Special Mechanics</h1>

        <h2 className="text-2xl font-bold mb-2 text-sky-500">Unique Monsters</h2>
        <p className="text-lg text-foreground mb-2 max-w-2xl">Rare spawns with purple particles that are 10× stronger than normal mobs. Each unique monster has special skills and resistances.</p>
        <ul className="text-lg text-foreground mb-4 max-w-2xl list-disc list-inside pl-2">
          <li>Low Spawn Chance</li>
          <li>Drops increased loot when killed</li>
        </ul>
        <div className="text-lg text-foreground mb-2 max-w-2xl">
          <span className="font-semibold">Unique Skill Pool:</span> Observer, Reaper, Seer, Fighter, Shadow Striker, Sniper, Survivor, Tuner, Gourmand, Anti Skill, Chosen One, Commander, Cook, Engorger, Guardian, Martial Master, and Mathematician
        </div>
        <div className="text-lg text-foreground mb-6 max-w-2xl">
          <span className="font-semibold">Extra Skill Pool:</span> All Seeing Eye, Strengthen Body, Black Flame, Ultra Instinct, Heavenly Eye, Magic Jamming, Ultra Regeneration
        </div>
        <div className="rounded-2xl overflow-hidden shadow-lg border border-border max-w-3xl mb-10">
          <img
            src="/special/s1.png"
            alt="Unique Monster screenshot"
            className="w-full h-auto object-cover"
          />
        </div>

        <h2 className="text-2xl font-bold mb-2 text-sky-500">Loot Explosion</h2>
        <p className="text-lg text-foreground mb-4 max-w-2xl">Random chance to multiply item drops from defeated enemies. Stronger mobs have better loot explosion potential.</p>
        <div className="rounded-2xl overflow-hidden shadow-lg border border-border max-w-3xl">
          <img
            src="/special/s2.png"
            alt="Loot Explosion screenshot"
            className="w-full h-auto object-cover"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
