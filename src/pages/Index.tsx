import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { GameCard } from "@/components/ui/game-card";
import { npcs } from "@/data/npcs";
import { bosses } from "@/data/bosses";
import { shopWeapons, bossDrops } from "@/data/equipment";
import heroImage from "@/assets/hero-dungeon.jpg";
import colosseumEntrance from "@/assets/colosseum-entrance.png";
import dungeonLobby from "@/assets/dungeon-lobby.png";
import blackSpider from "@/assets/black-spider.png";
import kurobee from "@/assets/kurobee.png";
import hakuroKatana from "@/assets/hakuro-katana.png";
import skyWalk from "@/assets/sky-walk.png";

const Index = () => {
  // Preview data for each section
  const sectionsPreview = [
    {
      title: "Structures",
      href: "/structures",
      description: "Discover the massive dungeon floors and hidden chambers",
      items: [
        {
          title: "Colosseum Entrance",
          description: "The grand entrance to the 50-floor dungeon challenge",
          image: colosseumEntrance,
          tags: ["Entrance", "Portal", "Dungeon"],
          href: "/structures/colosseum-entrance"
        },
        {
          title: "Dungeon Lobby",
          description: "The central hub where all NPCs reside",
          image: dungeonLobby,
          tags: ["Safe Zone", "NPCs", "Hub"],
          href: "/structures/dungeon-lobby"
        },
        {
          title: "Shrine Chambers",
          description: "Daily challenge rooms with tiered rewards",
          image: "/images/structures/shrine-chamber.png",
          tags: ["Challenges", "Daily", "Rewards"],
          href: "/structures/shrine-chamber"
        }
      ]
    },
    {
      title: "Bosses",
      href: "/bosses",
      description: "Face legendary guardians across 50 challenging floors",
      items: bosses.slice(0, 3).map(boss => ({
        title: boss.name,
        description: boss.description,
        image: boss.image,
        tags: boss.tags,
        href: `/bosses/${boss.slug}`,
        stats: [
          { label: "Floor", value: boss.floor.toString() },
          { label: "EP", value: boss.ep || "Unknown" }
        ]
      }))
    },
    {
      title: "Boss Drops",
      href: "/boss-drops",
      description: "Legendary equipment dropped by defeated bosses",
      items: bossDrops.slice(0, 3).map(item => ({
        title: item.name,
        description: item.description,
        image: item.image,
        tags: item.tags,
        href: `/boss-drops/${item.slug}`,
        stats: [
          { label: "Grades", value: item.grades.length.toString() },
          { label: "Attack", value: item.attackDamage || "Varies" }
        ]
      }))
    },
    {
      title: "Player Animations",
      href: "/animations",
      description: "Custom animation sets and movement abilities",
      items: [
        {
          title: "Sky Walk Animation",
          description: "Master Wind Domination to gain aerial foothold abilities",
          image: skyWalk,
          tags: ["Battlewill", "Wind", "Aerial"],
          href: "/animations/sky-walk"
        },
        {
          title: "Combat Stances",
          description: "Various weapon-specific combat animations",
          image: "/images/animations/combat-stances.png",
          tags: ["Combat", "Weapons", "Stances"],
          href: "/animations/combat-stances"
        },
        {
          title: "Magic Casting",
          description: "Elemental magic and skill activation animations",
          image: "/images/animations/magic-casting.png",
          tags: ["Magic", "Elements", "Skills"],
          href: "/animations/magic-casting"
        }
      ]
    },
    {
      title: "Shop Weapons & Gear",
      href: "/shop",
      description: "Premium equipment from Kurobee and boss drops",
      items: shopWeapons.slice(0, 3).map(weapon => ({
        title: weapon.name,
        description: weapon.description,
        image: weapon.image,
        tags: weapon.tags,
        href: `/shop/${weapon.slug}`,
        stats: [
          { label: "Damage", value: weapon.attackDamage || "Varies" },
          { label: "Infusion", value: weapon.infusion || "None" }
        ]
      }))
    },
    {
      title: "NPCs",
      href: "/npcs",
      description: "Meet the essential characters in the dungeon lobby",
      items: npcs.slice(0, 3).map(npc => ({
        title: npc.name,
        description: npc.description,
        image: npc.image,
        tags: npc.tags,
        href: `/npcs/${npc.slug}`,
        stats: [
          { label: "Role", value: npc.role },
          { label: "Services", value: npc.services.length.toString() }
        ]
      }))
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-24 lg:py-40 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Epic dungeon entrance"
            className="w-full h-full object-cover scale-105 "
          />
          {/* Dark gradient + vignette to boost contrast and keep text readable */}
          <div
            className="
              absolute inset-0
              bg-gradient-to-b from-black/60 via-black/45 to-black/70
            "
            aria-hidden="true"
          />
          {/* Soft center spotlight so middle isn't too dark */}
          <div
            className="
              absolute inset-0 pointer-events-none
              [background:radial-gradient(60%_50%_at_50%_45%,rgba(255,255,255,0.18),transparent_70%)]
            "
            aria-hidden="true"
          />
        </div>

        <div className="container-main relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-6">
              <span
                className="
                  align-top
                  text-sky-200
                  drop-shadow-[0_6px_18px_rgba(0,0,0,0.6)]
                "
              >
                Tensura :
              </span>{" "}
              <span className="text-primary drop-shadow-[0_4px_12px_rgba(0,0,0,0.55)]">
                Dungeon
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-white/85 mb-8 max-w-2xl mx-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)]">
              Embark on the ultimate Minecraft dungeon adventure. Battle legendary bosses,
              collect mythical gear, and conquer 50 floors of the mystical Colosseum.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="btn-hero text-lg px-8 py-4">
                <Link to="/bosses">Explore Bosses</Link>
              </Button>
              <Button asChild className="btn-secondary text-lg px-8 py-4">
                <Link to="/guide">Complete Game Guide</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Preview Sections */}
      <section className="py-16">
        <div className="container-main">
          <div className="space-y-16">
            {sectionsPreview.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="section-header">{section.title}</h2>
                    <p className="text-muted-foreground">{section.description}</p>
                  </div>
                  <Button asChild variant="outline">
                    <Link to={section.href}>View All</Link>
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.items.map((item, itemIndex) => (
                    <GameCard
                      key={itemIndex}
                      title={item.title}
                      description={item.description}
                      image={item.image}
                      tags={item.tags}
                      href={item.href}
                      stats={item.stats}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Complete Game Guide CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container-main">
          <div className="text-center">
            <h2 className="section-header">Master the Dungeon</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get the complete walkthrough with boss strategies, equipment guides,
              and advanced mechanics to dominate every floor.
            </p>
            <Button asChild className="btn-hero text-lg px-8 py-4">
              <Link to="/guide">Complete Game Guide</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
