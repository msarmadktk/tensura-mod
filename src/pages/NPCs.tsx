import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { GameCard } from "@/components/ui/game-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { npcs } from "@/data/npcs";
import kurobee from "@/assets/kurobee.png";

// Image mapping for NPCs
const npcImageMap: Record<string, string> = {
  "kurobee": kurobee,
};
import { useState } from "react";
import { Search, Users } from "lucide-react";

export default function NPCs() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredNPCs = npcs.filter(npc => {
    const matchesSearch = npc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         npc.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         npc.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         npc.services.some(service => service.toLowerCase().includes(searchQuery.toLowerCase())) ||
                         npc.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="py-16 bg-muted/30">
        <div className="container-main">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-primary">Dungeon</span>{" "}
              <span className="text-gradient-blue">NPCs</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Meet the essential characters who make the dungeon lobby your home base. 
              From weapon smiths to survival specialists, each NPC offers unique services to aid your journey.
            </p>
            <div className="flex items-center justify-center gap-2 mt-4">
              <Users className="h-5 w-5 text-accent" />
              <span className="text-muted-foreground">Lobby inhabitants ready to assist</span>
            </div>
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="py-8 border-b border-border">
        <div className="container-main">
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search NPCs, roles, or services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* NPCs Grid */}
      <section className="py-12">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNPCs.map((npc) => (
              <GameCard
                key={npc.slug}
                title={npc.name}
                description={npc.description}
                image={npcImageMap[npc.slug] || "/placeholder.svg"}
                tags={npc.tags}
                href={`/npcs/${npc.slug}`}
                stats={[
                  { label: "Role", value: npc.role },
                  { label: "Services", value: npc.services.length.toString() }
                ]}
              />
            ))}
          </div>

          {filteredNPCs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No NPCs found matching your search.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}