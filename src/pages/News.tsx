import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";

const News = () => (
  <div className="min-h-screen bg-background">
    <Navigation />
    <main className="container-main py-16">
      <h1 className="text-4xl font-bold mb-4">News</h1>
      <p className="text-muted-foreground text-lg">Stay tuned for the latest updates and news about Tensura Dungeon!</p>
    </main>
    <Footer />
  </div>
);

export default News;
