import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { GameCard } from "@/components/ui/game-card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter } from "lucide-react";
import { bossDrops } from "@/data/equipment";
import { useState } from "react";

export default function BossDrops() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGrade, setSelectedGrade] = useState<string>("");

  // Filter for boss drop items only
  const bossDropItems = bossDrops.filter(item => 
    item.tags?.includes("Boss Drop") || 
    item.tags?.includes("Floor 10") || 
    item.tags?.includes("Floor 20") ||
    item.tags?.includes("Floor 30") ||
    item.tags?.includes("Floor 40") ||
    item.tags?.includes("Floor 50")
  );

  // Get all unique grades
  const allGrades = Array.from(
    new Set(bossDropItems.flatMap(item => item.grades || []))
  );

  // Filter items
  const filteredItems = bossDropItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGrade = !selectedGrade || item.grades?.includes(selectedGrade);
    return matchesSearch && matchesGrade;
  });

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-16">
          <div className="container-main">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Boss Drops
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Rare and powerful equipment dropped by dungeon bosses. Each floor boss offers unique rewards 
              with varying grades and special abilities. Plan your battles to collect these coveted items.
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
                  placeholder="Search boss drops..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium text-foreground">Filter by grade:</span>
              </div>
            </div>
            
            {/* Grade filters */}
            <div className="flex flex-wrap gap-2">
              <Badge
                variant={selectedGrade === "" ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setSelectedGrade("")}
              >
                All
              </Badge>
              {allGrades.map(grade => (
                <Badge
                  key={grade}
                  variant={selectedGrade === grade ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => setSelectedGrade(grade)}
                >
                  {grade}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Boss Drops Grid */}
        <section className="py-12">
          <div className="container-main">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <GameCard
                  key={item.slug}
                  title={item.name}
                  description={item.description}
                  image="/placeholder.svg"
                  tags={item.tags}
                  href={`/boss-drops/${item.slug}`}
                  stats={[
                    { label: "Grades", value: item.grades?.join(", ") || "N/A" },
                    { label: "Source", value: item.tags?.find(tag => tag.includes("Floor")) || "Boss Drop" },
                    ...(item.attackDamage ? [{ label: "Attack", value: item.attackDamage }] : []),
                    ...(item.infusion ? [{ label: "Infusion", value: item.infusion }] : [])
                  ]}
                />
              ))}
            </div>
            
            {filteredItems.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">No boss drops found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}