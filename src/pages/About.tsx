import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";

const About = () => (
  <div className="min-h-screen bg-background">
    <Navigation />
    <main className="container-main py-16">
      <h1 className="text-5xl font-extrabold text-center mb-10" style={{ color: '#d4af37' }}>About Us</h1>
      <div className="space-y-6">
        <div className="bg-white/90 rounded-lg border-2 border-primary/20 shadow p-6">
          <h2 className="text-2xl font-semibold mb-2 text-sky-600">Who We Are</h2>
          <p className="text-muted-foreground">
            The TR: Beyond team are a group of passionate individuals with a vision to improve the player experience for the Tensura mod by adding more gear to grind, new bosses, new systems, new ways to grind EP and much much more.
          </p>
        </div>
        <div className="bg-white/90 rounded-lg border-2 border-primary/20 shadow p-6">
          <h2 className="text-2xl font-semibold mb-2 text-sky-600">How It Started</h2>
          <p className="text-muted-foreground">
            Originally we were just a group of beta testers for the Tensura mod that wanted to create the dungeon from Reincarnated as a slime mostly because we wanted to play it. Originally the goal was to just build out a randomly generated dungeon and to purely use the mobs, bosses and systems provided by the main Tensura mod. But Zephyr financially contributing to the mod made it so we could add assets, hire people to help us, and do many more things that wouldn't have been possible otherwise.
          </p>
        </div>
        <div className="bg-white/90 rounded-lg border-2 border-primary/20 shadow p-6">
          <h2 className="text-2xl font-semibold mb-2 text-sky-600">Future Plans</h2>
          <p className="text-muted-foreground">
            In the future we are going to launch our server, port the mod to 1.21, add more floors and much much more. Stay Tuned.
          </p>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default About;
