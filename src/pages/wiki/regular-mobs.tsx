import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";

export default function RegularMobs() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <main className="container-main py-16">
        <h1 className="text-4xl font-bold mb-4">Regular Mobs</h1>
        <p>This is the Regular Mobs page.</p>
      </main>
      <Footer />
    </div>
  );
}
