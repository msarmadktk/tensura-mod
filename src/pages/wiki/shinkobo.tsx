import { Footer } from "@/components/ui/footer";
import { Navigation } from "@/components/ui/navigation";


export default function Shinkobo() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <main className="container-main py-16 flex flex-col items-center">
        <h1 className="text-5xl font-bold mb-4 text-yellow-600">Minos Bardiche</h1>
        <div className="w-full max-w-xl">
          <div className="flex justify-center mb-6">
            <img src="/shinboko/s1.png" alt="Minos Bardiche" className="w-64 h-64 object-contain" />
          </div>
          <h2 className="text-2xl font-bold text-sky-500 mb-2">Minos Bardiche Stats</h2>
          <div className="mb-4 text-base">
            <div><span className="font-bold">Grades:</span> <span className="text-purple-500 font-bold">Unique</span> / <span className="text-yellow-500 font-bold">Legend</span> / <span className="text-red-500 font-bold">God</span></div>
            <div>Infusion: None</div>
            <div>Attack Damage: <span className="text-blue-500 font-bold">34</span> / <span className="text-yellow-500 font-bold">44</span> / <span className="text-red-500 font-bold">69</span></div>
            <div>Attack Speed: 1</div>
            <div>Range: +2</div>
          </div>
          <h2 className="text-2xl font-bold text-sky-500 mb-2">Abilities</h2>
          <div className="mb-4 text-base">
            <span className="font-bold">Throwing Spin:</span> Right-click to throw axe. Returns with Molecular Manipulation/Gravity Domination. Enhanced with Thrower skill.<br />
            <span className="font-bold">Lightning Enhancement:</span> With 3+ Wind Cores – adds lightning damage and 20% Paralysis V chance.
          </div>
          <h2 className="text-2xl font-bold text-sky-500 mb-2">Where to Find</h2>
          <div className="mb-4 text-base">
            •
            <a
              href="/wiki/floor-50-gozul"
              className="ml-2 font-bold text-violet-600 underline hover:text-violet-800 transition"
            >
              Gozul Boss
            </a>
          </div>
          <div className="mb-4 text-base">
            •
            <a
              href="/wiki/floor-50-mezul"
              className="ml-2 font-bold text-violet-600 underline hover:text-violet-800 transition"
            >
              Mezul Boss
            </a>
          </div>
        </div>


      </main>
      <Footer />
    </div>
  );
}
