import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";

export default function EntryRequirements() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <main className="container-main py-16">
        <h1 className="text-5xl font-bold mb-4 text-yellow-600">Entry Fee</h1>
        <ul className="text-lg text-foreground mb-8 list-disc list-inside pl-2">
          <li>Requires 3 Silver Coins or a Dungeon Voucher to enter</li>
          <li>New players receive a free starter voucher and revival bracelet from the Dryad</li>
          <li>Attempting entry without payment teleports you to the lobby</li>
        </ul>

        <h2 className="text-3xl font-bold mb-2 text-sky-500">Entry Requirement</h2>
        <div className="rounded-2xl overflow-hidden shadow-lg border border-border max-w-3xl mb-10">
          <img
            src="/entryfee/e1.png"
            alt="Entry Requirement screenshot"
            className="w-full h-auto object-cover"
          />
        </div>

        <h2 className="text-3xl font-bold mb-2 text-sky-500">Entry Without Payment</h2>
        <div className="rounded-2xl overflow-hidden shadow-lg border border-border max-w-3xl">
          <img
            src="/entryfee/e2.png"
            alt="Entry Without Payment screenshot"
            className="w-full h-auto object-cover"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
