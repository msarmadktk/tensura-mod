import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { GameCard } from "@/components/ui/game-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { bosses } from "@/data/bosses";
import blackSpider from "@/assets/black-spider.png";

// Image mapping for bosses
const bossImageMap: Record<string, string> = {
  "black-spider": blackSpider,
};
import { useState } from "react";
import { Search, Filter } from "lucide-react";

export default function Bosses() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFloor, setSelectedFloor] = useState<string>("all");

  const floors = ["all", ...Array.from(new Set(bosses.map(boss => boss.floor.toString())))];

  const filteredBosses = bosses.filter(boss => {
    const matchesSearch = boss.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         boss.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         boss.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesFloor = selectedFloor === "all" || boss.floor.toString() === selectedFloor;
    
    return matchesSearch && matchesFloor;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="py-16 bg-muted/30">
        <div className="container-main">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-primary">Legendary</span>{" "}
              <span className="text-gradient-blue">Bosses</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Face the ultimate challenges across 50 floors of the Colosseum. Each boss brings unique abilities, 
              devastating attacks, and exclusive rewards for those brave enough to defeat them.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-border">
        <div className="container-main">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search bosses, abilities, or rewards..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Floor Filter */}
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <div className="flex flex-wrap gap-2">
                {floors.map((floor) => (
                  <Button
                    key={floor}
                    variant={selectedFloor === floor ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedFloor(floor)}
                  >
                    {floor === "all" ? "All Floors" : `Floor ${floor}`}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Boss Grid */}
      <section className="py-12">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBosses.map((boss) => (
              <GameCard
                key={boss.slug}
                title={boss.name}
                description={boss.description}
                image={bossImageMap[boss.slug] || "/placeholder.svg"}
                tags={boss.tags}
                href={`/bosses/${boss.slug}`}
                stats={[
                  { label: "Floor", value: boss.floor.toString() },
                  { label: "EP", value: boss.ep || "Unknown" },
                  { label: "HP", value: boss.hp || "Unknown" },
                  { label: "Attack", value: boss.attack || "Unknown" }
                ]}
              />
            ))}
          </div>

          {filteredBosses.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No bosses found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}