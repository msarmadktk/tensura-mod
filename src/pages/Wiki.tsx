import { useEffect, useState, useMemo } from "react";
import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { GameCard } from "@/components/ui/game-card";
import { Search, X, Filter } from "lucide-react";

// ---------------- TOC ----------------
const toc = [
  { label: "Getting Started", anchor: "getting-started" },
  { label: "Dungeon Lobby & NPCs", anchor: "dungeon-lobby-npcs" },
  { label: "Dungeon Mechanics", anchor: "dungeon-mechanics" },
  { label: "Bosses (Floor 10-50)", anchor: "bosses" },
  { label: "Regular Mobs", anchor: "regular-mobs" },
  { label: "Traps & Hazards", anchor: "traps-hazards" },
  { label: "Boss Drop", anchor: "equipment-gear" },
  { label: "Kurobee's Premium Gear", anchor: "kurobee-gear" },
  { label: "Shrine Challenges", anchor: "shrine-challenges" },
  { label: "Server Configuration", anchor: "server-configuration" },
];

// ---------------- Section Arrays ----------------
const gettingStarted = [
  {
    image: "/wikiimg/a1.png",
    heading: "Dungeon Map",
    description: "Sold by Cartographer, use it to locate the Colosseum.",
    tags: ["Map", "Cartographer", "Colosseum"],
    Link: "dungeon-map",
  },
  {
    image: "/wikiimg/a2.png",
    heading: "Entry Requirements",
    description: "Rules/what you need to enter the dungeon.",
    tags: ["Entrance",  "Dungeon"],
    Link: "entry-requirements",
  },
  {
    image: "/wikiimg/a3.png",
    heading: "Essential Items",
    description: "These three items are sold by the Dryad near the dungeon entrance.",
    tags: ["Dryad", "NPC", "Dungeon"],
    Link: "essential-items",
  }
];

const dungeonLobbyNpcs = [
  {
    image: "/wikiimg/b1.png",
    heading: "Kurobee",
    description: "Kurobee was tasked with selling lesser replicas of the executives' weapons and armor at a surcharge — a venture that's proven highly profitable.",
    tags: ["Floor 95", "NPC", "Gear"],
    Link: "kurobee",
  },
    {
    image: "/wikiimg/b2.png",
    heading: "Dryad",
    description: "A Dryad who aids Ramiris in overseeing the dungeon, selling survival items designed for its dangers.",
    tags: ["Shop", "NPC", "Lobby"],
    Link: "dryad",
  },
    {
    image: "/wikiimg/b3.png",
    heading: "Guild Lady",
    description: "Following Rimuru's agreement with Yuuki, a Freedom Association representative was stationed near the dungeon's entrance.",
    tags: ["Shop", "NPC", "Lobby"],
    Link: "guild-lady",
  },
    {
    image: "/wikiimg/b4.png",
    heading: "Mjöllmile",
    description: "Handles coin exchanges. Though he and Rimuru considered adding a premium, they ultimately chose to keep the service free.",
    tags: ["Exchange", "NPC", "Lobby"],
    Link: "mjollmile",
  },
    {
    image: "/wikiimg/b5.png",
    heading: "Kaoru Yoshida",
    description: "Stationed on Floor 95, Kaijin focuses on crafting new and unique recipes to elevate Tempest's culinary culture.",
    tags: ["Floor 95", "NPC", "Food"],
    Link: "kaoru-yoshida",
  },
    {
    image: "/wikiimg/b6.png",
    heading: "Kaijin",
    description: "Kaijin bolsters Tempest's reputation by offering non-critical military schematics to adventurers who reach Floor 95, subtly showcasing the nation's industrial might.",
    tags: ["Schematics", "NPC", "Floor 95"],
    Link: "kaijin",
  },
   {
    image: "/wikiimg/b7.png",
    heading: "Koby",
    description: "Stationed on Floor 95, Koby buys back dungeon-forged weapons and armor, while selling potions he proudly promotes for their quality",
    tags: ["Trades", "NPC", "Floor 95"],
    Link: "koby",
  }
];

const dungeonMechanics = [
   {
    image: "/wikiimg/c1.png",
    heading: "Core Rules",
    description: "Rules and restrictions implemented by Rimuru after extensive trial and error — subject to change.",
    tags: ["Dryad", "Rules", "Dungeon"],
    Link: "core-rules",
  },
     {
    image: "/wikiimg/c2.png",
    heading: "Special Mechanics",
    description: "Features designed to keep the dungeon exciting and engaging throughout adventurers' journeys.",
    tags: ["Unique Monsters", "Loot Explosions"],
    Link: "special-mechanics",
  },
     {
    image: "/wikiimg/c3.png",
    heading: "Infusion Effects",
    description: "Special Buffs only the most powerful weapons acquirable in the dungeon receive. ",
    tags: ["Gear", "Effects"],
    Link: "infusion-effects",
  }
];

