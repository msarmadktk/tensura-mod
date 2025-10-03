import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { GameCard } from "@/components/ui/game-card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter } from "lucide-react";
import { structures } from "@/data/structures";
import { useState } from "react";

// Import images
import colosseumEntrance from "@/assets/colosseum-entrance.png";
import dungeonLobby from "@/assets/dungeon-lobby.png";

const structureImageMap: Record<string, string> = {
  "colosseum-entrance": colosseumEntrance,
  "dungeon-lobby": dungeonLobby,
};

export default function Structures() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState<string>("");

  // Get all unique tags
  const allTags = Array.from(
    new Set(structures.flatMap(structure => structure.tags || []))
  );

  // Filter structures
  const filteredStructures = structures.filter(structure => {
    const matchesSearch = structure.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         structure.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = !selectedTag || structure.tags?.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-16">
          <div className="container-main">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Dungeon Structures
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Explore the magnificent architecture and key locations within the 50-floor dungeon. 
              From the grand Colosseum entrance to specialized chambers and safe zones.
            </p>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-8 border-b">
          <div className="container-main">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search structures..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium text-foreground">Filter by type:</span>
              </div>
            </div>
            
            {/* Tag filters */}
            <div className="flex flex-wrap gap-2">
              <Badge
                variant={selectedTag === "" ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setSelectedTag("")}
              >
                All
              </Badge>
              {allTags.map(tag => (
                <Badge
                  key={tag}
                  variant={selectedTag === tag ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => setSelectedTag(tag)}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Structures Grid */}
        <section className="py-12">
          <div className="container-main">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredStructures.map((structure) => (
                <GameCard
                  key={structure.slug}
                  title={structure.name}
                  description={structure.description}
                  image={structureImageMap[structure.slug] || "/placeholder.svg"}
                  tags={structure.tags}
                  href={`/structures/${structure.slug}`}
                  stats={structure.stats ? Object.entries(structure.stats).map(([label, value]) => ({
                    label,
                    value: String(value)
                  })) : undefined}
                />
              ))}
            </div>
            
            {filteredStructures.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">No structures found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}