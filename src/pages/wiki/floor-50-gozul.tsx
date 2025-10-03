import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";

export default function Gozul() {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Navigation />
            <main className="container-main py-16 max-w-xl mx-auto">
                <h1 className="text-4xl font-bold mb-4 text-yellow-600">Gozul (Floor 50)</h1>
                <div className="flex justify-center mb-4"><img src="/gozul/b1.png" alt="Block" className="h-[400px] w-auto" /></div>

                <h2 className="text-lg font-bold text-sky-500 mb-2 mt-6">Stats</h2>
                <div className="mb-4 text-base">
                    <div><span className="font-bold">EP:</span> 130,000</div>
                    <div><span className="font-bold">Armor:</span> 200</div>
                    <div><span className="font-bold">HP:</span> 2,000</div>
                    <div><span className="font-bold">Attack:</span> 500</div>
                </div>

                <h2 className="text-lg font-bold text-sky-500 mb-2 mt-6">Attacks & Abilities</h2>
                <ul className="mb-4 text-base list-disc list-inside pl-2">
                    <li><span className="font-bold">Block</span></li>
                    <li><span className="font-bold">Jump Strike</span> – Gozul jumps up and slams down on the enemy</li>
                    <li><span className="font-bold">Electric Horn</span> – Gozul stretches his horns at the player causing lightning and physical damage</li>
                    <li><span className="font-bold">Charge</span> – Gozul rushes at the player at terrifying speeds</li>
                    <li><span className="font-bold">Axe Throw</span> – Gozul jumps up and throws his axe at the player</li>
                    <li><span className="font-bold">Strike</span> – Gozul strikes at the enemy dealing physical damage</li>
                </ul>

                <h2 className="text-lg font-bold text-sky-500 mb-2 mt-6">Skills</h2>
                <div className="mb-4 text-base">
                    <span className="font-bold">Unique Skill Limiter:</span> Nerfs players based on their EP in comparison to Gozul and Mezul.
                    <ul className="list-disc list-inside pl-2">
                        <li>10%: Anti-skill, Magic Jamming effects (so no flight and transform) and auto-toggle everything off</li>
                        <li>25%: Anti-skill, Magic Jamming effects (so no flight and transform)</li>
                        <li>50%: Anti-skill effects</li>
                        <li>100%: Click the bosses to start fight with options:<br />
                            + No Passives or Toggles – Everything toggled off besides Resistance<br />
                            + No Resistances – Every Resistance toggled off<br />
                            + No Skills – Antiskill for the duration of the fight<br />
                            + Fair Fight – Anti-Skill + Magic Jamming. + Lower EP equal to the boss + Every Resistance toggled off
                        </li>
                    </ul>
                    <span className="font-bold">Extra Skills:</span> Ultra speed Regen
                </div>


                <h3 className="text-lg font-bold text-sky-500 mb-2 mt-6">Block</h3>
                <div className="flex justify-center mb-4"><img src="/gozul/b2.png" alt="Block" className="h-48 w-auto" /></div>
                <h3 className="text-lg font-bold text-sky-500 mb-2">Strike</h3>
                <div className="flex justify-center mb-4"><img src="/gozul/b3.png" alt="Strike" className="h-48 w-auto" /></div>
                <h3 className="text-lg font-bold text-sky-500 mb-2">Backspin Strike</h3>
                <div className="flex justify-center mb-4"><img src="/gozul/b4.png" alt="Backspin Strike" className="h-48 w-auto" /></div>
                <h3 className="text-lg font-bold text-sky-500 mb-2">Horse Kick</h3>
                <div className="flex justify-center mb-4"><img src="/gozul/b5.png" alt="Horse Kick" className="h-48 w-auto" /></div>
                <h3 className="text-lg font-bold text-sky-500 mb-2">Ultra Spear</h3>
                <div className="flex justify-center mb-4"><img src="/gozul/b6.png" alt="Ultra Spear" className="h-48 w-auto" /></div>
                <h3 className="text-lg font-bold text-sky-500 mb-2">Whirlwind Strike</h3>
                <div className="flex justify-center mb-4"><img src="/gozul/b7.png" alt="Whirlwind Strike" className="h-48 w-auto" /></div>

                <h2 className="text-lg font-bold text-sky-500 mb-2 mt-6 mt-6">Rewards/Drops</h2>
                <div className="mb-4 text-base">
                    • 100 Gold Coins (first kill) <br />
                    • 5% chance for <a
                        href="/wiki/minos-set"
                        className="font-bold text-violet-600 underline hover:text-violet-800 transition"
                    >Minos Armor and Minos Trident</a>
                </div>
            </main>
            <Footer />
        </div>
    );
}
