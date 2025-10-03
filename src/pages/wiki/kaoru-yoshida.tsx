import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";

export default function KaoruYoshida() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <main className="container-main py-16">
        <h1 className="text-5xl font-bold mb-4 text-yellow-600">Kaoru Yoshida</h1>
        <div className="flex justify-center mb-6">
          <img
            src="/kaoru/k1.png"
            alt="Kaoru Yoshida sprite"
            className="h-40 w-auto"
          />
        </div>

        <h2 className="text-2xl font-bold mb-2 text-sky-500">Description</h2>
        <ul className="text-lg text-foreground mb-8 max-w-3xl list-disc list-inside pl-2">
          <li>Yoshida – Floor 95 Restaurant</li>
          <li>Foods and drinks with powerful buffs</li>
          <li>Special effects for dungeon runs</li>
        </ul>

        <h2 className="text-2xl font-bold mb-2 text-sky-500">Food</h2>
        <ul className="text-lg text-foreground mb-8 max-w-3xl list-disc list-inside pl-2">
          <li>Meat – 30 bronze coins: Fills up food bar + Saturation</li>
          <li>Megalodon Sashimi – 1 silver coin: Fills up food bar • Grants Resistance I (1 minute)</li>
          <li>Bulk Meat Skewer – 5 bronze coins: Fills up food bar</li>
          <li>Pork Ramen – 10 bronze coins: Fills up food bar • Grants Saturation (3 minutes)</li>
          <li>Tamahayaki – 3 bronze coins: Fills up food bar</li>
          <li>Sushi Plate – 8 bronze coins: Fills up food bar</li>
          <li>Shuna’s Soup – 10 bronze coins: Removes any non-Tensura negative effects</li>
          <li>Tea – 3 bronze coins: Removes Insanity effect</li>
          <li>Honey – 1 silver coins: Luck 5 (3 minutes)</li>
          <li>Glass brandy – 20 bronze coins: Brandy insanity level +1 • Slowness 1 + level 10 Absorption (1 minute) effects stack Max level is 100.</li>
          <li>Bottle brandy – 2 silver coins</li>
          <li>Gyoza – 4 bronze coins: Fills up food bar</li>
          <li>Coming Soon</li>
          <li>White rice: 3 bronze coins: Fills up food bar</li>
          <li>Black rice: 50 bronze coins: Increases magikule regain.</li>
        </ul>

        <div className="rounded-2xl overflow-hidden shadow-lg border border-border max-w-3xl mb-10">
          <img
            src="/kaoru/k2.png"
            alt="Kaoru Yoshida in-game screenshot"
            className="w-full h-auto object-cover"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
