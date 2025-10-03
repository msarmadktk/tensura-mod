import { Footer } from "@/components/ui/footer";
import { Navigation } from "@/components/ui/navigation";


export default function DungeonDominators() {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Navigation />
            <main className="container-main py-16 flex flex-col items-center">
                <h1 className="text-5xl font-bold mb-4 text-yellow-600">Dungeon Dominators</h1>
                <div className="w-full max-w-2xl">
                    {/* Scarlet */}
                    <h2 className="text-3xl font-bold mb-2 text-sky-500">Scarlet</h2>
                    <div className="text-lg text-foreground mb-2">
                        <strong>EP:</strong> 80,000<br />
                        <strong>Armor:</strong> 0<br />
                        <strong>HP:</strong> 250<br />
                        <strong>Attack:</strong> 100
                    </div>
                    <h3 className="font-bold text-blue-500 mt-4 mb-2">Attacks & Abilities</h3>
                    <ul className="list-disc ml-6 text-base mb-2">
                        <li><strong>Pierce Attack</strong> – 1,000 pierce damage, bypasses armor completely</li>
                    </ul>
                    <h3 className="font-bold text-blue-500 mt-4 mb-2">Skills</h3>
                    <div className="text-base mb-2">
                        <strong>Intrinsic Skills:</strong> Self Regeneration, Absorb and dissolve<br />
                        <strong>Resistances:</strong> Physical Attack Resistance
                    </div>
                                <div className="flex justify-center mb-8">
                                    <img src="/dominators/d1.png" alt="Scarlet" style={{ width: '60%' }} className="h-auto object-cover" />
                                </div>
                    <div className="rounded-2xl overflow-hidden shadow-lg border border-border mb-8">
                        <img src="/dominators/d2.png" alt="Scarlet In-game" className="w-full h-auto object-cover" />
                    </div>
                    {/* Living Armor */}
                    <h2 className="text-3xl font-bold mb-2 text-sky-500">Living Armor</h2>
                    <div className="text-lg text-foreground mb-2">
                        <strong>EP:</strong> 60,000<br />
                        <strong>Armor:</strong> 48<br />
                        <strong>HP:</strong> 300<br />
                        <strong>Attack:</strong> 125
                    </div>
                    <h3 className="font-bold text-blue-500 mt-4 mb-2">Attacks & Abilities</h3>
                    <ul className="list-disc ml-6 text-base mb-2">
                        <li><strong>Horizontal Slash</strong> – Normal horizontal attack</li>
                        <li><strong>Overhead Slash</strong> – Slashes downward causing knock back</li>
                        <li><strong>Spinning Attack</strong> – Spins around and moves towards player axe first</li>
                    </ul>
                    <h3 className="font-bold text-blue-500 mt-4 mb-2">Skills</h3>
                    <div className="text-base mb-2">
                        <strong>Intrinsic Skills:</strong> Self Regeneration, Absorb and dissolve<br />
                        <strong>Resistances:</strong> Physical Attack Resistance
                    </div>
                                <div className="flex justify-center mb-8">
                                    <img src="/dominators/d3.png" alt="Living Armor" style={{ width: '60%' }} className="h-auto object-cover" />
                                </div>
                    <div className="rounded-2xl overflow-hidden shadow-lg border border-border mb-8">
                        <img src="/dominators/d4.png" alt="Living Armor In-game" className="w-full h-auto object-cover" />
                    </div>
                    {/* Ghost */}
                    <h2 className="text-3xl font-bold mb-2 text-sky-500">Ghost</h2>
                    <div className="text-lg text-foreground mb-2">
                        <strong>EP:</strong> 75,000<br />
                        <strong>Armor:</strong> 10<br />
                        <strong>HP:</strong> 200<br />
                        <strong>Attack:</strong> 25
                    </div>
                    <h3 className="font-bold text-blue-500 mt-4 mb-2">Attacks & Abilities</h3>
                    <ul className="list-disc ml-6 text-base mb-2">
                        <li><strong>Slash Attack</strong> – Weak 25 damage basic attack</li>
                    </ul>
                    <h3 className="font-bold text-blue-500 mt-4 mb-2">Skills</h3>
                    <div className="text-base mb-2">
                        <strong>Magic :</strong> Tornado Blade – Wind blades, Holy Ray<br />
                        <strong>Resistances:</strong> Physical Attack Resistance
                    </div>
                                <div className="flex justify-center mb-8">
                                    <img src="/dominators/d5.png" alt="Ghost" style={{ width: '60%' }} className="h-auto object-cover" />
                                </div>
                    <div className="rounded-2xl overflow-hidden shadow-lg border border-border mb-8">
                        <img src="/dominators/d6.png" alt="Ghost In-game" className="w-full h-auto object-cover" />
                    </div>
                    {/* Skeleton Knight */}
                    <h2 className="text-3xl font-bold mb-2 text-sky-500">Skeleton Knight</h2>
                    <div className="text-lg text-foreground mb-2">
                        <strong>EP:</strong> 50,000<br />
                        <strong>Armor:</strong> 32<br />
                        <strong>HP:</strong> 250<br />
                        <strong>Attack:</strong> 100
                    </div>
                    <h3 className="font-bold text-blue-500 mt-4 mb-2">Attacks & Abilities</h3>
                    <ul className="list-disc ml-6 text-base mb-2">
                        <li><strong>Quick Slash</strong> – Quickly slashes downward</li>
                        <li><strong>Heavy Slash</strong> – Slashes downward dealing decent damage</li>
                        <li><strong>Orichalcum Shield Block</strong> – Blocks damage when shield is raised</li>
                    </ul>
                    <h3 className="font-bold text-blue-500 mt-4 mb-2">Skills</h3>
                    <div className="text-base mb-2">
                        <strong>Resistances:</strong> Physical Attack Resistance
                    </div>
                                <div className="flex justify-center mb-8">
                                    <img src="/dominators/d7.png" alt="Skeleton Knight" style={{ width: '60%' }} className="h-auto object-cover" />
                                </div>
                    <div className="rounded-2xl overflow-hidden shadow-lg border border-border mb-8">
                        <img src="/dominators/d8.png" alt="Skeleton Knight In-game" className="w-full h-auto object-cover" />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
