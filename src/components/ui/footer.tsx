import { Link } from "react-router-dom";
import { ExternalLink, Users, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container-main py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold">
                <span className="text-gradient-blue">Tensura</span>{" "}
                <span className="text-primary">Dungeon</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              The ultimate Minecraft dungeon mod inspired by Tensura Dungeon. Battle bosses, collect legendary gear, and master the Colosseum.
            </p>
            <div className="flex items-center space-x-2">
              <span className="coming-soon">Coming Soon</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-primary mb-4">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/wiki/dungeon-map" className="text-muted-foreground hover:text-accent transition-colors">Dungeon Map</Link></li>
              <li><Link to="/wiki/entry-requirements" className="text-muted-foreground hover:text-accent transition-colors">Entry Requirements</Link></li>
              <li><Link to="/wiki/essential-items" className="text-muted-foreground hover:text-accent transition-colors">Essential Items</Link></li>
              <li><Link to="/wiki" className="text-muted-foreground hover:text-accent transition-colors">Complete Game Guide</Link></li>
              <li><Link to="/wiki/core-rules" className="text-muted-foreground hover:text-accent transition-colors">Core Rules</Link></li>
              <li><Link to="/wiki/special-mechanics" className="text-muted-foreground hover:text-accent transition-colors">Special Mechanics</Link></li>
              <li><Link to="/wiki/infusion-effects" className="text-muted-foreground hover:text-accent transition-colors">Infusion Effects</Link></li>

            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-primary mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">

              <li><Link to="/wiki/kurobee" className="text-muted-foreground hover:text-accent transition-colors">Kurobee</Link></li>
              <li><Link to="/wiki/dryad" className="text-muted-foreground hover:text-accent transition-colors">Dryad</Link></li>
              <li><Link to="/wiki/guild-lady" className="text-muted-foreground hover:text-accent transition-colors">Guild Lady</Link></li>
              <li><Link to="/wiki/mjollmile" className="text-muted-foreground hover:text-accent transition-colors">Mjöllmile</Link></li>
              <li><Link to="/wiki/kaoru-yoshida" className="text-muted-foreground hover:text-accent transition-colors">Kaoru Yoshida</Link></li>
              <li><Link to="/wiki/kaijin" className="text-muted-foreground hover:text-accent transition-colors">Kaijin</Link></li>
              <li><Link to="/wiki/koby" className="text-muted-foreground hover:text-accent transition-colors">Koby</Link></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="font-semibold text-primary mb-4">Community</h3>
            <div className="space-y-3">
              <a
                href="https://discord.gg/tnz5jSxUQp"
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Users className="h-4 w-4" />
                <span>Join Discord</span>
                <ExternalLink className="h-3 w-3" />
              </a>
              <a
                href="https://www.patreon.com/TRBeyond?utm_campaign=creatorshare_creator"
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Heart className="h-4 w-4" />
                <span>Support on Patreon</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2024 TR: Beyond. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground mt-2 md:mt-0">
              Built with ❤️ for the Minecraft community
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}