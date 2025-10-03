import { Footer } from "@/components/ui/footer";
import { Navigation } from "@/components/ui/navigation";


export default function SlimeMobs() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <main className="container-main py-16 flex flex-col items-center">
        <h1 className="text-5xl font-bold mb-4 text-yellow-600">Slime Dolls</h1>
        <div className="w-full max-w-2xl">
          {/* Green Slime Doll */}
          <h2 className="text-3xl font-bold mb-2 text-sky-500">Green Slime Doll</h2>
          <div className="text-lg text-foreground mb-2">
            <strong>EP:</strong> 10,000–12,000<br />
            <strong>Armor:</strong> 0<br />
            <strong>HP:</strong> 50<br />
            <strong>Attack:</strong> 25
          </div>
          <h3 className="font-bold text-blue-500 mt-4 mb-2">Attacks & Abilities</h3>
          <ul className="list-disc ml-6 text-base mb-2">
            <li><strong>Corrosion</strong> – Dissolves non-legendary weapons on contact</li>
            <li><strong>Split</strong> – Divides into 5 smaller slimes with equal EP and 10 HP each</li>
            <li><strong>Slash Attack</strong> – Basic damage attack</li>
          </ul>
          <h3 className="font-bold text-blue-500 mt-4 mb-2">Skills</h3>
          <div className="text-base mb-2">
            <strong>Intrinsic Skills:</strong> Self Regeneration, Absorb and dissolve<br />
            <strong>Resistances:</strong> Physical Attack Resistance
          </div>
          <div className="flex justify-center mb-8">
            <img src="/slime/s1.png" alt="Green Slime Doll" style={{ width: '50%' }} className="h-auto object-cover" />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-border mb-8">
            <img src="/slime/s2.png" alt="Green Slime Doll In-game" className="w-full h-auto object-cover" />
          </div>
          {/* Yellow Slime Doll */}
          <h2 className="text-3xl font-bold mb-2 text-sky-500">Yellow Slime Doll</h2>
          <div className="text-lg text-foreground mb-2">
            <strong>EP:</strong> 10,000–12,000<br />
            <strong>Armor:</strong> 0<br />
            <strong>HP:</strong> 50<br />
            <strong>Attack:</strong> 25
          </div>
          <h3 className="font-bold text-blue-500 mt-4 mb-2">Attacks & Abilities</h3>
          <ul className="list-disc ml-6 text-base mb-2">
            <li><strong>Corrosion</strong> – Dissolves on contact</li>
            <li><strong>Encasing</strong> – Underground chase and encasement attack with continuous damage</li>
          </ul>
          <h3 className="font-bold text-blue-500 mt-4 mb-2">Skills</h3>
          <div className="text-base mb-2">
            <strong>Intrinsic Skills:</strong> Self Regeneration, Absorb and dissolve<br />
            <strong>Resistances:</strong> Physical Attack Resistance
          </div>
          <div className="flex justify-center mb-8">
            <img src="/slime/s3.png" alt="Yellow Slime Doll" style={{ width: '50%' }} className="h-auto object-cover" />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-border mb-8">
            <img src="/slime/s4.png" alt="Yellow Slime Doll In-game" className="w-full h-auto object-cover" />
          </div>
          {/* Blue Slime Doll */}
          <h2 className="text-3xl font-bold mb-2 text-sky-500">Blue Slime Doll</h2>
          <div className="text-lg text-foreground mb-2">
            <strong>EP:</strong> 10,000–12,000<br />
            <strong>Armor:</strong> 0<br />
            <strong>HP:</strong> 50<br />
            <strong>Attack:</strong> 25
          </div>
          <h3 className="font-bold text-blue-500 mt-4 mb-2">Attacks & Abilities</h3>
          <ul className="list-disc ml-6 text-base mb-2">
            <li><strong>Corrosion</strong> – Dissolves on contact</li>
            <li><strong>Slash Attack</strong> – Extended sharp hand slash</li>
            <li><strong>Stab Attack</strong> – Stabs forward</li>
          </ul>
          <h3 className="font-bold text-blue-500 mt-4 mb-2">Skills</h3>
          <div className="text-base mb-2">
            <strong>Intrinsic Skills:</strong> Self Regeneration, Absorb and dissolve<br />
            <strong>Resistances:</strong> Physical Attack Resistance
          </div>
          <div className="flex justify-center mb-8">
            <img src="/slime/s5.png" alt="Blue Slime Doll" style={{ width: '50%' }} className="h-auto object-cover" />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-border mb-8">
            <img src="/slime/s6.png" alt="Blue Slime Doll In-game" className="w-full h-auto object-cover" />
          </div>
          {/* Red Slime Doll */}
          <h2 className="text-3xl font-bold mb-2 text-sky-500">Red Slime Doll</h2>
          <div className="text-lg text-foreground mb-2">
            <strong>EP:</strong> 10,000–12,000<br />
            <strong>Armor:</strong> 0<br />
            <strong>HP:</strong> 50<br />
            <strong>Attack:</strong> 25
          </div>
          <h3 className="font-bold text-blue-500 mt-4 mb-2">Attacks & Abilities</h3>
          <ul className="list-disc ml-6 text-base mb-2">
            <li><strong>Corrosion</strong> – Dissolves on contact</li>
            <li><strong>Slash Attack</strong> – Extended sharp hand slash</li>
            <li><strong>Stab Attack</strong> – Stabs forward</li>
          </ul>
          <h3 className="font-bold text-blue-500 mt-4 mb-2">Skills</h3>
          <div className="text-base mb-2">
            <strong>Intrinsic Skills:</strong> Self Regeneration, Absorb and dissolve<br />
            <strong>Resistances:</strong> Physical Attack Resistance
          </div>
          <div className="flex justify-center mb-8">
            <img src="/slime/s7.png" alt="Red Slime Doll" style={{ width: '50%' }} className="h-auto object-cover" />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-border mb-8">
            <img src="/slime/s8.png" alt="Red Slime Doll In-game" className="w-full h-auto object-cover" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
 