const bosses = [
 {
    image: "/wikiimg/d1.png",
    heading: "Floor 10: Black Spider Boss",
    description: "The Black Spider boss offers a semi-difficult challenge for newcomers to the dungeon with its webbing and poison. WATCH OUT FOR THE BABIES!",
    tags: ["Boss", "Gear", "Floor 10"],
    Link: "floor-10-black-spider-boss",
  },
    {
    image: "/wikiimg/d2.png",
    heading: "Floor 20: Evil Centipede Boss",
    description: "Be very careful the Evil Centipede Boss, without the correct resistances you may be killed without even having a chance to move.",
    tags: ["Boss", "Gear", "Floor 20"],
    Link: "floor-20-evil-centipede-boss",
  },
    {
    image: "/wikiimg/d3.png",
    heading: "Floor 30: Ogre Lord",
    description: "The Ogre Lord is the first sentient boss in the dungeon, commanding four subordinates who guard Floor 30 alongside him. Even the Dungeon Dominators struggled against this formidable foe. ",
    tags: ["Boss", "Gear", "Floor 30"],
    Link: "floor-30-ogre-lord",
  },
    {
    image: "/wikiimg/d4.png",
    heading: "Floor 40: Tempest Serpent Boss",
    description: "The Tempest Serpent Boss is no joke, with it's poison breath, contrition and hard scales this boss is an enemy to be reckoned with.",
    tags: ["Boss", "Gear", "Floor 40"],
    Link: "floor-40-tempest-serpent-boss",
  },
    {
    image: "/wikiimg/d5.png",
    heading: "Floor 50: Mezul",
    description: "This is where the dungeon really begins. Not only does Mezul have a unique gift but he also recently acquired regeneration along with his magic interference skill.",
    tags: ["Boss", "Gear", "Floor 50"],
    Link: "floor-50-mezul",
  },
    {
    image: "/wikiimg/d6.png",
    heading: "Floor 50: Gozul",
    description: "After defending Floor 50 together for so long, Gozul's archenemy Mezul eventually became a friendly rival. Oh, and Gozul is also ridiculously strong",
    tags: ["Boss", "Gear", "Floor 50"],
    Link: "floor-50-gozul",
  }
];

const regularMobs = [
  {
    image: "/wikiimg/e1.png",
    heading: "Slime Mobs",
    description: "These Slime Golems were created solely to make adventurers' lives hell. Found on Floor 49 and deeper, even if you survive, you'll rarely escape unscathed.",
    tags: ["Mobs", "Dolls", "Enemies"],
    Link: "slime-mobs",
  },
  {
    image: "/wikiimg/e2.png",
    heading: "Dungeon Dominators",
    description: "These are the avatars of Veldora, Ramiris, Milim, and Rimuru. While it's all just a game to them, they sometimes seem to forget just how terrifying they can truly be. 😅",
    tags: ["Mobs", "Elite", "Enemies"],
    Link: "dungeon-dominators",
  },
   
];

const trapsHazards = [
 {
    image: "/wikiimg/f1.png",
    heading: "Chest Traps",
    description: "You think you've found some sweet loot and—BOOM—you explode. These chests lure you into a false sense of security, only to activate when you least expect it. Whoever designed them must be truly evil.",
    tags: ["Traps", "Dungeon"],
    Link: "chest-traps",
  },
    {
    image: "/wikiimg/f2.png",
    heading: "Environmental Hazards",
    description: "While most of these won't kill you outright, they'll definitely cause some pain. Combined together, they can lead to some dastardly and hilarious effects.",
    tags: ["Traps", "Dungeon"],
    Link: "environmental-hazards",
  },
    {
    image: "/wikiimg/f3.png",
    heading: "Slime Hazards",
    description: "I wish you luck adventurer.",
    tags: ["Slime", "Traps", "Dungeon"],
    Link: "slime-hazards",
  },
    
];

const bossDrop = [
{
    image: "/wikiimg/g1.png",
    heading: "Spider Dagger",
    description: "Click for more info..",
    tags: ["Boss Drop", "Black Spider", "Floor 10"],
    Link: "spider-dagger",
  },
    {
    image: "/wikiimg/g2.png",
    heading: "Centipede Dagger",
    description: "Click for more info..",
    tags: ["Boss Drop", "Evil Centipede", "Floor 20"],
    Link: "centipede-dagger",
  },
    {
    image: "/wikiimg/g3.png",
    heading: "Ogre Set",
    description: "Click for more info..",
    tags: ["Boss Drop", "Ogre Lord", "Floor 30", "Infusion Effects"],
    Link: "ogre-set",
  },
    {
    image: "/wikiimg/g4.png",
    heading: "Serpent Armor",
    description: "Click for more info..",
    tags: ["Boss Drop", "Tempest Serpent", "Floor 40"],
    Link: "serpent-armor",
  },
      {
    image: "/wikiimg/g5.png",
    heading: "Minos Set",
    description: "Click for more info..",
    tags: ["Boss Drop", "Gozul/Mezul", "Floor 50"],
    Link: "minos-set",
  }
   
];


