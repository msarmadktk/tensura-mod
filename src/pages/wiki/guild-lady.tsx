import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";

export default function GuildLady() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <main className="container-main py-16">
        <h1 className="text-5xl font-bold mb-4 text-yellow-600">Guild Lady</h1>
        <div className="flex justify-center mb-6">
          <img
            src="/guildlady/g1.png"
            alt="Guild Lady sprite"
            className="h-40 w-auto"
          />
        </div>

        <h2 className="text-2xl font-bold mb-2 text-sky-500">Description</h2>
        <ul className="text-lg text-foreground mb-8 max-w-2xl list-disc list-inside pl-2">
          <li>Guild Lady – Crystal Buyer</li>
          <li>Buys high-tier magic crystals for top coin</li>
          <li>Gives ID Card</li>
          <li>More Coming soon...</li>
        </ul>

        <div className="rounded-2xl overflow-hidden shadow-lg border border-border max-w-3xl mb-10">
          <img
            src="/guildlady/g2.png"
            alt="Guild Lady in-game screenshot"
            className="w-full h-auto object-cover"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
