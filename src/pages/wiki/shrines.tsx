import { Footer } from "@/components/ui/footer";
import { Navigation } from "@/components/ui/navigation";


export default function Shrines() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <main className="container-main py-16 flex flex-col items-center">
        <h1 className="text-5xl font-bold mb-4 text-yellow-600">Shrines</h1>
        <div className="w-full max-w-xl">
          <div className="flex justify-center mb-6">
            <img src="/shrine/s1.png" alt="Shrine" className="w-48 h-48 object-contain" />
          </div>
          <h2 className="text-2xl font-bold text-sky-500 mb-2">Description</h2>
          <div className="mb-4 text-base">
            <ol className="list-decimal ml-6">
              <li><span className="font-bold">Protect the Shrine</span><br />
                Objective: 3-minute challenge where the shrine has HP and enemies ignore players<br />
                <span className="font-bold">Shrine HP:</span><br />
                Bronze: 1000 HP<br />
                Silver: 750 HP<br />
                Gold: 500 HP<br />
                Stellar: 250 HP<br />
                Gold Tier Effects: Enemy resistance/invisibility/speed buffs<br />
                Stellar Tier Debuffs: Randomly disables skills/magic/battle/will + periodic levitation/paralysis/blindness
              </li>
              <li><span className="font-bold">Defeat Boss</span><br />
                Availability: Gold/Stellar tiers only<br />
                Objective: Fight a supermassive slime within 3 minutes<br />
                Attempts: One attempt per day. Failing locks the shrine for 24 hours<br />
                Stellar Tier Debuffs: Randomly disables skills/magic/battle/will + periodic levitation/paralysis/blindness<br />
                Destroy the Shrine
              </li>
              <li><span className="font-bold">Destroy the Shrine</span><br />
                Shrine HP & Time Limits:<br />
                Bronze: 1000 HP (1 minute)<br />
                Silver: 2000 HP<br />
                Gold: 4000 HP<br />
                Stellar: 10,000 HP<br />
                Stellar Effects: +Paralysis II + Weakness I<br />
                Gold/Stellar: Wind push every 10–15 seconds
              </li>
              <li><span className="font-bold">Pick the Correct Chest</span><br />
                Mechanics: No fail state, but challenge ends if a trap chest is picked<br />
                Restriction: Cannot be repeated – shrine locks for 24 hours<br />
                Progression: Starts at Bronze chests and ascends by tier if player picks only loot chests
              </li>
              <li><span className="font-bold">Kill All Mini Slimes</span><br />
                Availability: Stellar tier only (5% spawn chance)<br />
                Objective: Hunt Mini Slimes for 1 minute<br />
                Restriction: Cannot be repeated – shrine locks for 24 hours
              </li>
            </ol>
          </div>
          <h2 className="text-2xl font-bold text-sky-500 mb-2">Progression Bonus</h2>
          <div className="mb-4 text-base">
            Based on shrine tier count completed:<br />
            1 Shrine: +5% Uncommon Loot<br />
            2 Shrines: +10% Uncommon, +5% Elite Spawn<br />
            3 Shrines: +15% Uncommon, +10% Elite<br />
            5 Shrines: Guaranteed Uncommon Roll, +15% Elite<br />
            6 Shrines: +5% Rare, +2% Elite, +0.2% Loot Explosion<br />
            10+ Shrines: +5% Rare, 2 chests, +50% Elite, +1% Loot Explosion<br />
            20+ Shrines: +5% Rare, 3 chests, +95% Elite, +1% Loot Explosion
          </div>
          <h2 className="text-2xl font-bold text-sky-500 mb-2">Rewards</h2>
          <div className="mb-4 text-base">
            Chests completed from shrine challenges contain around ten times more coins than their normal counterparts. Stellar chests also have a low chance to contain gear with engraving two levels higher than normal.
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
