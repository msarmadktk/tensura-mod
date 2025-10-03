import { Footer } from "@/components/ui/footer";
import { Navigation } from "@/components/ui/navigation";



export default function DiablosArmor() {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Navigation />
            <main className="container-main py-16 flex flex-col items-center" style={{ width: "900px", maxWidth: "95vw" }}>
                <h1 className="text-5xl font-extrabold mb-6 text-yellow-600 drop-shadow-sm">Diablo’s Armor</h1>
                <img
                    src="/diablo/d1.png"
                    alt="Diablo's Armor"
                    className="mx-auto mb-8 w-64 h-auto drop-shadow"
                />
                <div className="w-full max-w-xl">
                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-sky-600 opacity-90">
                        Diablo’s Armor Stats
                    </h2>
                    <div className="mb-6">
                        <div className="text-base font-semibold">
                            Grades: <span className="text-yellow-500 font-bold">Legend</span> <span className="text-red-500 font-bold">/ God</span>
                        </div>
                        <div className="text-base font-semibold">
                            Infusion: <span className="font-bold text-gray-700">Darkness</span>
                        </div>
                        <div className="mt-4">
                            <div className="font-bold text-gray-800 mb-1">Diablo’s Chestplate:</div>
                            <div className="ml-2 text-base">
                                Armor: <span className="text-red-500 font-bold">12</span><span className="text-red-600 font-bold">15</span><br />
                                Armor Toughness: <span className="text-orange-500 font-bold">6</span>/<span className="text-orange-600 font-bold">8</span><br />
                                Knockback Resistance : <span className="text-orange-500 font-bold">6</span>/<span className="text-orange-600 font-bold">8</span>
                            </div>
                        </div>
                        <div className="mt-4">
                            <div className="font-bold text-gray-800 mb-1">Diablo’s Leggings:</div>
                            <div className="ml-2 text-base">
                                Armor: <span className="text-red-500 font-bold">10</span>/<span className="text-red-600 font-bold">13</span><br />
                                Armor Toughness: <span className="text-orange-500 font-bold">6</span>/<span className="text-orange-600 font-bold">8</span><br />
                                Knockback Resistance : <span className="text-orange-500 font-bold">6</span>/<span className="text-orange-600 font-bold">8</span>
                            </div>
                        </div>
                    </div>
                    <h2 className="text-2xl font-bold mb-2 text-sky-500 mt-8">Abilities</h2>
                    <div className="text-lg font-semibold text-gray-700 mb-8">
                        <span className="font-bold">Darkness Infusion set bonus.</span>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