const kurobeeGear = [
{
    image: "/wikiimg/h1.png",
    heading: "Shinkobo",
    description: "Replicas of a weapon used by Byokuen one of Kumaras tail's. This weapon has the unique ability to extend or contract at will.",
    tags: ["Kurobee", "Floor 95", "Infusion Effects", "Weapon"],
    Link: "shinkobo",
  },
    {
    image: "/wikiimg/h2.png",
    heading: "Souei's Ninjatos/Souei's Armor",
    description: "Replicas of Souei's weapons, they gain increased power when dual-wielded and enhance the Unique Skill: Shadow Striker.",
    tags: ["Kurobee", "Floor 95", "Infusion Effects", "Gear"],
    Link: "souei-ninjatos-souei-armor",
  },
    {
    image: "/wikiimg/h3.png",
    heading: "Hakuro's Katana/Hakuro's Armor",
    description: "A replica of Hakuro's weapon, infused with the swordsman's spirit. With practice, it unlocks the ability to use Hazy Style: Thunder of Heaven and Earth.",
    tags: ["Kurobee", "Floor 95",  "Gear"],
    Link: "hakuro-katana-hakuro-armor",
  },
    {
    image: "/wikiimg/h4.png",
    heading: "Guren/Benimaru's Armor",
    description: "Replicas of Benimaru's weapon, infused with his Elemental Flame Soul. With practice, individuals who use this sword will unlock the ability to use Black Flame Slash.",
    tags: ["Kurobee", "Floor 95", "Infusion Effects", "Gear"],
    Link: "guren-benimaru-armor",
  },
    {
    image: "/wikiimg/h5.png",
    heading: "Meat Crusher/Geld's Armor",
    description: "Replicas of Geld's weapon, infused with his Elemental Earth Soul. With practice, individuals who use this cleaver will unlock the ability to use Chaos Eater.",
    tags: ["Kurobee", "Floor 95", "Infusion Effects", "Gear"],
    Link: "meat-crusher-geld-armor",
  },
    {
    image: "/wikiimg/h6.png",
    heading: "Gorikimaru/Shions Armor",
    description: "A replica of Shion's weapon, infused with her Elemental Battle Soul. This weapon enhances the battle will techniques Ogre Sword Guillotine and Ogre Sword Cannon.",
    tags: ["Kurobee", "Floor 95", "Infusion Effects", "Gear"],
    Link: "gorikimaru-shions-armor",
  },
     {
    image: "/wikiimg/h7.png",
    heading: "Vortex Spear/Gabirus Armor",
    description: "A replica of Gabiru's weapon, infused with his Elemental Water Soul. Individuals who use this trident wiil unlock the ability to use Vortex Crash.",
    tags: ["Kurobee", "Floor 95", "Infusion Effects", "Gear"],
    Link: "vortex-spear-gabirus-armor",
  },
  {
    image: "/wikiimg/h8.png",
    heading: "Diablo's Armor",
    description: "Click to see more details...",
    tags: ["Kurobee", "Floor 95", "Infusion Effects", "Gear"],
    Link: "diablos-armor",
  }
   
];


const shrineChallenges = [
{
    image: "/wikiimg/i1.png",
    heading: "Shrines",
    description: "Optional challenges that give increasingly lucrative rewards depending on difficulty.",
    tags: ["Challenges"],
    Link: "shrines",
  }
];

const serverConfiguration = [
  {
    image: "/wikiimg/j1.png",
    heading: "Configs/Gamerules",
    description: "Customize your dungeon.",
    tags: ["Server", "Config", "Difficulty"],
    Link: "configs-gamerules",
  },
    {
    image: "/wikiimg/j2.png",
    heading: "General Server Tips",
    description: "Tips and tricks for managing your server effectively.",
    tags: ["Server", "Adivce", "Important"],
    Link: "general-server-tips",
  }
];

// ---------------- Section Renderer ----------------
const sections = [
  { id: "getting-started", title: "Getting Started", data: gettingStarted },
  { id: "dungeon-lobby-npcs", title: "Dungeon Lobby & NPCs", data: dungeonLobbyNpcs },
  { id: "dungeon-mechanics", title: "Dungeon Mechanics", data: dungeonMechanics },
  { id: "bosses", title: "Bosses (Floor 10-50)", data: bosses },
  { id: "regular-mobs", title: "Regular Mobs", data: regularMobs },
  { id: "traps-hazards", title: "Traps & Hazards", data: trapsHazards },
  { id: "equipment-gear", title: "Boss Drop", data: bossDrop },
  { id: "kurobee-gear", title: "Kurobee's Premium Gear", data: kurobeeGear },
  { id: "shrine-challenges", title: "Shrine Challenges", data: shrineChallenges },
  { id: "server-configuration", title: "Server Configuration", data: serverConfiguration },
];

