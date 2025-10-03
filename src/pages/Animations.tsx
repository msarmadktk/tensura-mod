import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { GameCard } from "@/components/ui/game-card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter } from "lucide-react";
import { animations } from "@/data/animations";
import { useState } from "react";

// Import images
import skyWalk from "@/assets/sky-walk.png";

const animationImageMap: Record<string, string> = {
  "sky-walk": skyWalk,
};

export default function Animations() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState<string>("");

  // Get all unique tags
  const allTags = Array.from(
    new Set(animations.flatMap(animation => animation.tags || []))
  );

  // Filter animations
  const filteredAnimations = animations.filter(animation => {
    const matchesSearch = animation.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         animation.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = !selectedTag || animation.tags?.includes(selectedTag);
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
              Player Animations
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Master dynamic combat animations, magical casting sequences, and special movement abilities. 
              Enhance your gameplay experience with fluid, responsive character animations.
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
                  placeholder="Search animations..."
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

        {/* Animations Grid */}
        <section className="py-12">
          <div className="container-main">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAnimations.map((animation) => (
                <GameCard
                  key={animation.slug}
                  title={animation.name}
                  description={animation.description}
                  image={animationImageMap[animation.slug] || "/placeholder.svg"}
                  tags={animation.tags}
                  href={`/animations/${animation.slug}`}
                  stats={animation.stats ? Object.entries(animation.stats).map(([label, value]) => ({
                    label,
                    value: String(value)
                  })) : undefined}
                />
              ))}
            </div>
            
            {filteredAnimations.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">No animations found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}