// ---------------- Wiki Page ----------------
const Wiki = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  // Get all unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    sections.forEach(section => {
      section.data.forEach(item => {
        item.tags.forEach((tag: string) => tags.add(tag));
      });
    });
    return Array.from(tags).sort();
  }, []);

  // Filter sections based on search and tags
  const filteredSections = useMemo(() => {
    if (!searchQuery && selectedTags.length === 0) return sections;

    return sections.map(section => ({
      ...section,
      data: section.data.filter(item => {
        const matchesSearch = searchQuery === "" || 
          item.heading.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.tags.some((tag: string) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

        const matchesTags = selectedTags.length === 0 ||
          selectedTags.every(selectedTag => item.tags.includes(selectedTag));

        return matchesSearch && matchesTags;
      })
    })).filter(section => section.data.length > 0);
  }, [searchQuery, selectedTags]);

  const totalResults = filteredSections.reduce((acc, section) => acc + section.data.length, 0);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedTags([]);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container-main py-16">
        {/* Header with Search */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">
          <h1 className="text-5xl font-extrabold">Wiki</h1>
          
          {/* Search Bar */}
          <div className="lg:flex-1 lg:max-w-2xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search wiki..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-24 py-3 rounded-xl border-2 border-primary/30 bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-2">
                {(searchQuery || selectedTags.length > 0) && (
                  <button
                    onClick={clearFilters}
                    className="p-2 rounded-lg hover:bg-accent transition-colors"
                    title="Clear filters"
                  >
                    <X className="h-5 w-5 text-muted-foreground" />
                  </button>
                )}
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className={`p-2 rounded-lg transition-colors ${showFilters ? 'bg-primary text-primary-foreground' : 'hover:bg-accent'}`}
                  title="Toggle filters"
                >
                  <Filter className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Tags */}
        {showFilters && (
          <div className="mb-6 p-4 rounded-xl border border-primary/30 bg-accent/5">
            <h3 className="text-sm font-semibold mb-3 text-foreground">Filter by Tags:</h3>
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag: string) => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                    selectedTags.includes(tag)
                      ? 'bg-primary text-primary-foreground shadow-md scale-105'
                      : 'bg-accent/20 text-accent hover:bg-accent/30 border border-accent/20'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Search Results Info */}
        {(searchQuery || selectedTags.length > 0) && (
          <div className="flex items-center justify-between px-4 py-2 rounded-lg bg-accent/10 border border-accent/20 mb-6">
            <p className="text-sm text-muted-foreground">
              Found <span className="font-bold text-foreground">{totalResults}</span> result{totalResults !== 1 ? 's' : ''}
              {selectedTags.length > 0 && (
                <span className="ml-2">
                  with {selectedTags.length} filter{selectedTags.length !== 1 ? 's' : ''}
                </span>
              )}
            </p>
          </div>
        )}

        {/* Table of Contents - Only show if no active search/filters */}
        {!searchQuery && selectedTags.length === 0 && (
          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-4 section-header tracking-tight">
              Table of Contents
            </h2>
            <nav>
              <ul className="space-y-3">
                {toc.map((item, idx) => (
                  <li key={item.anchor}>
                    <a
                      href={`#${item.anchor}`}
                      className="block pl-2 py-1 rounded text-xl font-medium font-sans text-primary hover:bg-accent hover:text-accent-foreground transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    >
                      <span className="mr-2 text-base text-muted-foreground">
                        {idx + 1}.
                      </span>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}

        {/* Render Filtered Sections */}
        {filteredSections.length > 0 ? (
          filteredSections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="py-20 border-t border-border"
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">
                {section.title}
                <span className="ml-3 text-sm font-normal text-muted-foreground">
                  ({section.data.length} item{section.data.length !== 1 ? 's' : ''})
                </span>
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                {section.data.map((item) => (
                  <GameCard
                    key={item.heading}
                    title={item.heading}
                    description={item.description}
                    image={item.image}
                    tags={item.tags}
                    href={item.Link ? `/wiki/${item.Link}` : "#"}
                  />
                ))}
              </div>
            </section>
          ))
        ) : (
          <div className="py-20 text-center">
            <div className="max-w-md mx-auto">
              <Search className="h-16 w-16 mx-auto mb-4 text-muted-foreground opacity-50" />
              <h3 className="text-2xl font-bold mb-2 text-foreground">No results found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search query or filters
              </p>
              <button
                onClick={clearFilters}
                className="px-6 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
              >
                Clear all filters
              </button>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Wiki;